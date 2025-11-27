/**
 * Physics-based animation engine (Spring System)
 * Simulates a spring-mass-damper system for natural UI movement.
 * Based on Apple's HIG principles: Mass, Stiffness, Damping.
 */

class SpringSystem {
    constructor() {
        this.animations = new Map();
        this.lastTime = 0;
        this.loop = this.loop.bind(this);
        this.isRunning = false;
    }

    /**
     * Start or update a spring animation on a target object.
     * @param {string} id - Unique identifier for the animation (e.g., 'sidebar-x')
     * @param {number} from - Start value (if null, uses current)
     * @param {number} to - Target value
     * @param {Object} config - Spring configuration { stiffness, damping, mass, precision }
     * @param {function} onUpdate - Callback(value) called every frame
     * @param {function} onComplete - Callback() called when settled
     */
    animate(id, from, to, config = {}, onUpdate, onComplete) {
        // Defaults (mimicking standard iOS spring)
        const stiffness = config.stiffness || 170;
        const damping = config.damping || 26;
        const mass = config.mass || 1;
        const precision = config.precision || 0.01;

        let velocity = 0;
        let current = from;

        // If animation exists, inherit its state (velocity/current position) for continuity (Interruptibility)
        if (this.animations.has(id)) {
            const existing = this.animations.get(id);
            velocity = existing.velocity;
            current = (from !== null && from !== undefined) ? from : existing.current;
        } else {
            // New animation
             current = (from !== null && from !== undefined) ? from : 0;
        }

        this.animations.set(id, {
            current,
            to,
            velocity,
            stiffness,
            damping,
            mass,
            precision,
            onUpdate,
            onComplete
        });

        if (!this.isRunning) {
            this.lastTime = performance.now();
            this.isRunning = true;
            requestAnimationFrame(this.loop);
        }
    }

    loop(now) {
        if (this.animations.size === 0) {
            this.isRunning = false;
            return;
        }

        const deltaTime = Math.min((now - this.lastTime) / 1000, 0.064); // Cap dt to avoid huge jumps
        this.lastTime = now;

        const finishedIds = [];

        this.animations.forEach((anim, id) => {
            // Spring physics: F = -k(x - target) - c(v)
            const displacement = anim.current - anim.to;
            const springForce = -anim.stiffness * displacement;
            const dampingForce = -anim.damping * anim.velocity;
            const acceleration = (springForce + dampingForce) / anim.mass;

            anim.velocity += acceleration * deltaTime;
            anim.current += anim.velocity * deltaTime;

            // Check if settled
            if (Math.abs(anim.velocity) < anim.precision && Math.abs(anim.current - anim.to) < anim.precision) {
                anim.current = anim.to;
                anim.velocity = 0;
                if (anim.onUpdate) anim.onUpdate(anim.current);
                if (anim.onComplete) anim.onComplete();
                finishedIds.push(id);
            } else {
                if (anim.onUpdate) anim.onUpdate(anim.current);
            }
        });

        // Cleanup finished animations
        finishedIds.forEach(id => this.animations.delete(id));

        if (this.animations.size > 0) {
            requestAnimationFrame(this.loop);
        } else {
            this.isRunning = false;
        }
    }

    cancel(id) {
        if (this.animations.has(id)) {
            this.animations.delete(id);
        }
    }
}

// Global instance
window.springSystem = new SpringSystem();
