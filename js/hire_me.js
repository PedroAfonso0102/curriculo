
/**
 * Data definition for available services in the "Hire Me" section.
 * Contains translation keys, configuration for pricing/deadlines, and UI hints.
 * @type {Array<Object>}
 */
const servicesData = [
    {
        id: 'speed-landing',
        titleKey: 'service_speed_landing_title',
        priceDisplayKey: 'hire_price_landing',
        deadlineDisplayKey: 'hire_dead_variable',
        descriptionKey: 'service_speed_landing_desc',
        includedKeys: ['service_speed_landing_inc1', 'service_speed_landing_inc2', 'service_speed_landing_inc3', 'service_speed_landing_inc4'],
        notIncludedKeys: ['service_speed_landing_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)'
    },
    {
        id: 'custom-storefront',
        titleKey: 'service_storefront_title',
        priceDisplayKey: 'hire_price_storefront',
        deadlineDisplayKey: 'hire_dead_variable',
        descriptionKey: 'service_storefront_desc',
        includedKeys: ['service_storefront_inc1', 'service_storefront_inc2', 'service_storefront_inc3', 'service_storefront_inc4'],
        notIncludedKeys: ['service_storefront_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
        id: 'platform-setup',
        titleKey: 'service_platform_setup_title',
        priceDisplayKey: 'hire_price_setup',
        deadlineDisplayKey: 'hire_dead_variable',
        descriptionKey: 'service_platform_setup_desc',
        includedKeys: ['service_platform_setup_inc1', 'service_platform_setup_inc2', 'service_platform_setup_inc3'],
        notIncludedKeys: ['service_platform_setup_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    },
    {
        id: 'visual-asset',
        titleKey: 'service_visual_asset_title',
        priceDisplayKey: 'hire_price_visual',
        deadlineDisplayKey: 'hire_dead_variable',
        descriptionKey: 'service_visual_asset_desc',
        includedKeys: ['service_visual_asset_inc1', 'service_visual_asset_inc2', 'service_visual_asset_inc3'],
        notIncludedKeys: ['service_visual_asset_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
    }
    ,
    {
        id: 'ux-consult',
        titleKey: 'service_ux_title',
        priceDisplayKey: 'hire_price_consult',
        deadlineDisplayKey: 'hire_dead_variable',
        descriptionKey: 'service_ux_desc',
        includedKeys: ['service_ux_inc1', 'service_ux_inc2', 'service_ux_inc3'],
        notIncludedKeys: ['service_ux_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #90f7ec 0%, #32ccbc 100%)'
    },
    {
        id: 'freelance-retainer',
        titleKey: 'service_freelance_title',
        priceDisplayKey: 'hire_price_monthly',
        deadlineDisplayKey: 'hire_dead_recur',
        descriptionKey: 'service_freelance_desc',
        includedKeys: ['service_freelance_inc1', 'service_freelance_inc2', 'service_freelance_inc3'],
        notIncludedKeys: ['service_freelance_exc1'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    }
];

/**
 * Manages the logic for the "Hire Me" view, including the service catalog,
 * detail views, forms, and WhatsApp integration.
 * @namespace HireMe
 */
const HireMe = {
    /**
     * Internal state of the Hire Me view.
     * @property {string} currentStep - The current active step ('catalog', 'details', 'form', 'schedule', 'confirmation').
     * @property {Object|null} selectedService - The currently selected service object from `servicesData`.
     * @property {Object} formData - Collected user input data.
     */
    state: {
        currentStep: 'catalog', // catalog, details, form, schedule, confirmation
        selectedService: null,
        formData: {}
    },

    /**
     * Initializes the Hire Me section by rendering the service catalog.
     * Should be called when the view becomes active.
     */
    init() {
        this.container = document.getElementById('hire-me-content');
        if (!this.container) return;
        this.renderCatalog();
    },

    // --- UTILS ---

    /**
     * Translates a given key using the global `window.translations` object.
     * Defaults to the key itself if no translation is found.
     * @param {string} key - The translation key.
     * @returns {string} The translated text.
     */
    t(key) {
        const lang = document.documentElement.lang || 'pt';
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            return window.translations[lang][key];
        }
        return key; // Fallback
    },

    /**
     * Formats the price display for a service based on available keys or hardcoded values.
     * @param {Object} service - The service object.
     * @returns {string} The formatted price string.
     */
    getServicePrice(service) {
        if (service.priceDisplayKey) return this.t(service.priceDisplayKey);
        return service.priceDisplay || '';
    },

    /**
     * Formats the deadline display for a service.
     * Handles unit translation (e.g., "days", "hours").
     * @param {Object} service - The service object.
     * @returns {string} The formatted deadline string.
     */
    getServiceDeadline(service) {
        if (service.deadlineDisplayKey) return this.t(service.deadlineDisplayKey);
        if (service.deadlineUnitKey && service.deadlineValue) {
            return `${service.deadlineValue} ${this.t(service.deadlineUnitKey)}`;
        }
        return service.deadlineDisplay || '';
    },

    /**
     * Calculates the next N business days starting from tomorrow.
     * @param {number} daysCount - Number of business days to retrieve.
     * @returns {Array<Date>} List of date objects.
     */
    getNextBusinessDays(daysCount) {
        const days = [];
        let current = new Date();
        // Start from tomorrow
        current.setDate(current.getDate() + 1);

        while (days.length < daysCount) {
            const dayOfWeek = current.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
                days.push(new Date(current));
            }
            current.setDate(current.getDate() + 1);
        }
        return days;
    },

    /**
     * Formats a Date object into a readable string based on the current language.
     * @param {Date} date - The date to format.
     * @returns {string} Formatted date string (e.g., "DD/MM - Weekday").
     */
    formatDateDisplay(date) {
        const lang = document.documentElement.lang || 'pt';
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');

        let weekDay = '';
        if (lang === 'pt') {
            const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
            weekDay = weekDays[date.getDay()];
        } else if (lang === 'es') {
            const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            weekDay = weekDays[date.getDay()];
        } else {
            const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            weekDay = weekDays[date.getDay()];
        }

        return `${dd}/${mm} - ${weekDay}`;
    },

    /**
     * Constructs a WhatsApp message based on the selected service and form data,
     * then redirects the user to the WhatsApp API.
     */
    sendToWhatsApp() {
        const serviceName = this.t(this.state.selectedService.titleKey);
        const name = this.state.formData.clientName || 'Cliente';
        let msg = '';

        const lang = document.documentElement.lang || 'pt';

        // Simple localization for WhatsApp message structure (could be improved, but keeping it simple)
        // I'll stick to PT for the *recipient* (Pedro) since it's his WhatsApp,
        // BUT it's better if the message is in the user's language or Pedro's?
        // Usually, the message is sent FROM the user. If the user speaks English, they send in English.
        // Pedro seems to speak EN/ES.

        if (lang === 'en') {
            if (this.state.selectedService.type === 'contract') {
                const budget = this.state.formData.budget || 'N/A';
                const deadline = this.state.formData.deadline || 'N/A';
                msg = `Hello! My name is ${name}. I would like to request a quote for *${serviceName}*.\nBudget: ${budget}\nDeadline: ${deadline}`;
            } else {
                const date = this.state.formData.date || 'N/A';
                const time = this.state.formData.time || 'N/A';
                msg = `Hello! My name is ${name}. I would like to schedule a *${serviceName}* for ${date} at ${time}.`;
            }
        } else if (lang === 'es') {
            if (this.state.selectedService.type === 'contract') {
                const budget = this.state.formData.budget || 'N/A';
                const deadline = this.state.formData.deadline || 'N/A';
                msg = `¡Hola! Mi nombre es ${name}. Me gustaría solicitar un presupuesto para *${serviceName}*.\nPresupuesto: ${budget}\nPlazo: ${deadline}`;
            } else {
                const date = this.state.formData.date || 'N/A';
                const time = this.state.formData.time || 'N/A';
                msg = `¡Hola! Mi nombre es ${name}. Me gustaría agendar una *${serviceName}* para el día ${date} a las ${time}.`;
            }
        } else {
            // PT
            if (this.state.selectedService.type === 'contract') {
                const budget = this.state.formData.budget || 'N/A';
                const deadline = this.state.formData.deadline || 'N/A';
                msg = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para *${serviceName}*.\nOrçamento: ${budget}\nPrazo: ${deadline}`;
            } else {
                const date = this.state.formData.date || 'N/A';
                const time = this.state.formData.time || 'N/A';
                msg = `Olá! Meu nome é ${name}. Gostaria de agendar uma *${serviceName}* para dia ${date} às ${time}.`;
            }
        }

        const encodedMsg = encodeURIComponent(msg);
        window.open(`https://wa.me/5519994418294?text=${encodedMsg}`, '_blank');

        // Show local confirmation after redirect
        this.renderConfirmation();
    },

    // --- VIEWS ---

    /**
     * Renders the main grid of available services (the catalog).
     */
    renderCatalog() {
        this.state.currentStep = 'catalog';

        // Intro Block: Expectations (Green/Red Flags) - Minimalist Version
        const expectationsHTML = `
            <div class="expectations-minimal fade-in-up">
                <div class="exp-col">
                    <h3>
                        <span style="color: var(--color-success);">✓</span> ${this.t('hire_exp_green_title')}
                    </h3>
                    <ul>
                        <li>${this.t('hire_exp_green_1')}</li>
                        <li>${this.t('hire_exp_green_2')}</li>
                        <li>${this.t('hire_exp_green_3')}</li>
                    </ul>
                </div>
                <div class="exp-col">
                     <h3>
                        <span style="color: #FF3B30;">×</span> ${this.t('hire_exp_red_title')}
                    </h3>
                    <ul>
                        <li>${this.t('hire_exp_red_1')}</li>
                        <li>${this.t('hire_exp_red_2')}</li>
                        <li>${this.t('hire_exp_red_3')}</li>
                    </ul>
                </div>
            </div>
        `;

        this.container.innerHTML = `
            <header class="hire-header">
                <h1>${this.t('hire_header_title')}</h1>
                <div class="role">${this.t('hire_role')}</div>
            </header>

            <div class="services-grid">
                ${servicesData.map(service => `
                    <div class="service-card card-interactive fade-in-up" style="animation-delay: 0.1s" onclick="HireMe.openDetails('${service.id}')">
                        <div class="service-card-cover" style="background: ${service.gradient}"></div>
                        <div class="service-info">
                            <h3>${this.t(service.titleKey)}</h3>
                            <p class="service-price">${this.getServicePrice(service)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${expectationsHTML}
        `;
    },

    /**
     * Opens the detailed view for a specific service.
     * @param {string} serviceId - The ID of the service to show.
     */
    openDetails(serviceId) {
        const service = servicesData.find(s => s.id === serviceId);
        if (!service) return;
        this.state.selectedService = service;
        this.state.currentStep = 'details';

        const detailsHTML = `
            <div class="details-view fade-in">
                <button class="back-link" onclick="HireMe.renderCatalog()">${this.t('hire_back')}</button>
                <div class="details-content">
                    <div class="details-header-cover" style="background: ${service.gradient};"></div>
                    <h2>${this.t(service.titleKey)}</h2>
                    <div class="details-meta">
                        <div class="meta-item">
                            <span class="label">${this.t('hire_invest')}</span>
                            <span class="value">${this.getServicePrice(service)}</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">${this.t('hire_deadline')}</span>
                            <span class="value">${this.getServiceDeadline(service)}</span>
                        </div>
                    </div>
                    <p class="body-text">${this.t(service.descriptionKey)}</p>
                    
                    <div class="details-lists">
                        <div class="list-group">
                            <h3>${this.t('hire_included')}</h3>
                            <ul>
                                ${service.includedKeys.map(key => `<li><span class="check-icon">✓</span> ${this.t(key)}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="list-group">
                            <h3>${this.t('hire_not_included')}</h3>
                            <ul>
                                ${service.notIncludedKeys.map(key => `<li><span class="cross-icon">×</span> ${this.t(key)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="details-actions">
                        <button class="cta-btn btn btn-primary" onclick="HireMe.proceedFromDetails()">
                            ${service.type === 'contract' ? this.t('hire_btn_budget') : this.t('hire_btn_schedule')}
                        </button>
                    </div>
                </div>
            </div>
        `;
        this.container.innerHTML = detailsHTML;
    },

    /**
     * Proceeds to the next step based on service type: Qualification Form (contract) or Schedule (consulting).
     */
    proceedFromDetails() {
        if (this.state.selectedService.type === 'contract') {
            this.renderQualificationForm();
        } else {
            this.renderSchedule();
        }
    },

    /**
     * Renders the qualification form for project-based services.
     */
    renderQualificationForm() {
        this.state.currentStep = 'form';
        this.container.innerHTML = `
            <div class="form-view fade-in">
                <button class="back-link btn btn-ghost" onclick="HireMe.openDetails('${this.state.selectedService.id}')">${this.t('hire_back')}</button>
                <h2>${this.t('hire_form_title')}</h2>
                <form onsubmit="HireMe.handleFormSubmit(event)" class="hire-form">
                    <div class="form-group">
                        <label>${this.t('hire_form_name')}</label>
                        <input type="text" name="clientName" placeholder="${this.t('hire_form_name')}" required>
                    </div>
                    <div class="form-group">
                        <label>${this.t('hire_form_budget')}</label>
                        <input type="text" name="budget" placeholder="Ex: 5000" required>
                    </div>
                    <div class="form-group">
                        <label>${this.t('hire_form_deadline')}</label>
                        <input type="text" name="deadline" placeholder="Ex: 30 days" required>
                    </div>
                    <div class="form-group">
                        <label>${this.t('hire_form_link')}</label>
                        <input type="url" name="link" placeholder="https://exemplo.com">
                    </div>
                    <button type="submit" class="cta-btn btn btn-primary">${this.t('hire_form_submit')}</button>
                </form>
            </div>
        `;
    },

    /**
     * Handles the submission of the qualification form.
     * @param {Event} e - The submit event.
     */
    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.state.formData = Object.fromEntries(formData.entries());
        this.sendToWhatsApp();
    },

    /**
     * Renders the scheduling view for time-based services.
     */
    renderSchedule() {
        this.state.currentStep = 'schedule';
        const days = this.getNextBusinessDays(7);

        // Simple List of Days
        const daysHTML = days.map((date, index) => {
            const dateStr = this.formatDateDisplay(date);
            const simpleDate = `${date.getDate()}/${date.getMonth() + 1}`;
            return `
                <button class="date-selector-btn" onclick="HireMe.selectDate('${simpleDate}', this)">
                    ${dateStr}
                </button>
            `;
        }).join('');

        this.container.innerHTML = `
            <div class="schedule-view fade-in">
                <button class="back-link btn btn-ghost" onclick="HireMe.openDetails('${this.state.selectedService.id}')">${this.t('hire_back')}</button>
                <h2>${this.t('hire_schedule_title')}</h2>
                <p class="body-text" style="margin-bottom: 1rem;">${this.t('hire_schedule_desc')}</p>

                <div class="form-group" style="margin-bottom: 2rem;">
                     <label>${this.t('hire_form_name')}</label>
                     <input type="text" id="scheduleName" placeholder="${this.t('hire_form_name')}" required>
                </div>

                <div class="schedule-list">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; color: var(--text-secondary);">${this.t('hire_schedule_next')}</label>
                    <div id="days-container">
                        ${daysHTML}
                    </div>
                </div>

                <div id="time-selection" style="display:none; margin-top: 2rem;">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; color: var(--text-secondary);">${this.t('hire_schedule_period')}</label>
                    <div class="slots-grid">
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('${this.t('hire_period_morning')} (09h - 12h)')">${this.t('hire_period_morning')}</button>
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('${this.t('hire_period_afternoon')} (13h - 18h)')">${this.t('hire_period_afternoon')}</button>
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('${this.t('hire_period_night')} (19h - 21h)')">${this.t('hire_period_night')}</button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Selects a date for scheduling and shows the time selection options.
     * @param {string} dateStr - The selected date string (DD/MM).
     * @param {HTMLElement} btnElement - The button element that was clicked.
     */
    selectDate(dateStr, btnElement) {
        // Visual feedback
        const allBtns = document.querySelectorAll('#days-container .date-selector-btn');
        allBtns.forEach(b => {
            b.classList.remove('active');
        });

        btnElement.classList.add('active');

        this.state.formData.date = dateStr;
        document.getElementById('time-selection').style.display = 'block';
    },

    /**
     * Confirms the schedule with the selected time slot and proceeds to send.
     * @param {string} timeSlot - The selected time slot (e.g., 'Morning (09h - 12h)').
     */
    confirmSchedule(timeSlot) {
        const nameInput = document.getElementById('scheduleName');
        if (!nameInput.value) {
            alert('Por favor, digite seu nome antes de continuar.');
            nameInput.focus();
            return;
        }
        this.state.formData.clientName = nameInput.value;
        this.state.formData.time = timeSlot;
        this.sendToWhatsApp();
    },

    /**
     * Renders the confirmation screen after a successful request.
     */
    renderConfirmation() {
        this.state.currentStep = 'confirmation';
        this.container.innerHTML = `
            <div class="confirmation-view fade-in">
                <div class="success-icon">✓</div>
                <h2>${this.t('hire_conf_title')}</h2>
                <p class="body-text">${this.t('hire_conf_desc')}</p>
                <button class="cta-btn btn btn-primary" onclick="HireMe.renderCatalog()" style="margin-top: 2rem;">${this.t('hire_conf_btn')}</button>
            </div>
        `;
    }
};

// Expose to window
window.HireMe = HireMe;
