// ============================================================================
// Utility Functions Module - Funções utilitárias prototipadas
// ============================================================================

/**
 * Módulo de funções utilitárias para validação e manipulação de dados
 */
const ExperimentUtils = (() => {
    /**
     * Valida e limita um valor numérico dentro de um intervalo
     * @param {number} value - Valor a ser validado
     * @param {number} min - Valor mínimo permitido
     * @param {number} max - Valor máximo permitido
     * @param {number} defaultValue - Valor padrão se inválido
     * @returns {number} Valor validado
     */
    function clamp(value, min, max, defaultValue = min) {
        if (typeof value !== 'number' || isNaN(value)) {
            return defaultValue;
        }
        // Ensure min <= max for correct behavior
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }
        return Math.max(min, Math.min(max, value));
    }

    /**
     * Interpola linearmente entre dois valores
     * @param {number} start - Valor inicial
     * @param {number} end - Valor final
     * @param {number} t - Fator de interpolação (0-1)
     * @returns {number} Valor interpolado
     */
    function lerp(start, end, t) {
        return start + (end - start) * clamp(t, 0, 1);
    }

    /**
     * Mapeia um valor de um intervalo para outro
     * @param {number} value - Valor a mapear
     * @param {number} inMin - Mínimo do intervalo de entrada
     * @param {number} inMax - Máximo do intervalo de entrada
     * @param {number} outMin - Mínimo do intervalo de saída
     * @param {number} outMax - Máximo do intervalo de saída
     * @returns {number} Valor mapeado
     */
    function mapRange(value, inMin, inMax, outMin, outMax) {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    /**
     * Calcula a distância entre dois pontos
     * @param {number} x1 - Coordenada X do primeiro ponto
     * @param {number} y1 - Coordenada Y do primeiro ponto
     * @param {number} x2 - Coordenada X do segundo ponto
     * @param {number} y2 - Coordenada Y do segundo ponto
     * @returns {number} Distância entre os pontos
     */
    function distance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Gera um número aleatório dentro de um intervalo
     * @param {number} min - Valor mínimo
     * @param {number} max - Valor máximo
     * @returns {number} Número aleatório
     */
    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Gera uma cor aleatória em formato hexadecimal
     * @returns {string} Cor em formato #RRGGBB
     */
    function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * Converte graus para radianos
     * @param {number} degrees - Ângulo em graus
     * @returns {number} Ângulo em radianos
     */
    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Converte radianos para graus
     * @param {number} radians - Ângulo em radianos
     * @returns {number} Ângulo em graus
     */
    function radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    return {
        clamp,
        lerp,
        mapRange,
        distance,
        randomRange,
        randomColor,
        degreesToRadians,
        radiansToDegrees
    };
})();

/**
 * Módulo de validação de parâmetros para experimentos
 */
const ExperimentValidator = (() => {
    /**
     * Valida parâmetros do experimento de fluidos
     * @param {Object} options - Opções do experimento
     * @returns {Object} Opções validadas
     */
    function validateFluidOptions(options = {}) {
        return {
            resolution: ExperimentUtils.clamp(options.resolution, 32, 256, 128),
            iter: ExperimentUtils.clamp(options.iter, 1, 20, 4),
            dt: ExperimentUtils.clamp(options.dt, 0.01, 1, 0.1),
            diff: ExperimentUtils.clamp(options.diff, 0, 0.01, 0.00005),
            visc: ExperimentUtils.clamp(options.visc, 0, 0.01, 0.00005),
            emit: ExperimentUtils.clamp(options.emit, 10, 1000, 100),
            decay: ExperimentUtils.clamp(options.decay, 0.9, 0.999, 0.995)
        };
    }

    /**
     * Valida parâmetros do experimento de gravidade
     * @param {Object} options - Opções do experimento
     * @returns {Object} Opções validadas
     */
    function validateGravityOptions(options = {}) {
        return {
            G: ExperimentUtils.clamp(options.G, 0, 5, 0.5),
            particleCount: ExperimentUtils.clamp(options.particleCount, 1, 50, 6),
            trailAlpha: ExperimentUtils.clamp(options.trailAlpha, 0.05, 0.5, 0.2)
        };
    }

    /**
     * Valida parâmetros do experimento de pêndulo duplo
     * @param {Object} options - Opções do experimento
     * @returns {Object} Opções validadas
     */
    function validatePendulumOptions(options = {}) {
        return {
            r1: ExperimentUtils.clamp(options.r1, 50, 250, 100),
            r2: ExperimentUtils.clamp(options.r2, 50, 250, 100),
            m1: ExperimentUtils.clamp(options.m1, 1, 50, 10),
            m2: ExperimentUtils.clamp(options.m2, 1, 50, 10),
            g: ExperimentUtils.clamp(options.g, 0, 5, 1),
            damping: ExperimentUtils.clamp(options.damping, 0.9, 0.9999, 0.999)
        };
    }

    /**
     * Valida parâmetros do experimento de séries de Fourier
     * @param {Object} options - Opções do experimento
     * @returns {Object} Opções validadas
     */
    function validateFourierOptions(options = {}) {
        return {
            maxTerms: ExperimentUtils.clamp(options.maxTerms, 1, 100, 5),
            speed: ExperimentUtils.clamp(options.speed, 0.001, 0.2, 0.02),
            amplitude: ExperimentUtils.clamp(options.amplitude, 10, 200, 50)
        };
    }

    return {
        validateFluidOptions,
        validateGravityOptions,
        validatePendulumOptions,
        validateFourierOptions
    };
})();

/**
 * Módulo de utilitários para canvas
 */
const CanvasUtils = (() => {
    /**
     * Inicializa um canvas com as dimensões corretas
     * @param {HTMLCanvasElement} canvas - Elemento canvas
     * @param {number} defaultWidth - Largura padrão
     * @param {number} defaultHeight - Altura padrão
     * @returns {CanvasRenderingContext2D|null} Contexto 2D ou null se falhar
     */
    function initCanvas(canvas, defaultWidth = 800, defaultHeight = 400) {
        if (!canvas) return null;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        
        canvas.width = canvas.clientWidth || defaultWidth;
        canvas.height = canvas.clientHeight || defaultHeight;
        
        return ctx;
    }

    /**
     * Limpa o canvas completamente
     * @param {CanvasRenderingContext2D} ctx - Contexto do canvas
     * @param {HTMLCanvasElement} canvas - Elemento canvas
     */
    function clearCanvas(ctx, canvas) {
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    /**
     * Desenha um círculo no canvas
     * @param {CanvasRenderingContext2D} ctx - Contexto do canvas
     * @param {number} x - Coordenada X do centro
     * @param {number} y - Coordenada Y do centro
     * @param {number} radius - Raio do círculo
     * @param {string} fillColor - Cor de preenchimento
     * @param {string} strokeColor - Cor da borda (opcional)
     * @param {number} lineWidth - Largura da borda (opcional)
     */
    function drawCircle(ctx, x, y, radius, fillColor, strokeColor = null, lineWidth = 1) {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        if (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fill();
        }
        
        if (strokeColor) {
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }

    /**
     * Desenha uma linha no canvas
     * @param {CanvasRenderingContext2D} ctx - Contexto do canvas
     * @param {number} x1 - Coordenada X inicial
     * @param {number} y1 - Coordenada Y inicial
     * @param {number} x2 - Coordenada X final
     * @param {number} y2 - Coordenada Y final
     * @param {string} color - Cor da linha
     * @param {number} lineWidth - Largura da linha
     */
    function drawLine(ctx, x1, y1, x2, y2, color, lineWidth = 1) {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }

    /**
     * Desenha um caminho (path) a partir de um array de pontos
     * @param {CanvasRenderingContext2D} ctx - Contexto do canvas
     * @param {Array<{x: number, y: number}>} points - Array de pontos
     * @param {string} color - Cor do caminho
     * @param {number} lineWidth - Largura da linha
     * @param {boolean} closePath - Se deve fechar o caminho
     */
    function drawPath(ctx, points, color, lineWidth = 1, closePath = false) {
        if (!ctx || !points || points.length < 2) return;
        
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        
        if (closePath) {
            ctx.closePath();
        }
        
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }

    /**
     * Obtém as coordenadas do mouse/touch relativas ao canvas
     * @param {HTMLCanvasElement} canvas - Elemento canvas
     * @param {MouseEvent|Touch} event - Evento do mouse ou touch
     * @returns {{x: number, y: number}} Coordenadas relativas
     */
    function getCanvasCoordinates(canvas, event) {
        const rect = canvas.getBoundingClientRect();
        // Use clientX/clientY consistently as they are viewport-relative
        // and getBoundingClientRect() also returns viewport-relative coordinates
        const clientX = event.clientX !== undefined ? event.clientX : event.pageX - window.scrollX;
        const clientY = event.clientY !== undefined ? event.clientY : event.pageY - window.scrollY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    return {
        initCanvas,
        clearCanvas,
        drawCircle,
        drawLine,
        drawPath,
        getCanvasCoordinates
    };
})();

/**
 * Módulo de gerenciamento de eventos
 */
const EventManager = (() => {
    const listeners = new Map();

    /**
     * Adiciona um event listener e armazena para limpeza posterior
     * @param {string} id - Identificador único do listener
     * @param {EventTarget} target - Elemento alvo
     * @param {string} eventType - Tipo do evento
     * @param {Function} handler - Função handler
     * @param {Object} options - Opções do addEventListener
     */
    function addListener(id, target, eventType, handler, options = {}) {
        const key = `${id}-${eventType}`;
        
        // Remove listener existente se houver
        removeListener(id, eventType);
        
        target.addEventListener(eventType, handler, options);
        listeners.set(key, { target, eventType, handler, options });
    }

    /**
     * Remove um event listener específico
     * @param {string} id - Identificador do listener
     * @param {string} eventType - Tipo do evento
     */
    function removeListener(id, eventType) {
        const key = `${id}-${eventType}`;
        const listener = listeners.get(key);
        
        if (listener) {
            listener.target.removeEventListener(listener.eventType, listener.handler, listener.options);
            listeners.delete(key);
        }
    }

    /**
     * Remove todos os listeners de um experimento
     * @param {string} id - Identificador do experimento
     */
    function removeAllListeners(id) {
        for (const [key, listener] of listeners.entries()) {
            if (key.startsWith(id + '-')) {
                listener.target.removeEventListener(listener.eventType, listener.handler, listener.options);
                listeners.delete(key);
            }
        }
    }

    /**
     * Limpa todos os listeners registrados
     */
    function clearAll() {
        for (const listener of listeners.values()) {
            listener.target.removeEventListener(listener.eventType, listener.handler, listener.options);
        }
        listeners.clear();
    }

    return {
        addListener,
        removeListener,
        removeAllListeners,
        clearAll
    };
})();

// ============================================================================
// ExperimentTheme Module - Módulo de temas para experimentos
// ============================================================================

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

        // Touch Support
        const onTouchStart = e => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                const rect = canvas.getBoundingClientRect();
                isMouseDown = true;
                lastX = touch.clientX - rect.left;
                lastY = touch.clientY - rect.top;
            }
        };

        const onTouchMove = e => {
            if (!isMouseDown || e.touches.length === 0) return;
            if (e.cancelable) e.preventDefault(); // Prevent scrolling
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

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
        
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchend', onMouseUp);
        canvas.addEventListener('touchmove', onTouchMove, { passive: false });

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
                canvas.removeEventListener('touchstart', onTouchStart);
                window.removeEventListener('touchend', onMouseUp);
                canvas.removeEventListener('touchmove', onTouchMove);
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

        // Touch Support
        const onTouchStart = e => {
            if (e.touches.length > 0) {
                if (e.cancelable) e.preventDefault();
                const touch = e.touches[0];
                const rect = canvas.getBoundingClientRect();
                isDragging = true;
                startX = touch.clientX - rect.left;
                startY = touch.clientY - rect.top;
            }
        };

        const onTouchEnd = e => {
            if (!isDragging) return;
            isDragging = false;
            const rect = canvas.getBoundingClientRect();
            const touch = e.changedTouches[0];
            let endX = touch.clientX - rect.left;
            let endY = touch.clientY - rect.top;
            let vx = (startX - endX) * 0.05;
            let vy = (startY - endY) * 0.05;
            particles.push(new Particle(startX, startY, vx, vy, Math.random() * 10 + 2, '#5f6368'));
        };

        canvas.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

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
                canvas.removeEventListener('touchstart', onTouchStart);
                window.removeEventListener('touchend', onTouchEnd);
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

// ============================================================================
// Global Exports - Exportação dos módulos para uso global
// ============================================================================

window.ExperimentUtils = ExperimentUtils;
window.ExperimentValidator = ExperimentValidator;
window.CanvasUtils = CanvasUtils;
window.EventManager = EventManager;
window.ExperimentTheme = ExperimentTheme;
window.Experiments = Experiments;
