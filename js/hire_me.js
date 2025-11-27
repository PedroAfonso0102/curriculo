
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
        id: 'mentoria-dev',
        title: 'Mentoria Dev',
        price: 'R$ 200/h',
        deadline: 'Sessão 1h',
        description: 'Orientação de carreira, revisão de código ou ajuda para desbloquear problemas técnicos específicos.',
        included: ['Code Review', 'Plano de Estudos', 'Tira-dúvidas técnico'],
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
        currentStep: 'catalog', // catalog, details, form, schedule, checkout, confirmation
        selectedService: null,
        formData: {}
    },

    init() {
        this.container = document.getElementById('hire-me-content');
        if (!this.container) return;
        this.renderCatalog();
    },

    renderCatalog() {
        this.state.currentStep = 'catalog';
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
                    <div class="details-header-cover" style="background: ${service.gradient}; height: 150px; border-radius: 12px; margin-bottom: 2rem;"></div>
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
                            ${service.type === 'contract' ? 'Solicitar Orçamento' : 'Agendar Horário'}
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
                    <button type="submit" class="cta-btn">Continuar para Pagamento</button>
                </form>
            </div>
        `;
    },

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.state.formData = Object.fromEntries(formData.entries());
        this.renderCheckout();
    },

    renderSchedule() {
        this.state.currentStep = 'schedule';
        // Mock Calendar View
        this.container.innerHTML = `
            <div class="schedule-view fade-in">
                <button class="back-link" onclick="HireMe.openDetails('${this.state.selectedService.id}')">← Voltar</button>
                <h2>Agendamento</h2>
                <div class="calendar-mock">
                    <div class="calendar-header">
                        <span>Julho 2024</span>
                    </div>
                    <div class="calendar-grid">
                        <!-- Simplified Grid -->
                        <div class="day-label">D</div><div class="day-label">S</div><div class="day-label">T</div><div class="day-label">Q</div><div class="day-label">Q</div><div class="day-label">S</div><div class="day-label">S</div>
                        ${Array(31).fill(0).map((_, i) => `
                            <div class="day ${i === 10 ? 'selected' : ''}">${i + 1}</div>
                        `).join('')}
                    </div>
                    <div class="time-slots">
                        <h3>Horários Disponíveis (11/07)</h3>
                        <div class="slots-grid">
                            <button class="slot-btn" onclick="HireMe.confirmSchedule('09:00')">09:00</button>
                            <button class="slot-btn" onclick="HireMe.confirmSchedule('10:00')">10:00</button>
                            <button class="slot-btn" onclick="HireMe.confirmSchedule('14:00')">14:00</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    confirmSchedule(time) {
        this.state.formData.time = time;
        this.state.formData.date = '11/07/2024';
        this.renderConfirmation('schedule');
    },

    renderCheckout() {
        this.state.currentStep = 'checkout';
        this.container.innerHTML = `
            <div class="checkout-view fade-in">
                <button class="back-link" onclick="HireMe.renderQualificationForm()">← Voltar</button>
                <h2>Checkout Seguro</h2>
                
                <div class="order-summary">
                    <div class="summary-row">
                        <span>${this.state.selectedService.title}</span>
                        <span>${this.state.selectedService.price}</span>
                    </div>
                    <div class="summary-total">
                        <span>Total</span>
                        <span>${this.state.selectedService.price}</span>
                    </div>
                </div>

                <form onsubmit="HireMe.handleCheckoutSubmit(event)" class="hire-form">
                    <div class="form-group">
                        <label>Número do Cartão</label>
                        <input type="text" placeholder="0000 0000 0000 0000" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Validade</label>
                            <input type="text" placeholder="MM/AA" required>
                        </div>
                        <div class="form-group">
                            <label>CVC</label>
                            <input type="text" placeholder="123" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Nome no Cartão</label>
                        <input type="text" placeholder="Nome Completo" required>
                    </div>
                    <button type="submit" class="cta-btn">Pagar ${this.state.selectedService.price}</button>
                </form>
            </div>
        `;
    },

    handleCheckoutSubmit(e) {
        e.preventDefault();
        this.renderConfirmation('contract');
    },

    renderConfirmation(type) {
        this.state.currentStep = 'confirmation';
        const title = type === 'contract' ? 'Pagamento Confirmado!' : 'Agendamento Confirmado!';
        const msg = type === 'contract' ? 'Seu projeto foi iniciado. Entrarei em contato em breve.' : `Sua reunião está marcada para ${this.state.formData.date} às ${this.state.formData.time}.`;

        this.container.innerHTML = `
            <div class="confirmation-view fade-in">
                <div class="success-icon">✓</div>
                <h2>${title}</h2>
                <p>${msg}</p>
                <button class="cta-btn" onclick="HireMe.renderCatalog()">Voltar ao Início</button>
            </div>
        `;
    }
};

// Expose to window
window.HireMe = HireMe;
