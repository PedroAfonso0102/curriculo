
/**
 * Manages the logic for the "Hire Me" view.
 * Refactored to focus on "Why Me?" - Autonomy and Efficiency.
 * @namespace HireMe
 */
const HireMe = {
    init() {
        this.container = document.getElementById('hire-me-content');
        if (!this.container) return;
        this.renderWhyMeLanding();
    },

    t(key) {
        const lang = document.documentElement.lang || 'pt';
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            return window.translations[lang][key];
        }
        return key;
    },

    renderWhyMeLanding() {
        this.container.innerHTML = `
            <header class="hire-header">
                <h1>${this.t('hire_header_title')}</h1>
                <div class="role">${this.t('hire_role')}</div>
            </header>

            <div class="hire-split-container">
                <!-- Why Me Column -->
                <div class="hire-column" style="margin: 0 auto; max-width: 600px; text-align: left;">
                    <p class="body-text" style="margin-bottom: 2rem; font-size: var(--font-md);">
                        ${this.t('hire_intro_text')}
                    </p>

                    <h3>${this.t('hire_deliver_title')}</h3>
                    <ul class="hire-list">
                        <li>
                            <svg class="icon-check" width="24" height="24"><use href="#icon-check"></use></svg>
                            <span>${this.t('hire_deliver_1')}</span>
                        </li>
                        <li>
                            <svg class="icon-video" width="24" height="24"><use href="#icon-video"></use></svg>
                            <span>${this.t('hire_deliver_2')}</span>
                        </li>
                        <li>
                            <svg class="icon-theme" width="24" height="24"><use href="#icon-theme"></use></svg>
                            <span>${this.t('hire_deliver_3')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="hire-cta-container">
                <a href="#" onclick="HireMe.openWhatsApp()" class="cta-main-btn btn">
                    ${this.t('hire_cta_button')}
                </a>
            </div>
        `;
    },

    openWhatsApp() {
        // Pre-filled message for the recruiter
        const msg = encodeURIComponent("Olá Pedro, vi seu currículo e gostaria de marcar uma conversa.");
        window.open(`https://wa.me/5519994418294?text=${msg}`, '_blank');
    }
};

window.HireMe = HireMe;
