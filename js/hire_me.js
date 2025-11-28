
/**
 * Manages the logic for the "Hire Me" view.
 * Refactored to focus on Sales Ops positioning.
 * @namespace HireMe
 */
const HireMe = {
    init() {
        this.container = document.getElementById('hire-me-content');
        if (!this.container) return;
        this.renderSalesOpsLanding();
    },

    t(key) {
        const lang = document.documentElement.lang || 'pt';
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            return window.translations[lang][key];
        }
        return key;
    },

    renderSalesOpsLanding() {
        this.container.innerHTML = `
            <header class="hire-header">
                <h1>${this.t('hire_header_title')}</h1>
                <div class="role">${this.t('hire_role')}</div>
            </header>

            <div class="hire-split-container">
                <!-- Left Column: What I Deliver -->
                <div class="hire-column">
                    <h3>${this.t('hire_deliver_title')}</h3>
                    <ul class="hire-list">
                        <li>
                            <svg class="icon-check" width="24" height="24"><use href="#icon-check"></use></svg>
                            <span>${this.t('hire_deliver_1')}</span>
                        </li>
                        <li>
                            <svg class="icon-check" width="24" height="24"><use href="#icon-check"></use></svg>
                            <span>${this.t('hire_deliver_2')}</span>
                        </li>
                        <li>
                            <svg class="icon-check" width="24" height="24"><use href="#icon-check"></use></svg>
                            <span>${this.t('hire_deliver_3')}</span>
                        </li>
                         <li>
                            <svg class="icon-check" width="24" height="24"><use href="#icon-check"></use></svg>
                            <span>${this.t('hire_deliver_4')}</span>
                        </li>
                    </ul>
                </div>

                <!-- Right Column: What I Don't Do -->
                <div class="hire-column">
                    <h3>${this.t('hire_not_title')}</h3>
                    <ul class="hire-list">
                        <li>
                            <svg class="icon-cross" width="24" height="24"><use href="#icon-cross"></use></svg>
                            <span>${this.t('hire_not_1')}</span>
                        </li>
                        <li>
                            <svg class="icon-cross" width="24" height="24"><use href="#icon-cross"></use></svg>
                            <span>${this.t('hire_not_2')}</span>
                        </li>
                        <li>
                            <svg class="icon-cross" width="24" height="24"><use href="#icon-cross"></use></svg>
                            <span>${this.t('hire_not_3')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="hire-cta-container">
                <a href="https://calendly.com/pedro-app1" target="_blank" class="cta-main-btn btn">
                    ${this.t('hire_cta_button')}
                </a>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: var(--font-sm);">
                    ${this.t('hire_cta_sub')}
                </p>
            </div>
        `;
    }
};

window.HireMe = HireMe;
