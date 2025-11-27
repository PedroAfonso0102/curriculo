
const servicesData = [
    {
        id: 'landing-page',
        title: 'Landing Page',
        price: 'R$ 2.500',
        deadline: '10 dias úteis',
        description: 'Página de alta conversão focada em um único objetivo (venda, captura de lead, etc). Design persuasivo e otimizado.',
        included: ['Design Exclusivo', 'Copywriting Básico', 'Integração com Email Mkt', 'Otimização Mobile'],
        notIncluded: ['Domínio e Hospedagem', 'Gestão de Tráfego'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)'
    },
    {
        id: 'ecommerce-basico',
        title: 'E-commerce Básico',
        price: 'R$ 4.500',
        deadline: '20 dias úteis',
        description: 'Loja virtual completa para pequenos negócios. Gestão de produtos, estoque e pagamentos integrados.',
        included: ['Até 50 produtos', 'Integração PagSeguro/Stripe', 'Cálculo de Frete', 'Painel Administrativo'],
        notIncluded: ['Cadastro de todos os produtos', 'Fotografia de produtos'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
        id: 'app-web',
        title: 'Aplicação Web',
        price: 'Sob Consulta',
        deadline: 'Variável',
        description: 'Sistemas web complexos, dashboards, áreas de membros ou ferramentas SaaS personalizadas.',
        included: ['Arquitetura de Banco de Dados', 'API RESTful', 'Frontend React/Vue', 'Painel Admin'],
        notIncluded: ['App Nativo (iOS/Android)'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    },
    {
        id: 'consultoria-ux',
        title: 'Consultoria UX/UI',
        price: 'R$ 300/h',
        deadline: 'Por hora',
        description: 'Análise heurística, testes de usabilidade ou redesign de interfaces para melhorar a experiência do usuário.',
        included: ['Relatório de Melhorias', 'Wireframes de Sugestão', 'Reunião de Alinhamento'],
        notIncluded: ['Implementação (Code)'],
        type: 'schedule',
        gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
    },
    {
        id: 'mentoria-audiovisual',
        title: 'Mentoria Audiovisual',
        price: 'R$ 200/h',
        deadline: 'Sessão 1h',
        description: 'Orientação de carreira, análise técnica e direção de projetos audiovisuais.',
        included: ['Análise de Portfólio/Reel', 'Direção de Arte & Roteiro', 'Feedback de Edição'],
        notIncluded: ['Desenvolvimento de projetos completos'],
        type: 'schedule',
        gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    },
    {
        id: 'freelance-fixo',
        title: 'Freelance Fixo',
        price: 'Mensal',
        deadline: 'Recorrente',
        description: 'Alocação de horas mensais para manutenção, pequenas melhorias ou suporte contínuo em seus projetos.',
        included: ['Prioridade no atendimento', 'Relatório de horas', 'Manutenção preventiva'],
        notIncluded: ['Novos projetos grandes'],
        type: 'contract',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
];

const HireMe = {
    state: {
        currentStep: 'catalog', // catalog, details, form, schedule, confirmation
        selectedService: null,
        formData: {}
    },

    init() {
        this.container = document.getElementById('hire-me-content');
        if (!this.container) return;
        this.renderCatalog();
    },

    // --- UTILS ---
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

    formatDateDisplay(date) {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return `${dd}/${mm} - ${weekDays[date.getDay()]}`;
    },

    sendToWhatsApp() {
        const service = this.state.selectedService.title;
        const name = this.state.formData.clientName || 'Cliente';
        let msg = '';

        if (this.state.selectedService.type === 'contract') {
             // Budget/Form Flow
             const budget = this.state.formData.budget || 'N/A';
             const deadline = this.state.formData.deadline || 'N/A';
             msg = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para *${service}*.\nOrçamento: ${budget}\nPrazo: ${deadline}`;
        } else {
            // Schedule Flow
            const date = this.state.formData.date || 'N/A';
            const time = this.state.formData.time || 'N/A';
            msg = `Olá! Meu nome é ${name}. Gostaria de agendar uma *${service}* para dia ${date} às ${time}.`;
        }

        const encodedMsg = encodeURIComponent(msg);
        window.open(`https://wa.me/5519994418294?text=${encodedMsg}`, '_blank');

        // Show local confirmation after redirect
        this.renderConfirmation();
    },

    // --- VIEWS ---

    renderCatalog() {
        this.state.currentStep = 'catalog';
        // Note: Using 'services-grid' which is a grid layout.
        // Inline styles for gradient cover are kept as they are data-driven content.
        this.container.innerHTML = `
            <header class="hire-header">
                <h1>Me Contrate</h1>
                <div class="role">Escolha o serviço ideal para o seu momento</div>
            </header>
            <div class="services-grid">
                ${servicesData.map(service => `
                    <div class="service-card" onclick="HireMe.openDetails('${service.id}')">
                        <div class="service-card-cover" style="background: ${service.gradient}"></div>
                        <div class="service-info">
                            <h3>${service.title}</h3>
                            <p class="service-price">${service.price}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    openDetails(serviceId) {
        const service = servicesData.find(s => s.id === serviceId);
        if (!service) return;
        this.state.selectedService = service;
        this.state.currentStep = 'details';

        const detailsHTML = `
            <div class="details-view fade-in">
                <button class="back-link" onclick="HireMe.renderCatalog()">← Voltar</button>
                <div class="details-content">
                    <div class="details-header-cover" style="background: ${service.gradient};"></div>
                    <h2>${service.title}</h2>
                    <div class="details-meta">
                        <div class="meta-item">
                            <span class="label">Investimento</span>
                            <span class="value">${service.price}</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Prazo Estimado</span>
                            <span class="value">${service.deadline}</span>
                        </div>
                    </div>
                    <p class="body-text">${service.description}</p>
                    
                    <div class="details-lists">
                        <div class="list-group">
                            <h3>O que está incluso</h3>
                            <ul>
                                ${service.included.map(item => `<li><span class="check-icon">✓</span> ${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="list-group">
                            <h3>O que não está incluso</h3>
                            <ul>
                                ${service.notIncluded.map(item => `<li><span class="cross-icon">×</span> ${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="details-actions">
                        <button class="cta-btn" onclick="HireMe.proceedFromDetails()">
                            ${service.type === 'contract' ? 'Solicitar Orçamento' : 'Ver Horários'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        this.container.innerHTML = detailsHTML;
    },

    proceedFromDetails() {
        if (this.state.selectedService.type === 'contract') {
            this.renderQualificationForm();
        } else {
            this.renderSchedule();
        }
    },

    renderQualificationForm() {
        this.state.currentStep = 'form';
        this.container.innerHTML = `
            <div class="form-view fade-in">
                <button class="back-link" onclick="HireMe.openDetails('${this.state.selectedService.id}')">← Voltar</button>
                <h2>Formulário de Qualificação</h2>
                <form onsubmit="HireMe.handleFormSubmit(event)" class="hire-form">
                    <div class="form-group">
                        <label>Seu Nome</label>
                        <input type="text" name="clientName" placeholder="Seu nome completo" required>
                    </div>
                    <div class="form-group">
                        <label>Qual o orçamento disponível?</label>
                        <input type="text" name="budget" placeholder="Ex: R$ 5.000" required>
                    </div>
                    <div class="form-group">
                        <label>Qual o prazo ideal?</label>
                        <input type="text" name="deadline" placeholder="Ex: 30 dias" required>
                    </div>
                    <div class="form-group">
                        <label>Link do projeto atual (se houver)?</label>
                        <input type="url" name="link" placeholder="https://exemplo.com">
                    </div>
                    <button type="submit" class="cta-btn">Enviar via WhatsApp</button>
                </form>
            </div>
        `;
    },

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.state.formData = Object.fromEntries(formData.entries());
        this.sendToWhatsApp();
    },

    renderSchedule() {
        this.state.currentStep = 'schedule';
        const days = this.getNextBusinessDays(7);

        // Simple List of Days
        const daysHTML = days.map((date, index) => {
            const dateStr = this.formatDateDisplay(date);
            // Store ISO date in data attribute or simple string
            const simpleDate = `${date.getDate()}/${date.getMonth() + 1}`;
            return `
                <button class="date-selector-btn" onclick="HireMe.selectDate('${simpleDate}', this)">
                    ${dateStr}
                </button>
            `;
        }).join('');

        this.container.innerHTML = `
            <div class="schedule-view fade-in">
                <button class="back-link" onclick="HireMe.openDetails('${this.state.selectedService.id}')">← Voltar</button>
                <h2>Escolha uma Data</h2>
                <p class="body-text" style="margin-bottom: 1rem;">Selecione um dia de preferência. Confirmaremos o horário exato pelo WhatsApp.</p>

                <div class="form-group" style="margin-bottom: 2rem;">
                     <label>Seu Nome</label>
                     <input type="text" id="scheduleName" placeholder="Seu nome completo" required>
                </div>

                <div class="schedule-list">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; color: var(--text-secondary);">Próximos Dias Úteis</label>
                    <div id="days-container">
                        ${daysHTML}
                    </div>
                </div>

                <div id="time-selection" style="display:none; margin-top: 2rem;">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; color: var(--text-secondary);">Período Preferido</label>
                    <div class="slots-grid">
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('Manhã (09h - 12h)')">Manhã</button>
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('Tarde (13h - 18h)')">Tarde</button>
                        <button class="slot-btn" onclick="HireMe.confirmSchedule('Noite (19h - 21h)')">Noite</button>
                    </div>
                </div>
            </div>
        `;
    },

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

    renderConfirmation() {
        this.state.currentStep = 'confirmation';
        this.container.innerHTML = `
            <div class="confirmation-view fade-in">
                <div class="success-icon">✓</div>
                <h2>Solicitação Iniciada!</h2>
                <p class="body-text">Você foi redirecionado para o WhatsApp. Caso a janela não tenha aberto, verifique seu bloqueador de pop-ups.</p>
                <button class="cta-btn" onclick="HireMe.renderCatalog()" style="margin-top: 2rem;">Voltar ao Início</button>
            </div>
        `;
    }
};

// Expose to window
window.HireMe = HireMe;
