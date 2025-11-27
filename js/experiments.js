const ExperimentTheme = (() => {
    const read = () => {
        const styles = getComputedStyle(document.documentElement);
        const value = (name, fallback) => {
            const raw = styles.getPropertyValue(name);
            return raw && raw.trim().length ? raw.trim() : fallback;
        };
        return {
            gravityFadeRGB: value('--exp-gravity-fade-rgb', '255,255,255'),
            pendulumFade: value('--exp-pendulum-fade', 'rgba(255, 255, 255, 0.3)'),
            textMuted: value('--text-secondary', '#5f6368')
        };
    };

    let cache = read();
    window.addEventListener('themechange', () => {
        cache = read();
    });

    return {
        get() {
            return cache;
        }
    };
})();

const Experiments = {
    activeId: null,
    // holds currently running instance { cleanup: fn, setOptions: fn }
    currentInstance: null,

    stopCurrent: function() {
        if (this.currentInstance) {
            try {
                if (typeof this.currentInstance.cleanup === 'function') this.currentInstance.cleanup();
            } catch (err) {
                console.error('Error during experiment cleanup', err);
            }
            this.currentInstance = null;
        }
        this.activeId = null;
    },

    fluid: function(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        // Reset canvas state
        canvas.width = canvas.clientWidth || 800;
        canvas.height = canvas.clientHeight || 400;

        // Parameters stored in an object so they can be updated live
        const params = {
            resolution: options.resolution || 128, // desired resolution
            iter: options.iter || 4,
            dt: options.dt || 0.1,
            diff: options.diff || 0.00005,
            visc: options.visc || 0.00005,
            emit: options.emit || 100,
            decay: options.decay || 0.995
        };

        // performance guard: clamp resolution to device and canvas
        const maxRes = Math.min(256, Math.max(32, Math.floor(canvas.width / 2)));
        const N = Math.max(32, Math.min(params.resolution, maxRes));
        const iter = params.iter;
        const scale = Math.max(1, Math.floor(canvas.width / N));
        const size = (N + 2) * (N + 2);

        // Arrays
        let u = new Float32Array(size);
        let v = new Float32Array(size);
        let u_prev = new Float32Array(size);
        let v_prev = new Float32Array(size);
        let dens = new Float32Array(size);
        let dens_prev = new Float32Array(size);

        // local copies used inside loops (may be updated via setOptions)
        let dt = params.dt;
        let diff = params.diff;
        let visc = params.visc;

        function IX(x, y) {
            return x + (N + 2) * y;
        }

        function set_bnd(b, x) {
            for (let i = 1; i <= N; i++) {
                x[IX(0, i)] = b === 1 ? -x[IX(1, i)] : x[IX(1, i)];
                x[IX(N + 1, i)] = b === 1 ? -x[IX(N, i)] : x[IX(N, i)];
                x[IX(i, 0)] = b === 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
                x[IX(i, N + 1)] = b === 2 ? -x[IX(i, N)] : x[IX(i, N)];
            }
            x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
            x[IX(0, N + 1)] = 0.5 * (x[IX(1, N + 1)] + x[IX(0, N)]);
            x[IX(N + 1, 0)] = 0.5 * (x[IX(N, 0)] + x[IX(N + 1, 1)]);
            x[IX(N + 1, N + 1)] = 0.5 * (x[IX(N, N + 1)] + x[IX(N + 1, N)]);
        }

        function lin_solve(b, x, x0, a, c) {
            const cRecip = 1.0 / c;
            for (let k = 0; k < iter; k++) {
                for (let j = 1; j <= N; j++) {
                    for (let i = 1; i <= N; i++) {
                        x[IX(i, j)] = (x0[IX(i, j)] + a * (x[IX(i + 1, j)] + x[IX(i - 1, j)] + x[IX(i, j + 1)] + x[IX(i, j - 1)])) * cRecip;
                    }
                }
                set_bnd(b, x);
            }
        }

        function diffuse(b, x, x0, diff, dt) {
            const a = dt * diff * (N - 2) * (N - 2);
            lin_solve(b, x, x0, a, 1 + 4 * a);
        }

        function advect(b, d, d0, u, v, dt) {
            let i0, j0, i1, j1;
            let x, y, s0, t0, s1, t1, dt0;

            dt0 = dt * (N - 2);
            for (let j = 1; j <= N; j++) {
                for (let i = 1; i <= N; i++) {
                    x = i - dt0 * u[IX(i, j)];
                    y = j - dt0 * v[IX(i, j)];

                    if (x < 0.5) x = 0.5;
                    if (x > N + 0.5) x = N + 0.5;
                    i0 = Math.floor(x);
                    i1 = i0 + 1;

                    if (y < 0.5) y = 0.5;
                    if (y > N + 0.5) y = N + 0.5;
                    j0 = Math.floor(y);
                    j1 = j0 + 1;

                    s1 = x - i0;
                    s0 = 1.0 - s1;
                    t1 = y - j0;
                    t0 = 1.0 - t1;

                    d[IX(i, j)] = s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) +
                        s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
                }
            }
            set_bnd(b, d);
        }

        function project(u, v, p, div) {
            for (let j = 1; j <= N; j++) {
                for (let i = 1; i <= N; i++) {
                    div[IX(i, j)] = -0.5 * (u[IX(i + 1, j)] - u[IX(i - 1, j)] + v[IX(i, j + 1)] - v[IX(i, j - 1)]) / N;
                    p[IX(i, j)] = 0;
                }
            }
            set_bnd(0, div);
            set_bnd(0, p);
            lin_solve(0, p, div, 1, 4);

            for (let j = 1; j <= N; j++) {
                for (let i = 1; i <= N; i++) {
                    u[IX(i, j)] -= 0.5 * (p[IX(i + 1, j)] - p[IX(i - 1, j)]) * N;
                    v[IX(i, j)] -= 0.5 * (p[IX(i, j + 1)] - p[IX(i, j - 1)]) * N;
                }
            }
            set_bnd(1, u);
            set_bnd(2, v);
        }

        function step() {
            diffuse(1, u_prev, u, visc, dt);
            diffuse(2, v_prev, v, visc, dt);
            project(u_prev, v_prev, u, v);
            advect(1, u, u_prev, u_prev, v_prev, dt);
            advect(2, v, v_prev, u_prev, v_prev, dt);
            project(u, v, u_prev, v_prev);
            diffuse(0, dens_prev, dens, diff, dt);
            advect(0, dens, dens_prev, u, v, dt);
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Simple visualization
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let j = 0; j < N; j++) {
                for (let i = 0; i < N; i++) {
                    const x = i * scale;
                    const y = j * scale;
                    const d = dens[IX(i + 1, j + 1)];

                    // Fill scale block
                    for (let sy = 0; sy < scale; sy++) {
                        for (let sx = 0; sx < scale; sx++) {
                            if (x + sx >= canvas.width || y + sy >= canvas.height) continue;
                            
                            const idx = ((y + sy) * canvas.width + (x + sx)) * 4;
                            // Google Blue-ish smoke
                            data[idx] = Math.min(255, d * 26);     // R
                            data[idx + 1] = Math.min(255, d * 115); // G
                            data[idx + 2] = Math.min(255, d * 232 + 50); // B
                            data[idx + 3] = 255; // Alpha
                        }
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }

        let animationId;
        function loop() {
            // Fade out
            for (let i = 0; i < size; i++) dens[i] *= params.decay;
            step();
            render();
            animationId = requestAnimationFrame(loop);
        }

        // Interaction
        let isMouseDown = false;
        let lastX, lastY;

        const onMouseDown = e => {
            isMouseDown = true;
            const rect = canvas.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        };

        const onMouseUp = () => isMouseDown = false;

        const onMouseMove = e => {
            if (!isMouseDown) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const gridX = Math.floor(x / scale);
            const gridY = Math.floor(y / scale);

            if (gridX > 0 && gridX < N + 1 && gridY > 0 && gridY < N + 1) {
                const index = IX(gridX, gridY);
                dens[index] += params.emit;
                const amtX = x - lastX;
                const amtY = y - lastY;
                u[index] += amtX * 0.5;
                v[index] += amtY * 0.5;
            }
            lastX = x;
            lastY = y;
        };

        canvas.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('mousemove', onMouseMove);

        loop();

        // setOptions allows live updates — returns { requiresReinit: boolean }
        function setOptions(newOpts = {}) {
            const next = Object.assign({}, params, newOpts);
            // Changing resolution requires a full re-init (new arrays & sizes)
            const nextMaxRes = Math.min(256, Math.max(32, Math.floor(canvas.width / 2)));
            const nextN = Math.max(32, Math.min(next.resolution, nextMaxRes));

            const requiresReinit = nextN !== N;

            // Update scalar params for live updates
            params.resolution = next.resolution;
            params.iter = next.iter;
            params.dt = next.dt;
            params.diff = next.diff;
            params.visc = next.visc;
            params.emit = next.emit;
            params.decay = next.decay;

            // update local copies
            dt = params.dt;
            diff = params.diff;
            visc = params.visc;

            return { requiresReinit };
        }

        const instance = {
            cleanup: () => {
                cancelAnimationFrame(animationId);
                canvas.removeEventListener('mousedown', onMouseDown);
                window.removeEventListener('mouseup', onMouseUp);
                canvas.removeEventListener('mousemove', onMouseMove);
            },
            setOptions
        };

        return instance;
    },

    gravity: function(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.clientWidth || 800;
        canvas.height = canvas.clientHeight || 400;

        let particles = [];
        let params = {
            G: options.G || 0.5,
                particleCount: options.particleCount || 6,
            trailAlpha: options.trailAlpha || 0.2
        };

        class Particle {
            constructor(x, y, vx, vy, mass, color) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.mass = mass;
                this.radius = Math.sqrt(mass) * 2;
                this.color = color;
                this.path = [];
            }

            update() {
                for (let other of particles) {
                    if (other === this) continue;
                    let dx = other.x - this.x;
                    let dy = other.y - this.y;
                    let distSq = dx * dx + dy * dy;
                    let dist = Math.sqrt(distSq);
                    if (dist < 5) dist = 5; // Clamp distance

                    let force = (params.G * this.mass * other.mass) / distSq;
                    let fx = force * (dx / dist);
                    let fy = force * (dy / dist);

                    this.vx += fx / this.mass;
                    this.vy += fy / this.mass;
                }
                this.x += this.vx;
                this.y += this.vy;

                if (this.path.length > 50) this.path.shift();
                this.path.push({ x: this.x, y: this.y });
            }

            draw() {
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = 0.4;
                ctx.lineWidth = 1;
                for (let p of this.path) ctx.lineTo(p.x, p.y);
                ctx.stroke();
                ctx.globalAlpha = 1.0;

                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, 0, 0, 1000, '#fbbc04')); // Google Yellow
            const orbCount = Math.max(0, params.particleCount - 1);
            for (let i = 0; i < orbCount; i++) {
            let x = canvas.width / 2 + Math.random() * 200 - 100;
            let y = canvas.height / 2 + Math.random() * 200 - 100;
            if (Math.abs(x - canvas.width / 2) < 50) x += 100;

            let dx = x - canvas.width / 2;
            let dy = y - canvas.height / 2;
            let dist = Math.sqrt(dx * dx + dy * dy);
            let v = Math.sqrt(params.G * 1000 / dist);
                let vx = -dy / dist * v;
            let vy = dx / dist * v;

            const colors = ['#4285f4', '#ea4335', '#34a853']; // Google Blue, Red, Green
            particles.push(new Particle(x, y, vx, vy, Math.random() * 10 + 2, colors[i % 3]));
        }

        let animationId;
        function animate() {
            const colors = ExperimentTheme.get();
            ctx.fillStyle = `rgba(${colors.gravityFadeRGB},${params.trailAlpha})`; // Fade trail per theme
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        }

        // Interaction
        let isDragging = false;
        let startX, startY;

        const onMouseDown = e => {
            isDragging = true;
            const rect = canvas.getBoundingClientRect();
            startX = e.clientX - rect.left;
            startY = e.clientY - rect.top;
        };

        const onMouseUp = e => {
            if (!isDragging) return;
            isDragging = false;
            const rect = canvas.getBoundingClientRect();
            let endX = e.clientX - rect.left;
            let endY = e.clientY - rect.top;
            let vx = (startX - endX) * 0.05;
            let vy = (startY - endY) * 0.05;
            particles.push(new Particle(startX, startY, vx, vy, Math.random() * 10 + 2, '#5f6368'));
        };

        canvas.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        animate();

        function setOptions(newOpts = {}) {
            const prevCount = params.particleCount;
            params = Object.assign(params, newOpts);
            // if particle count changed, re-init to regenerate system
            const requiresReinit = prevCount !== params.particleCount;
            return { requiresReinit };
        }

        const instance = {
            cleanup: () => {
                cancelAnimationFrame(animationId);
                canvas.removeEventListener('mousedown', onMouseDown);
                window.removeEventListener('mouseup', onMouseUp);
            },
            setOptions
        };

        return instance;
    },

    pendulum: function(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.clientWidth || 800;
        canvas.height = canvas.clientHeight || 400;

        let params = {
            r1: options.r1 || 100,
            r2: options.r2 || 100,
            m1: options.m1 || 10,
            m2: options.m2 || 10,
            g: options.g || 1,
            damping: options.damping || 0.999
        };
        let r1 = params.r1, r2 = params.r2;
        let m1 = params.m1, m2 = params.m2;
        let a1 = Math.PI / 2, a2 = Math.PI / 2;
        let a1_v = 0, a2_v = 0;
        let g = params.g;
        let path = [];

        let animationId;
        function loop() {
            // Physics
            let num1 = -g * (2 * m1 + m2) * Math.sin(a1);
            let num2 = -m2 * g * Math.sin(a1 - 2 * a2);
            let num3 = -2 * Math.sin(a1 - a2) * m2;
            let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);
            let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
            let a1_a = (num1 + num2 + num3 * num4) / den;

            num1 = 2 * Math.sin(a1 - a2);
            num2 = (a1_v * a1_v * r1 * (m1 + m2));
            num3 = g * (m1 + m2) * Math.cos(a1);
            num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);
            den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
            let a2_a = (num1 * (num2 + num3 + num4)) / den;

            a1_v = a1_v * params.damping + a1_a;
            a2_v = a2_v * params.damping + a2_a;
            a1 += a1_v;
            a2 += a2_v;

            // Draw
            const colors = ExperimentTheme.get();
            ctx.fillStyle = colors.pendulumFade;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(canvas.width / 2, 100);

            let x1 = r1 * Math.sin(a1);
            let y1 = r1 * Math.cos(a1);
            let x2 = x1 + r2 * Math.sin(a2);
            let y2 = y1 + r2 * Math.cos(a2);

            ctx.strokeStyle = colors.textMuted;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            ctx.fillStyle = '#1a73e8';
            ctx.beginPath();
            ctx.arc(x1, y1, m1, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = '#ea4335';
            ctx.beginPath();
            ctx.arc(x2, y2, m2, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
            animationId = requestAnimationFrame(loop);
        }

        loop();

        function setOptions(newOpts = {}) {
            const prevR1 = params.r1;
            const prevR2 = params.r2;
            params = Object.assign(params, newOpts);
            r1 = params.r1; r2 = params.r2; m1 = params.m1; m2 = params.m2; g = params.g;
            const requiresReinit = prevR1 !== params.r1 || prevR2 !== params.r2;
            return { requiresReinit };
        }

        const instance = {
            cleanup: () => cancelAnimationFrame(animationId),
            setOptions
        };
        return instance;
    },

    fourier: function(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.clientWidth || 800;
        canvas.height = canvas.clientHeight || 400;

        let params = {
            maxTerms: options.maxTerms || 5,
            speed: options.speed || 0.02,
                amplitude: options.amplitude || 50
        };

        let time = 0;
        let wave = [];
        let maxTerms = params.maxTerms;
        let speed = params.speed;

        let animationId;
        function drawEpicycles(x, y, rotation) {
            for (let i = 0; i < maxTerms; i++) {
                let prevx = x;
                let prevy = y;
                let n = i * 2 + 1;
                    let radius = params.amplitude * (4 / (n * Math.PI));
                x += radius * Math.cos(n * time + rotation);
                y += radius * Math.sin(n * time + rotation);

                ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.beginPath();
                ctx.arc(prevx, prevy, radius, 0, Math.PI * 2);
                ctx.stroke();

                ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.beginPath();
                ctx.moveTo(prevx, prevy);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
            return { x, y };
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let vx = 150;
            let vy = canvas.height / 2;
            let endPoint = drawEpicycles(vx, vy, 0);

            wave.unshift(endPoint.y);
            if (wave.length > 300) wave.pop();

            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.beginPath();
            ctx.moveTo(endPoint.x, endPoint.y);
            ctx.lineTo(350, wave[0]);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#1a73e8';
            ctx.lineWidth = 2;
            for (let i = 0; i < wave.length; i++) {
                ctx.lineTo(i + 350, wave[i]);
            }
            ctx.stroke();

            time += params.speed;
            animationId = requestAnimationFrame(animate);
        }

        animate();

        function setOptions(newOpts = {}) {
            const prevTerms = params.maxTerms;
            params = Object.assign(params, newOpts);
            maxTerms = params.maxTerms; speed = params.speed;
            const requiresReinit = prevTerms !== params.maxTerms;
            return { requiresReinit };
        }

        const instance = {
            cleanup: () => cancelAnimationFrame(animationId),
            setOptions
        };

        return instance;
    }
};
