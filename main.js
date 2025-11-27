// ============================================================================
// Utility Functions - Funções utilitárias prototipadas para main.js
// ============================================================================

/**
 * Módulo de gerenciamento de estado da aplicação
 */
const AppState = (() => {
    let currentView = 'resume';
    let currentLanguage = 'pt';
    let isDarkMode = false;
    let isMobileMenuOpen = false;

    return {
        /**
         * Obtém a view atual
         * @returns {string} Nome da view atual
         */
        getCurrentView() {
            return currentView;
        },

        /**
         * Define a view atual
         * @param {string} view - Nome da view
         */
        setCurrentView(view) {
            if (['resume', 'playground'].includes(view)) {
                currentView = view;
            }
        },

        /**
         * Obtém o idioma atual
         * @returns {string} Código do idioma
         */
        getCurrentLanguage() {
            return currentLanguage;
        },

        /**
         * Define o idioma atual
         * @param {string} lang - Código do idioma
         */
        setCurrentLanguage(lang) {
            if (['pt', 'en', 'es'].includes(lang)) {
                currentLanguage = lang;
            }
        },

        /**
         * Verifica se o modo escuro está ativo
         * @returns {boolean} Estado do modo escuro
         */
        isDark() {
            return isDarkMode;
        },

        /**
         * Define o estado do modo escuro
         * @param {boolean} dark - Estado do modo escuro
         */
        setDarkMode(dark) {
            isDarkMode = Boolean(dark);
        },

        /**
         * Verifica se o menu mobile está aberto
         * @returns {boolean} Estado do menu mobile
         */
        isMobileOpen() {
            return isMobileMenuOpen;
        },

        /**
         * Define o estado do menu mobile
         * @param {boolean} open - Estado do menu
         */
        setMobileMenuOpen(open) {
            isMobileMenuOpen = Boolean(open);
        }
    };
})();

/**
 * Módulo de utilitários para DOM
 */
const DOMUtils = (() => {
    /**
     * Seleciona um elemento do DOM por seletor
     * @param {string} selector - Seletor CSS
     * @returns {Element|null} Elemento encontrado ou null
     */
    function $(selector) {
        return document.querySelector(selector);
    }

    /**
     * Seleciona todos os elementos do DOM por seletor
     * @param {string} selector - Seletor CSS
     * @returns {NodeList} Lista de elementos
     */
    function $$(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Adiciona uma classe a um elemento
     * @param {Element} element - Elemento do DOM
     * @param {string} className - Nome da classe
     */
    function addClass(element, className) {
        if (element && className) {
            element.classList.add(className);
        }
    }

    /**
     * Remove uma classe de um elemento
     * @param {Element} element - Elemento do DOM
     * @param {string} className - Nome da classe
     */
    function removeClass(element, className) {
        if (element && className) {
            element.classList.remove(className);
        }
    }

    /**
     * Alterna uma classe em um elemento
     * @param {Element} element - Elemento do DOM
     * @param {string} className - Nome da classe
     * @param {boolean} force - Forçar estado (opcional)
     */
    function toggleClass(element, className, force) {
        if (element && className) {
            element.classList.toggle(className, force);
        }
    }

    /**
     * Verifica se um elemento tem uma classe
     * @param {Element} element - Elemento do DOM
     * @param {string} className - Nome da classe
     * @returns {boolean} Se o elemento tem a classe
     */
    function hasClass(element, className) {
        return element && element.classList.contains(className);
    }

    /**
     * Define um atributo em um elemento
     * @param {Element} element - Elemento do DOM
     * @param {string} attr - Nome do atributo
     * @param {string} value - Valor do atributo
     */
    function setAttr(element, attr, value) {
        if (element) {
            element.setAttribute(attr, value);
        }
    }

    /**
     * Obtém o valor de um atributo
     * @param {Element} element - Elemento do DOM
     * @param {string} attr - Nome do atributo
     * @returns {string|null} Valor do atributo
     */
    function getAttr(element, attr) {
        return element ? element.getAttribute(attr) : null;
    }

    /**
     * Define o estilo display de um elemento
     * @param {Element} element - Elemento do DOM
     * @param {string} display - Valor do display
     */
    function setDisplay(element, display) {
        if (element) {
            element.style.display = display;
        }
    }

    /**
     * Mostra um elemento (display: block)
     * @param {Element} element - Elemento do DOM
     */
    function show(element) {
        setDisplay(element, 'block');
    }

    /**
     * Esconde um elemento (display: none)
     * @param {Element} element - Elemento do DOM
     */
    function hide(element) {
        setDisplay(element, 'none');
    }

    return {
        $,
        $$,
        addClass,
        removeClass,
        toggleClass,
        hasClass,
        setAttr,
        getAttr,
        setDisplay,
        show,
        hide
    };
})();

/**
 * Módulo de armazenamento local
 */
const StorageUtils = (() => {
    const PREFIX = 'curriculo_';

    /**
     * Salva um valor no localStorage
     * @param {string} key - Chave do item
     * @param {*} value - Valor a ser salvo
     */
    function save(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(PREFIX + key, serialized);
        } catch (e) {
            console.warn('Erro ao salvar no localStorage:', e);
        }
    }

    /**
     * Obtém um valor do localStorage
     * @param {string} key - Chave do item
     * @param {*} defaultValue - Valor padrão se não existir
     * @returns {*} Valor armazenado ou valor padrão
     */
    function load(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(PREFIX + key);
            return item !== null ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Erro ao carregar do localStorage:', e);
            return defaultValue;
        }
    }

    /**
     * Remove um item do localStorage
     * @param {string} key - Chave do item
     */
    function remove(key) {
        try {
            localStorage.removeItem(PREFIX + key);
        } catch (e) {
            console.warn('Erro ao remover do localStorage:', e);
        }
    }

    /**
     * Verifica se um item existe no localStorage
     * @param {string} key - Chave do item
     * @returns {boolean} Se o item existe
     */
    function exists(key) {
        return localStorage.getItem(PREFIX + key) !== null;
    }

    return {
        save,
        load,
        remove,
        exists
    };
})();

/**
 * Módulo de formatação de texto e dados
 */
const FormatUtils = (() => {
    /**
     * Formata uma data para o formato brasileiro
     * @param {Date|string} date - Data a ser formatada
     * @returns {string|null} Data formatada (DD/MM/AAAA) ou null se inválida
     */
    function formatDateBR(date) {
        if (date === null || date === undefined || date === '') {
            return null;
        }
        const d = new Date(date);
        if (isNaN(d.getTime())) return null;
        
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    /**
     * Formata um valor para moeda brasileira
     * @param {number} value - Valor a ser formatado
     * @returns {string} Valor formatado (R$ X.XXX,XX)
     */
    function formatCurrencyBRL(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    /**
     * Trunca um texto no tamanho especificado
     * @param {string} text - Texto a ser truncado
     * @param {number} maxLength - Tamanho máximo
     * @param {string} suffix - Sufixo a adicionar (padrão: '...')
     * @returns {string} Texto truncado
     */
    function truncate(text, maxLength, suffix = '...') {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength - suffix.length) + suffix;
    }

    /**
     * Capitaliza a primeira letra de uma string
     * @param {string} str - String a ser capitalizada
     * @returns {string} String com primeira letra maiúscula
     */
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    /**
     * Remove acentos de uma string
     * @param {string} str - String com acentos
     * @returns {string} String sem acentos
     */
    function removeAccents(str) {
        if (!str) return '';
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    return {
        formatDateBR,
        formatCurrencyBRL,
        truncate,
        capitalize,
        removeAccents
    };
})();

/**
 * Módulo de validação de dados
 */
const ValidationUtils = (() => {
    /**
     * Valida um endereço de email
     * @param {string} email - Email a ser validado
     * @returns {boolean} Se o email é válido
     */
    function isValidEmail(email) {
        if (!email) return false;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * Valida um número de telefone brasileiro
     * @param {string} phone - Telefone a ser validado
     * @returns {boolean} Se o telefone é válido
     */
    function isValidPhoneBR(phone) {
        if (!phone) return false;
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length === 10 || cleaned.length === 11;
    }

    /**
     * Verifica se uma string não está vazia
     * @param {string} str - String a ser verificada
     * @returns {boolean} Se a string não está vazia
     */
    function isNotEmpty(str) {
        return str !== null && str !== undefined && String(str).trim().length > 0;
    }

    /**
     * Verifica se um valor é um número válido
     * @param {*} value - Valor a ser verificado
     * @returns {boolean} Se o valor é um número
     */
    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }

    /**
     * Verifica se um valor está dentro de um intervalo
     * @param {number} value - Valor a ser verificado
     * @param {number} min - Valor mínimo
     * @param {number} max - Valor máximo
     * @returns {boolean} Se o valor está no intervalo
     */
    function isInRange(value, min, max) {
        return isNumber(value) && value >= min && value <= max;
    }

    return {
        isValidEmail,
        isValidPhoneBR,
        isNotEmpty,
        isNumber,
        isInRange
    };
})();

// ============================================================================
// Translations & Content
// ============================================================================

const translations = {
    pt: {
        role: "Gestão Comercial & Desenvolvimento Digital",
        section_summary: "Resumo",
        summary_text: "Profissional com atuação híbrida em Gestão Comercial e Desenvolvimento Digital. Combino experiência prática em vendas consultivas de alto valor com competência técnica em desenvolvimento web e produção audiovisual. Foco em execução: utilizo dados para qualificar leads, crio ferramentas digitais para otimizar processos e produzo conteúdo visual para suporte direto a vendas. Orientado a eficiência operacional e resultados financeiros.",
        section_experience: "Experiencia Profissional",
        job1_title: "Analista de Vendas e Processos",
        job1_desc1: "<strong>Vendas Consultivas:</strong> Gestão integral do ciclo de vendas de imóveis com ticket médio entre R$ 120k e R$ 2.5M, com atuação em ativos acima de R$ 13M.",
        job1_desc2: "<strong>Qualificação de Leads:</strong> Uso de análise de dados para filtragem de oportunidades no CRM, aumentando a taxa de conversão real do funil.",
        job1_desc3: "<strong>Otimização de Rotina:</strong> Reestruturação de processos de follow-up e atendimento, reduzindo o tempo operacional gasto por cliente.",
        job2_title: "Fundador e Presidente",
        job2_desc1: "<strong>Gestão Institucional:</strong> Fundou e estruturou juridicamente a entidade, liderando uma equipe operacional de 30 membros.",
        job2_desc2: "<strong>Controle Financeiro:</strong> Assumiu o caixa do zero e entregou a gestão com superávit líquido de +R$ 4.000 através de controle de custos e receita.",
        job2_desc3: "<strong>Execução de Projetos:</strong> Organizou e supervisionou a execução de eventos e projetos acadêmicos com foco em viabilidade econômica.",
        job3_title: "Produtor Digital e Desenvolvedor",
        job3_company: "Autônomo",
        job3_desc1: "<strong>Projetos Web:</strong> Desenvolvimento de interfaces e landing pages (HTML/CSS/JS) focadas em conversão e performance.",
        job3_desc2: "<strong>Produção Audiovisual:</strong> Edição e motion graphics (Premiere/After Effects) para comunicação corporativa e materiais de venda.",
        job3_desc3: "<strong>Automação:</strong> Criação de scripts e ferramentas simples para automação de tarefas repetitivas e organização de fluxo de trabalho.",
        job3_desc4: "<strong>Cobertura e Edição de Eventos:</strong> Produção, edição rápida e design gráfico para eventos corporativos — cobertura e edição em tempo real do Fórum Ambição 2030 (Pacto Global da ONU – Rede Brasil), Teatro Santander, São Paulo, agosto de 2025.",
        job4_title: "Assistente de Importação",
        job4_desc1: "<strong>Comércio Exterior:</strong> Operacionalização de processos de importação/exportação e gestão de relacionamento com cadeia de suprimentos internacional.",
        section_skills: "Habilidades Técnicas",
        skill_cat1: "Design e Audiovisual",
        skill_cat2: "Negócios e Ferramentas",
        section_education: "Formação Acadêmica",
        edu1_title: "Relações Internacionais (Bacharelado)",
        edu2_title: "Técnico em Administração",
        section_languages: "Idiomas",
        lang1_name: "Português",
        lang1_details: "Nativo",
        lang2_name: "Inglês",
        lang2_details: "Fluente (Vivência Internacional & Comércio Exterior)",
        lang3_name: "Espanhol",
        lang3_details: "Profissional (Foco em leitura e compreensão corporativa)",
        lang4_name: "Africâner",
        lang4_details: "Básico (Noções gerais)",
        section_activities: "Atividades Extracurriculares",
        act1_desc: "Gestão estratégica de Imagem Pública e comunicação corporativa para o Interact e Rotaract Club.",
        act2_title: "Intercâmbio (Rotary Youth Exchange)",
        act2_desc: "África do Sul.",
        tab_experiments: "Experimentos",
        tab_comex: "Notícias ComEx",
        tab_international: "Notícias Internacionais",
        tab_comex_title: "Notícias ComEx",
        tab_comex_desc: "Em breve: Feed de notícias sobre Comércio Exterior.",
        tab_intl_title: "Notícias Internacionais",
        tab_intl_desc: "Em breve: Feed de notícias internacionais."
    },
    en: {
        role: "Commercial Management & Digital Development",
        section_summary: "Summary",
        summary_text: "Hybrid professional in Commercial Management and Digital Development. I combine practical experience in high-value consultative sales with technical competence in web development and audiovisual production. Focus on execution: I use data to qualify leads, build digital tools to optimize processes, and produce visual content for direct sales support. Oriented towards operational efficiency and financial results.",
        section_experience: "Professional Experience",
        job1_title: "Sales & Process Analyst",
        job1_desc1: "<strong>Consultative Sales:</strong> Full management of the sales cycle for real estate assets ranging from R$ 120k to R$ 2.5M, handling assets exceeding R$ 13M.",
        job1_desc2: "<strong>Lead Qualification:</strong> Use of data analysis for opportunity filtering in CRM, increasing the funnel's actual conversion rate.",
        job1_desc3: "<strong>Routine Optimization:</strong> Restructuring of follow-up and service processes, reducing operational time spent per client.",
        job2_title: "Founder & President",
        job2_desc1: "<strong>Institutional Management:</strong> Founded and legally structured the entity, leading an operational team of 30 members.",
        job2_desc2: "<strong>Financial Control:</strong> Started with zero cash flow and delivered the tenure with a net surplus of +R$ 4,000 through cost and revenue control.",
        job2_desc3: "<strong>Project Execution:</strong> Organized and supervised the execution of events and academic projects focusing on economic viability.",
        job3_title: "Digital Producer & Developer",
        job3_company: "Freelance",
        job3_desc1: "<strong>Web Projects:</strong> Development of interfaces and landing pages (HTML/CSS/JS) focused on conversion and performance.",
        job3_desc2: "<strong>Audiovisual Production:</strong> Editing and motion graphics (Premiere/After Effects) for corporate communication and sales materials.",
        job3_desc3: "<strong>Automation:</strong> Creation of scripts and simple tools for automating repetitive tasks and organizing workflows.",
        job3_desc4: "<strong>Event Coverage & Editing:</strong> Live event production, rapid-turnaround editing and graphic design for corporate events — real-time coverage and editing of Fórum Ambição 2030 (UN Global Compact – Brazil Network), Teatro Santander, São Paulo, August 2025.",
        job4_title: "Import Assistant",
        job4_desc1: "<strong>Foreign Trade:</strong> Operationalization of import/export processes and relationship management with the international supply chain.",
        section_skills: "Technical Skills",
        skill_cat1: "Design & Audiovisual",
        skill_cat2: "Business & Tools",
        section_education: "Education",
        edu1_title: "International Relations (Bachelor's)",
        edu2_title: "Business Administration Technician",
        section_languages: "Languages",
        lang1_name: "Portuguese",
        lang1_details: "Native",
        lang2_name: "English",
        lang2_details: "Fluent (International Experience & Foreign Trade)",
        lang3_name: "Spanish",
        lang3_details: "Professional (Focus on corporate reading and comprehension)",
        lang4_name: "Afrikaans",
        lang4_details: "Basic (General notions)",
        section_activities: "Extracurricular Activities",
        act1_desc: "Strategic management of Public Image and corporate communication for Interact and Rotaract Club.",
        act2_title: "Exchange Program (Rotary Youth Exchange)",
        act2_desc: "South Africa.",
        tab_experiments: "Experiments",
        tab_comex: "ComEx News",
        tab_international: "International News",
        tab_comex_title: "ComEx News",
        tab_comex_desc: "Coming soon: Foreign Trade news feed.",
        tab_intl_title: "International News",
        tab_intl_desc: "Coming soon: International news feed."
    },
    es: {
        role: "Gestión Comercial y Desarrollo Digital",
        section_summary: "Resumen",
        summary_text: "Profesional con enfoque híbrido en Gestión Comercial y Desarrollo Digital. Combino experiencia práctica en ventas consultivas de alto valor con competencia técnica en desarrollo web y producción audiovisual. Enfoque en ejecución: utilizo datos para calificar leads, creo herramientas digitales para optimizar procesos y produzco contenido visual para soporte directo a ventas. Orientado a la eficiencia operativa y resultados financieros.",
        section_experience: "Experiencia Profesional",
        job1_title: "Analista de Ventas y Procesos",
        job1_desc1: "<strong>Ventas Consultivas:</strong> Gestión integral del ciclo de ventas de inmuebles con ticket medio entre R$ 120k e R$ 2.5M, actuando en activos superiores a R$ 13M.",
        job1_desc2: "<strong>Calificación de Leads:</strong> Uso de análisis de datos para filtrado de oportunidades en CRM, aumentando la tasa de conversión real del embudo.",
        job1_desc3: "<strong>Optimización de Rutina:</strong> Reestructuración de procesos de seguimiento y atención, reduciendo el tiempo operativo gastado por cliente.",
        job2_title: "Fundador y Presidente",
        job2_desc1: "<strong>Gestión Institucional:</strong> Fundó y estructuró legalmente la entidad, liderando un equipo operativo de 30 miembros.",
        job2_desc2: "<strong>Control Financiero:</strong> Asumió la caja desde cero y entregó la gestión con un superávit neto de +R$ 4.000 a través del control de costos e ingresos.",
        job2_desc3: "<strong>Ejecución de Proyectos:</strong> Organizó y supervisó la ejecución de eventos y proyectos académicos con enfoque en viabilidad económica.",
        job3_title: "Productor Digital y Desarrollador",
        job3_company: "Autónomo",
        job3_desc1: "<strong>Proyectos Web:</strong> Desarrollo de interfaces y landing pages (HTML/CSS/JS) enfocadas en conversión y rendimiento.",
        job3_desc2: "<strong>Producción Audiovisual:</strong> Edición y motion graphics (Premiere/After Effects) para comunicación corporativa y materiales de venta.",
        job3_desc3: "<strong>Automatización:</strong> Creación de scripts y herramientas simples para la automatización de tareas repetitivas y organización del flujo de trabajo.",
        job3_desc4: "<strong>Cobertura y Edición de Eventos:</strong> Producción en vivo, edición rápida y diseño gráfico para eventos corporativos — cobertura y edición en tiempo real del Fórum Ambição 2030 (Pacto Global de la ONU – Red Brasil), Teatro Santander, São Paulo, agosto de 2025.",
        job4_title: "Asistente de Importación",
        job4_desc1: "<strong>Comercio Exterior:</strong> Operacionalização de processos de importação/exportação e gestão de relações com a cadeia de suprimento internacional.",
        section_skills: "Habilidades Técnicas",
        skill_cat1: "Diseño y Audiovisual",
        skill_cat2: "Negocios y Herramientas",
        section_education: "Formación Académica",
        edu1_title: "Relaciones Internacionales (Licenciatura)",
        edu2_title: "Técnico em Administração",
        section_languages: "Idiomas",
        lang1_name: "Portugués",
        lang1_details: "Nativo",
        lang2_name: "Inglés",
        lang2_details: "Fluido (Vivencia Internacional y Comercio Exterior)",
        lang3_name: "Español",
        lang3_details: "Profesional (Enfoque en lectura y comprensión corporativa)",
        lang4_name: "Afrikáans",
        lang4_details: "Básico (Nociones generales)",
        section_activities: "Actividades Extracurriculares",
        act1_desc: "Gestión estratégica de Imagen Pública y comunicación corporativa para Interact y Rotaract Club.",
        act2_title: "Intercambio (Rotary Youth Exchange)",
        act2_desc: "Sudáfrica.",
        tab_experiments: "Experimentos",
        tab_comex: "Noticias ComEx",
        tab_international: "Noticias Internacionales",
        tab_comex_title: "Noticias ComEx",
        tab_comex_desc: "Próximamente: Noticias sobre Comercio Exterior.",
        tab_intl_title: "Noticias Internacionales",
        tab_intl_desc: "Próximamente: Noticias internacionales."
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;

    // Update buttons (Desktop & Mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.textContent.toLowerCase() === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Update text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Mobile Menu Logic
function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;

    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 200); // Wait for opacity transition
        body.classList.remove('menu-open');
    } else {
        overlay.style.display = 'block';
        // Force reflow
        void overlay.offsetWidth;
        overlay.classList.add('active');
        body.classList.add('menu-open');
    }
}

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle, .theme-btn-mobile');
    const htmlElement = document.documentElement;

    const applyTheme = (isDark, persist = false) => {
        htmlElement.classList.toggle('dark', isDark);
        if (persist) {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
        themeToggleBtns.forEach(btn => {
            btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            // Optional: Update text for mobile button if needed
            if (btn.classList.contains('theme-btn-mobile')) {
                btn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
            }
        });
        window.dispatchEvent(new CustomEvent('themechange', { detail: { isDark } }));
    };

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    applyTheme(initialDark);

    if (!storedTheme && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (event) => applyTheme(event.matches));
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextState = !htmlElement.classList.contains('dark');
            applyTheme(nextState, true);
        });
    });

    // Initialize language
    const initialLang = navigator.language ? navigator.language.slice(0,2) : 'pt';
    setLanguage(translations[initialLang] ? initialLang : 'pt');
});

// View Switching Logic
function switchView(viewName) {
    const resumeView = document.getElementById('resume-view');
    const playgroundView = document.getElementById('playground-view');
    const hireMeView = document.getElementById('hire-me-view');
    
    // Update Top Bar & Mobile Links
    const updateLinks = (selector) => {
        document.querySelectorAll(selector).forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-view') === viewName) {
                btn.classList.add('active');
            }
        });
    };
    updateLinks('.nav-link');
    updateLinks('.mobile-link');

    // Hide all views first (or manage transitions)
    const views = {
        'resume': resumeView,
        'playground': playgroundView,
        'hire-me': hireMeView
    };

    const showEl = views[viewName];
    
    // Simple toggle for now, can be animated
    Object.values(views).forEach(el => {
        if (el && el !== showEl) el.style.display = 'none';
    });

    if (showEl) {
        showEl.style.display = 'block';
        showEl.style.opacity = '0';
        showEl.style.transform = 'translateY(10px)';
        
        // Force Reflow
        void showEl.offsetWidth;

        showEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        showEl.style.opacity = '1';
        showEl.style.transform = 'translateY(0)';
    }

    // Specific Init Logic
    if (viewName === 'resume' && window.Experiments) {
        if (typeof window.Experiments.stopCurrent === 'function') {
            window.Experiments.stopCurrent();
        }
    }

    if (viewName === 'hire-me' && window.HireMe) {
        window.HireMe.init();
    }
}

// Utility: debounce
function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// Experiment Logic
function openExperiment(type) {
    const dashboard = document.getElementById('playground-dashboard');
    const container = document.getElementById('experiment-container');
    const views = document.querySelectorAll('.experiment-view');
    const targetView = document.getElementById(`${type}-view`);

    if (!targetView) return;

    animateTransition(dashboard, container, () => {
        views.forEach(v => v.style.display = 'none');
        targetView.style.display = 'block';
        initExperimentLogic(type, targetView);
    });
}

function initExperimentLogic(type, view) {
        // Initialize experiment with options from controls
        const formatVal = (v) => {
            if (typeof v !== 'number') return v;
            if (Math.abs(v) >= 100) return Math.round(v);
            if (Math.abs(v) >= 1) return Math.round(v * 100) / 100;
            return parseFloat(v.toPrecision(4));
        };

        const readOptions = () => {
            const opts = {};
            const controls = view.querySelectorAll('.exp-control');
            controls.forEach(ctrl => {
                const name = ctrl.name;
                let val = ctrl.value;
                if (val !== undefined && val !== null && val !== '') {
                    if (val.indexOf('.') >= 0) val = parseFloat(val);
                    else val = parseFloat(val);
                }
                opts[name] = val;
                const label = view.querySelector(`#${type}-${name}-label`);
                if (label) label.textContent = formatVal(val);
            });
            return opts;
        };

        const startWithOptions = (opts) => {
            if (Experiments && Experiments[type]) {
                Experiments.stopCurrent();
                const result = Experiments[type](`${type}Canvas`, opts);

                if (typeof result === 'function') {
                    Experiments.currentInstance = { cleanup: result, setOptions: null };
                } else if (result && typeof result === 'object') {
                    Experiments.currentInstance = result;
                } else {
                    Experiments.currentInstance = null;
                }

                Experiments.activeId = type;
            }
        };

        startWithOptions(readOptions());

        if (view._expBound && Array.isArray(view._expBound)) {
            view._expBound.forEach(b => b.el.removeEventListener('input', b.handler));
        }
        const bound = [];
        view.querySelectorAll('.exp-control').forEach(ctrl => {
            const handler = debounce(() => {
                const opts = readOptions();
                if (Experiments && Experiments.currentInstance && typeof Experiments.currentInstance.setOptions === 'function') {
                    try {
                        const res = Experiments.currentInstance.setOptions(opts);
                        if (res && res.requiresReinit) {
                            startWithOptions(opts);
                        }
                        return;
                    } catch (err) {
                        console.warn('setOptions failed, reinitializing:', err);
                        startWithOptions(opts);
                        return;
                    }
                }
                startWithOptions(opts);
            }, 250);
            ctrl.addEventListener('input', handler);
            bound.push({ el: ctrl, handler });
        });
        view._expBound = bound;
}

function closeExperiment() {
    const dashboard = document.getElementById('playground-dashboard');
    const container = document.getElementById('experiment-container');
    
    animateTransition(container, dashboard, () => {
        const prevActive = Experiments ? Experiments.activeId : null;
        if (Experiments) Experiments.stopCurrent();
        if (prevActive) {
            const activeView = document.getElementById(`${prevActive}-view`);
            if (activeView && activeView._expBound) {
                activeView._expBound.forEach(b => b.el.removeEventListener('input', b.handler));
                activeView._expBound = null;
            }
        }
    });
}

function animateTransition(hideElement, showElement, onComplete) {
    const immediateSwitch = () => {
        if (hideElement) hideElement.style.display = 'none';
        if (showElement) showElement.style.display = 'block';
        if (onComplete) onComplete();
    };

    if (!hideElement || !showElement) {
        immediateSwitch();
        return;
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
        immediateSwitch();
        return;
    }

    hideElement.style.opacity = '0';
    hideElement.style.transform = 'translateY(10px)';
    hideElement.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

    setTimeout(() => {
        hideElement.style.display = 'none';

        showElement.style.opacity = '0';
        showElement.style.transform = 'translateY(10px)';
        showElement.style.display = 'block';

        // Force Reflow
        void showElement.offsetWidth;

        showElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        showElement.style.opacity = '1';
        showElement.style.transform = 'translateY(0)';

        setTimeout(() => {
            if (onComplete) onComplete();
        }, 300);
    }, 200);
}

function switchPlaygroundTab(tabId) {
    const buttons = document.querySelectorAll('.pg-tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const contents = document.querySelectorAll('.pg-tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
        target.classList.add('active');
    }
}

// Global Exports
window.openExperiment = openExperiment;
window.closeExperiment = closeExperiment;
window.switchView = switchView;
window.setLanguage = setLanguage;
window.switchPlaygroundTab = switchPlaygroundTab;
window.toggleMobileMenu = toggleMobileMenu;

// Utility Modules Exports
window.AppState = AppState;
window.DOMUtils = DOMUtils;
window.StorageUtils = StorageUtils;
window.FormatUtils = FormatUtils;
window.ValidationUtils = ValidationUtils;
