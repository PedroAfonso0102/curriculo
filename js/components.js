
/**
 * Component Library
 * Provides reusable rendering functions for UI elements to eliminate code duplication.
 */
const Components = {
    /**
     * Renders an SVG icon using the sprite system.
     * @param {string} id - The icon ID (e.g., 'icon-fluid').
     * @param {string} className - Additional classes (e.g., 'icon-lg').
     * @returns {string} HTML string of the SVG.
     */
    icon(id, className = 'icon') {
        return `<svg class="${className}"><use href="#${id}"></use></svg>`;
    },

    /**
     * Renders a Playground App/Experiment card.
     * @param {Object} item - Data object for the item.
     * @param {string} item.id - Unique ID (used for onclick and keys).
     * @param {string} item.iconId - SVG icon ID.
     * @param {string} item.titleKey - i18n key for the title.
     * @param {string} item.subKey - i18n key for the subtitle.
     * @returns {string} HTML string.
     */
    playgroundCard(item) {
        // Translation fallback handled by data-i18n attributes in the main app logic
        // But since we are generating HTML strings, we need to ensure the Translation system picks these up
        // or we need to translate them immediately if the system allows.
        // The current system uses `data-i18n` attributes and a function `updateTranslations()` that scans the DOM.
        // So we just need to output the `data-i18n` attributes.

        return `
            <div class="app-item card-interactive" onclick="openExperiment('${item.id}')">
                <div class="app-icon">
                    ${this.icon(item.iconId, 'icon-lg')}
                </div>
                <div class="app-info">
                    <h3 data-i18n="${item.titleKey}">${item.titleDefault || ''}</h3>
                    <p data-i18n="${item.subKey}">${item.subDefault || ''}</p>
                </div>
            </div>
        `;
    },

    /**
     * Renders a standard Experience/Job item.
     * @param {Object} job - Job data object.
     * @returns {string} HTML string.
     */
    experienceItem(job) {
        const detailsHTML = job.details.map(detail =>
            `<li data-i18n="${detail.key}">${detail.default || ''}</li>`
        ).join('');

        const companyAttr = job.companyKey ? `data-i18n="${job.companyKey}"` : '';

        return `
            <div class="experience-item">
                <div class="job-header">
                    <span class="job-title" data-i18n="${job.titleKey}">${job.titleDefault}</span>
                    <span class="job-date">${job.date}</span>
                </div>
                <span class="job-company" ${companyAttr}>${job.company}</span>
                <ul class="job-details">
                    ${detailsHTML}
                </ul>
            </div>
        `;
    },

    /**
     * Renders the control layout for an experiment view.
     * This wrapper eliminates the repeated structure of Title + Canvas + Sidebar.
     * @param {Object} view - View configuration.
     * @param {string} view.id - Experiment ID (e.g., 'fluid').
     * @param {string} view.titleKey - i18n key for title.
     * @param {string} view.controlsHtml - Inner HTML for the controls sidebar.
     * @returns {string} HTML string.
     */
    experimentView(view) {
        return `
            <div id="${view.id}-view" class="experiment-view" style="display:none;">
                <div class="exp-layout">
                    <div class="exp-main">
                        <h2 data-i18n="${view.titleKey}">${view.titleDefault || ''}</h2>
                        <canvas id="${view.id}Canvas"></canvas>
                    </div>
                    <aside class="exp-sidebar">
                        <div class="exp-controls">
                            ${view.controlsHtml}
                        </div>
                    </aside>
                </div>
            </div>
        `;
    },

    /**
     * Renders a range control input with label and value display.
     * @param {string} expId - Experiment ID prefix.
     * @param {string} name - Control name.
     * @param {string} labelKey - i18n key for label.
     * @param {string} labelDefault - Default label text.
     * @param {string} valueId - ID for the value span.
     * @param {Object} attrs - Input attributes (min, max, step, value).
     * @returns {string} HTML string.
     */
    rangeControl(expId, name, labelKey, labelDefault, valueId, attrs) {
        return `
            <label><span data-i18n="${labelKey}">${labelDefault}</span> <span class="val" id="${expId}-${valueId}">${attrs.value}</span></label>
            <input class="exp-control" type="range" name="${name}" min="${attrs.min}" max="${attrs.max}" step="${attrs.step}" value="${attrs.value}">
        `;
    }
};

window.Components = Components;
