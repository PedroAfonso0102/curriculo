// Translations & Content
// DUAL UPDATE PROCESS (Obrigatório):
// 1) Atualize o texto em Português diretamente em `index.html` (conteúdo hardcoded) para SEO/initial paint.
// 2) Atualize a mesma chave em `window.translations.pt` em `main.js` para sincronizar traduções.
// 3) Confirme que todos os elementos que precisam de tradução possuem `data-i18n="<key>"` no HTML.
// 4) Não use o texto do botão para identificar views; utilize `data-view` para navegação.
// NOTES (EN): Dual Update required to ensure initial SEO content and runtime translations stay in sync.
//    - Update index.html (PT) and then update `window.translations` for pt/en/es in main.js.
//    - Use `data-i18n` attributes in HTML to wire translations.
//    - Use `data-view` attributes on navigation buttons for language-agnostic routing.

/**
 * Global translations object containing text for all supported languages.
 * Keys correspond to `data-i18n` attributes in the HTML.
 * @type {Object.<string, Object.<string, string>>}
 */
window.translations = {
    pt: {
        role: "Sales Ops & Growth Specialist",
        section_summary: "Resumo",
        summary_text: "Especialista em Eficiência Comercial. Unifico a agressividade de vendas consultivas (B2B) com a lógica de desenvolvimento (Web/Automação). Não apenas opero o CRM; crio as ferramentas e scripts que aceleram o ciclo de vendas. Foco: Receita, Dados e Menor Custo Operacional.",
        section_experience: "Experiencia Profissional",
        job1_title: "Analista de Vendas e Processos",
        job1_desc1: "<strong>Vendas Consultivas:</strong> Gestão integral do ciclo de vendas de imóveis com ticket médio entre <span class='text-emphasis'>R$ 120k</span> e <span class='text-emphasis'>R$ 2.5M</span>, com atuação em ativos acima de <span class='text-emphasis'>R$ 13M</span>.",
        job1_desc2: "<strong>Qualificação de Leads:</strong> Uso de análise de dados para filtragem de oportunidades no CRM, aumentando a taxa de conversão real do funil.",
        job1_desc3: "<strong>Otimização de Rotina:</strong> Reestruturação de processos de follow-up e atendimento, reduzindo o tempo operacional gasto por cliente.",
        job2_title: "Fundador e Presidente",
        job2_desc1: "<strong>Gestão Institucional:</strong> Fundou e estruturou juridicamente a entidade, liderando uma equipe operacional de 30 membros.",
        job2_desc2: "<strong>Controle Financeiro:</strong> Assumiu o caixa do zero e entregou a gestão com superávit líquido de <span class='text-emphasis'>+R$ 4.000</span> através de controle de custos e receita.",
        job2_desc3: "<strong>Execução de Projetos:</strong> Organizou e supervisionou a execução de eventos e projetos acadêmicos com foco em viabilidade econômica.",
        job3_title: "Sales Ops & Desenvolvedor",
        job3_company: "Autônomo",
        job3_desc1: "<strong>Projetos Web:</strong> Desenvolvimento de interfaces e landing pages (HTML/CSS/JS) focadas em conversão e performance.",
        job3_desc2: "<strong>Produção Audiovisual:</strong> Edição e motion graphics (Premiere/After Effects) para comunicação corporativa e materiais de venda.",
        job3_desc3: "<strong>Automação:</strong> Criação de scripts e ferramentas simples para automação de tarefas repetitivas e organização de fluxo de trabalho.",
        job3_desc4: "<strong>Cobertura e Edição de Eventos:</strong> Produção, edição rápida e design gráfico para eventos corporativos.",
        job4_title: "Assistente de Importação",
        job4_desc1: "<strong>Comércio Exterior:</strong> Operacionalização de processos de importação/exportação e gestão de relacionamento com cadeia de suprimentos internacional.",
        section_skills: "Ferramentas de Alavancagem",
        skill_cat1: "Vendas & Negócios",
        skill_cat2: "Tech & Design (Apoio)",
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
        tab_tools: "Ferramentas (Labs)",
        tab_articles: "Artigos Técnicos",
        // Playground & UI labels
        nav_resume: "Currículo",
        nav_playground: "Análises & Projetos",
        nav_hire: "Diagnóstico",
        mobile_menu_open: "Menu",
        mobile_menu_close: "Fechar",
        playground_title: "Inteligência de Mercado",
        playground_role: "Análises, Artigos e Ferramentas",
        exp_back: "← Voltar",
        exp_fluid_title: "Simulação de Fluidos",
        exp_fluid_sub: "Interativo",
        exp_gravity_title: "Gravidade",
        exp_gravity_sub: "Partículas",
        exp_pendulum_title: "Pêndulo Duplo",
        exp_pendulum_sub: "Caos",
        exp_fourier_title: "Séries de Fourier",
        exp_fourier_sub: "Ondas",
        exp_harmonic_title: "Movimento Harmônico",
        exp_harmonic_sub: "Molas",
        exp_chaos_title: "Jogo do Caos",
        exp_chaos_sub: "Fractais",
        exp_lissajous_title: "Curvas de Lissajous",
        exp_lissajous_sub: "Curvas",
        // Playground Controls
        ctrl_resolution: "Resolução",
        ctrl_viscosity: "Viscosidade",
        ctrl_emit_strength: "Força de Emissão",
        ctrl_gravity: "Gravidade",
        ctrl_particles: "Partículas",
        ctrl_mass1: "Massa 1",
        ctrl_mass2: "Massa 2",
        ctrl_length1: "Comprimento 1",
        ctrl_length2: "Comprimento 2",
        ctrl_damping: "Amortecimento",
        ctrl_g: "Gravidade (G)",
        ctrl_terms: "Termos",
        ctrl_speed: "Velocidade",
        ctrl_amplitude: "Amplitude",
        ctrl_diffusion: "Difusão",
        ctrl_trails: "Rastro",
        ctrl_trace_opacity: "Opacidade Rastro",
        ctrl_color_hue: "Cor (Hue)",
        ctrl_harmonic_k: "Rigidez (k)",
        ctrl_harmonic_count: "Qtd. Partículas",
        theme_toggle_aria: "Alternar modo noturno",
        // Hire Me - General
        hire_header_title: "Me Contrate",
        hire_role: "Escolha um serviço e solicite orçamento via WhatsApp",
        hire_deliver_title: "O Que Entrego",
        hire_deliver_1: "Implementação de CRM (Pipedrive/Hubspot)",
        hire_deliver_2: "Sales Ops & Inteligência Comercial",
        hire_deliver_3: "Automação de Processos & Scripts",
        hire_deliver_4: "Landing Pages de Alta Conversão",
        hire_not_title: "O Que Não Faço",
        hire_not_1: "Cold calling sem estratégia prévia",
        hire_not_2: "Design 'bonito' sem foco em vendas",
        hire_not_3: "Gestão de Redes Sociais (Social Media)",
        hire_cta_button: "Agendar Reunião de Diagnóstico",
        hire_cta_sub: "30 min de consultoria gratuita para entender seu cenário.",
        hire_conf_title: "Solicitação enviada",
        hire_conf_desc: "Redirecionado ao WhatsApp. Se não abrir, verifique bloqueadores.",
        hire_conf_btn: "Voltar",
    },
    en: {
        role: "Sales Ops & Growth Specialist",
        section_summary: "Summary",
        summary_text: "Sales Efficiency Specialist. I merge the aggressiveness of consultative sales (B2B) with development logic (Web/Automation). I don't just operate the CRM; I build the tools and scripts that accelerate the sales cycle. Focus: Revenue, Data, and Lower Operational Cost.",
        section_experience: "Professional Experience",
        job1_title: "Sales & Process Analyst",
        job1_desc1: "<strong>Consultative Sales:</strong> Full management of the sales cycle for real estate assets ranging from <span class='text-emphasis'>R$ 120k</span> to <span class='text-emphasis'>R$ 2.5M</span>, handling assets exceeding <span class='text-emphasis'>R$ 13M</span>.",
        job1_desc2: "<strong>Lead Qualification:</strong> Use of data analysis for opportunity filtering in CRM, increasing the funnel's actual conversion rate.",
        job1_desc3: "<strong>Routine Optimization:</strong> Restructuring of follow-up and service processes, reducing operational time spent per client.",
        job2_title: "Founder & President",
        job2_desc1: "<strong>Institutional Management:</strong> Founded and legally structured the entity, leading an operational team of 30 members.",
        job2_desc2: "<strong>Financial Control:</strong> Started with zero cash flow and delivered the tenure with a net surplus of <span class='text-emphasis'>+R$ 4,000</span> through cost and revenue control.",
        job2_desc3: "<strong>Project Execution:</strong> Organized and supervised the execution of events and academic projects focusing on economic viability.",
        job3_title: "Sales Ops & Developer",
        job3_company: "Freelance",
        job3_desc1: "<strong>Web Projects:</strong> Development of interfaces and landing pages (HTML/CSS/JS) focused on conversion and performance.",
        job3_desc2: "<strong>Audiovisual Production:</strong> Editing and motion graphics (Premiere/After Effects) for corporate communication and sales materials.",
        job3_desc3: "<strong>Automation:</strong> Creation of scripts and simple tools for automating repetitive tasks and organizing workflows.",
        job3_desc4: "<strong>Event Coverage & Editing:</strong> Live event production, rapid-turnaround editing and graphic design for corporate events.",
        job4_title: "Import Assistant",
        job4_desc1: "<strong>Foreign Trade:</strong> Operationalization of import/export processes and relationship management with the international supply chain.",
        section_skills: "Leverage Tools",
        skill_cat1: "Sales & Business",
        skill_cat2: "Tech & Design (Support)",
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
        tab_tools: "Tools (Labs)",
        tab_articles: "Technical Articles",
        // Playground & UI labels
        nav_resume: "Resume",
        nav_playground: "Analysis & Projects",
        nav_hire: "Diagnostic",
        mobile_menu_open: "Menu",
        mobile_menu_close: "Close",
        playground_title: "Market Intelligence",
        playground_role: "Analysis, Articles & Tools",
        exp_back: "← Back",
        exp_fluid_title: "Fluid Simulation",
        exp_fluid_sub: "Interactive",
        exp_gravity_title: "Gravity",
        exp_gravity_sub: "Particles",
        exp_pendulum_title: "Double Pendulum",
        exp_pendulum_sub: "Chaos",
        exp_fourier_title: "Fourier Series",
        exp_fourier_sub: "Waves",
        exp_harmonic_title: "Harmonic Motion",
        exp_harmonic_sub: "Springs",
        exp_chaos_title: "Chaos Game",
        exp_chaos_sub: "Fractals",
        exp_lissajous_title: "Lissajous Curves",
        exp_lissajous_sub: "Curves",
        // Playground Controls
        ctrl_resolution: "Resolution",
        ctrl_viscosity: "Viscosity",
        ctrl_emit_strength: "Emit Strength",
        ctrl_gravity: "Gravity",
        ctrl_particles: "Particles",
        ctrl_mass1: "Mass 1",
        ctrl_mass2: "Mass 2",
        ctrl_length1: "Length 1",
        ctrl_length2: "Length 2",
        ctrl_damping: "Damping",
        ctrl_g: "Gravity (G)",
        ctrl_terms: "Terms",
        ctrl_speed: "Speed",
        ctrl_amplitude: "Amplitude",
        // Extra Controls
        ctrl_diffusion: "Diffusion",
        ctrl_trails: "Trails",
        ctrl_trace_opacity: "Trace Opacity",
        ctrl_color_hue: "Color (Hue)",
        ctrl_harmonic_k: "Stiffness (k)",
        ctrl_harmonic_count: "Particle Count",
        ctrl_chaos_vertices: "Vertices",
        ctrl_chaos_size: "Point Size",
        ctrl_lissajous_trail: "Trail",
        ctrl_lissajous_width: "Thickness",
        // Theme labels
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        theme_toggle_aria: "Toggle dark mode",
        // Hire Me - General
        hire_header_title: "Hire Me",
        hire_role: "Choose a service and request a quote via WhatsApp",
        hire_deliver_title: "What I Deliver",
        hire_deliver_1: "CRM Implementation (Pipedrive/Hubspot)",
        hire_deliver_2: "Sales Ops & Commercial Intelligence",
        hire_deliver_3: "Process Automation & Scripts",
        hire_deliver_4: "High Conversion Landing Pages",
        hire_not_title: "What I Don't Do",
        hire_not_1: "Cold calling without strategy",
        hire_not_2: "Pretty design without sales focus",
        hire_not_3: "Social Media Management",
        hire_cta_button: "Schedule Diagnostic Call",
        hire_cta_sub: "30 min free consulting to understand your scenario.",
        hire_conf_title: "Request Started!",
        hire_conf_desc: "You were redirected to WhatsApp. If the window didn't open, check your pop-up blocker.",
        hire_conf_btn: "Back to Home",
    },
    es: {
        role: "Especialista en Sales Ops y Growth",
        section_summary: "Resumen",
        summary_text: "Especialista en Eficiencia Comercial. Unifico la agresividad de las ventas consultivas (B2B) con la lógica del desarrollo (Web/Automatización). No solo opero el CRM; creo las herramientas y scripts que aceleran el ciclo de ventas. Enfoque: Ingresos, Datos y Menor Costo Operativo.",
        section_experience: "Experiencia Profesional",
        job1_title: "Analista de Ventas y Procesos",
        job1_desc1: "<strong>Ventas Consultivas:</strong> Gestión integral del ciclo de ventas de inmuebles con ticket medio entre <span class='text-emphasis'>R$ 120k</span> e <span class='text-emphasis'>R$ 2.5M</span>, actuando en activos superiores a <span class='text-emphasis'>R$ 13M</span>.",
        job1_desc2: "<strong>Calificación de Leads:</strong> Uso de análisis de datos para filtrado de oportunidades en CRM, aumentando la tasa de conversión real del embudo.",
        job1_desc3: "<strong>Optimización de Rutina:</strong> Reestructuración de procesos de seguimiento y atención, reduciendo el tiempo operativo gastado por cliente.",
        job2_title: "Fundador y Presidente",
        job2_desc1: "<strong>Gestión Institucional:</strong> Fundó y estructuró legalmente la entidad, liderando un equipo operativo de 30 miembros.",
        job2_desc2: "<strong>Control Financiero:</strong> Asumió la caja desde cero y entregó la gestión con un superávit neto de <span class='text-emphasis'>+R$ 4.000</span> a través del control de costos e ingresos.",
        job2_desc3: "<strong>Ejecución de Proyectos:</strong> Organizó y supervisó la ejecución de eventos y proyectos académicos con enfoque en viabilidad económica.",
        job3_title: "Sales Ops y Desarrollador",
        job3_company: "Autónomo",
        job3_desc1: "<strong>Proyectos Web:</strong> Desarrollo de interfaces y landing pages (HTML/CSS/JS) enfocadas en conversión y rendimiento.",
        job3_desc2: "<strong>Producción Audiovisual:</strong> Edición y motion graphics (Premiere/After Effects) para comunicación corporativa y materiales de venta.",
        job3_desc3: "<strong>Automatización:</strong> Creación de scripts y herramientas simples para la automatización de tareas repetitivas y organización del flujo de trabajo.",
        job3_desc4: "<strong>Cobertura y Edición de Eventos:</strong> Producción en vivo, edición rápida y diseño gráfico para eventos corporativos.",
        job4_title: "Asistente de Importación",
        job4_desc1: "<strong>Comercio Exterior:</strong> Operacionalização de processos de importação/exportação e gestão de relações com a cadeia de suprimento internacional.",
        section_skills: "Herramientas de Apalancamiento",
        skill_cat1: "Ventas y Negocios",
        skill_cat2: "Tech y Diseño (Apoyo)",
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
        tab_tools: "Herramientas (Labs)",
        tab_articles: "Artículos Técnicos",
        // Playground & UI labels
        nav_resume: "Currículum",
        nav_playground: "Análisis y Proyectos",
        nav_hire: "Diagnóstico",
        mobile_menu_open: "Menú",
        mobile_menu_close: "Cerrar",
        playground_title: "Inteligencia de Mercado",
        playground_role: "Análisis, Artículos y Herramientas",
        exp_back: "← Volver",
        exp_fluid_title: "Simulación de Fluidos",
        exp_fluid_sub: "Interactivo",
        exp_gravity_title: "Gravedad",
        exp_gravity_sub: "Partículas",
        exp_pendulum_title: "Péndulo Doble",
        exp_pendulum_sub: "Caos",
        exp_fourier_title: "Series de Fourier",
        exp_fourier_sub: "Ondas",
        exp_harmonic_title: "Movimiento Armónico",
        exp_harmonic_sub: "Muelle(s)",
        exp_chaos_title: "Juego del Caos",
        exp_chaos_sub: "Fractales",
        exp_lissajous_title: "Curvas de Lissajous",
        exp_lissajous_sub: "Curvas",
        // Playground Controls
        ctrl_resolution: "Resolución",
        ctrl_viscosity: "Viscosidad",
        ctrl_emit_strength: "Fuerza de Emisión",
        ctrl_gravity: "Gravedad",
        ctrl_particles: "Partículas",
        ctrl_mass1: "Masa 1",
        ctrl_mass2: "Masa 2",
        ctrl_length1: "Longitud 1",
        ctrl_length2: "Longitud 2",
        ctrl_damping: "Amortiguación",
        ctrl_g: "Gravedad (G)",
        ctrl_terms: "Términos",
        ctrl_speed: "Velocidad",
        ctrl_amplitude: "Amplitud",
        // Extra Controls
        ctrl_diffusion: "Difusión",
        ctrl_trails: "Rastro",
        ctrl_trace_opacity: "Opacidad Rastro",
        ctrl_color_hue: "Color (Hue)",
        ctrl_harmonic_k: "Rigidez (k)",
        ctrl_harmonic_count: "Cant. Partículas",
        ctrl_chaos_vertices: "Vértices",
        ctrl_chaos_size: "Tamaño Punto",
        ctrl_lissajous_trail: "Rastro",
        ctrl_lissajous_width: "Grosor",
        theme_toggle_aria: "Alternar modo oscuro",
        // Theme labels
        theme_dark: "Modo Oscuro",
        theme_light: "Modo Claro",
        // Hire Me - General
        hire_header_title: "Contrátame",
        hire_role: "Elige el servicio ideal para tu momento",
        hire_deliver_title: "Lo Que Entrego",
        hire_deliver_1: "Implementación de CRM (Pipedrive/Hubspot)",
        hire_deliver_2: "Sales Ops e Inteligencia Comercial",
        hire_deliver_3: "Automatización de Procesos y Scripts",
        hire_deliver_4: "Landing Pages de Alta Conversión",
        hire_not_title: "Lo Que No Hago",
        hire_not_1: "Cold calling sin estrategia previa",
        hire_not_2: "Diseño 'bonito' sin enfoque en ventas",
        hire_not_3: "Gestión de Redes Sociales (Social Media)",
        hire_cta_button: "Agendar Reunión de Diagnóstico",
        hire_cta_sub: "30 min de consultoría gratuita para entender tu escenario.",
        hire_conf_title: "¡Solicitud Iniciada!",
        hire_conf_desc: "Has sido redirigido a WhatsApp. Si la ventana no se abrió, verifica tu bloqueador de ventanas emergentes.",
        hire_conf_btn: "Volver al Inicio",
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
        if (window.translations[lang][key]) {
            element.innerHTML = window.translations[lang][key];
        }
    });

    // Ensure theme button shows localized text for current theme state
    (function updateThemeButtonForLang() {
        const isDark = document.documentElement.classList.contains('dark');
        const t = (window.translations && window.translations[lang]) ? window.translations[lang] : window.translations.pt;
        document.querySelectorAll('.theme-btn-mobile').forEach(btn => {
            btn.textContent = isDark ? (t.theme_light || 'Modo Claro') : (t.theme_dark || 'Modo Escuro');
        });
        // Update aria-label for desktop theme toggle(s)
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            if (t.theme_toggle_aria) btn.setAttribute('aria-label', t.theme_toggle_aria);
        });
    })();

    // Update Hire Me View if active
    if (window.HireMe && document.getElementById('hire-me-view').style.display !== 'none') {
        window.HireMe.init();
    }
}

/**
 * Toggles the mobile menu overlay and updates the body class.
 */
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
            // Update mobile theme button text using current translations
            if (btn.classList.contains('theme-btn-mobile')) {
                const lang = document.documentElement.lang || 'pt';
                const t = (window.translations && window.translations[lang]) ? window.translations[lang] : window.translations.pt;
                btn.textContent = isDark ? (t.theme_light || 'Modo Claro') : (t.theme_dark || 'Modo Escuro');
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
    const initialLang = navigator.language ? navigator.language.slice(0, 2) : 'pt';
    setLanguage(window.translations[initialLang] ? initialLang : 'pt');
});

/**
 * Switches the main view of the application (Resume, Playground, Hire Me).
 * Handles visibility transitions and stops/starts view-specific logic.
 * @param {string} viewName - The identifier of the view to switch to (e.g., 'resume', 'playground', 'hire-me').
 */
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

/**
 * Creates a debounced function that delays invoking `fn` until after `wait` milliseconds have elapsed.
 * @param {Function} fn - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} The debounced function.
 */
function debounce(fn, wait) {
    let t;
    return function (...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

/**
 * Opens a specific experiment in the Playground view.
 * @param {string} type - The type of experiment to open (e.g., 'fluid', 'gravity').
 */
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

/**
 * Initializes the logic and event listeners for a specific experiment view.
 * Handles reading options from DOM controls and starting the experiment instance.
 * @param {string} type - The experiment type.
 * @param {HTMLElement} view - The DOM element containing the experiment view.
 */
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
                val = parseFloat(val);
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

    // Initial start
    startWithOptions(readOptions());

    // Cleanup old listeners
    if (view._expBound && Array.isArray(view._expBound)) {
        view._expBound.forEach(b => b.el.removeEventListener('input', b.handler));
    }

    const bound = [];

    // Debounced logic update
    const updateLogic = debounce((opts) => {
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

    // Bind controls
    view.querySelectorAll('.exp-control').forEach(ctrl => {
        const handler = () => {
            const opts = readOptions(); // Updates labels immediately
            updateLogic(opts);          // Updates simulation with delay
        };
        ctrl.addEventListener('input', handler);
        bound.push({ el: ctrl, handler });
    });

    view._expBound = bound;
}

/**
 * Closes the currently active experiment and returns to the dashboard.
 */
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

/**
 * Animates a transition between two elements (hide one, show another).
 * @param {HTMLElement} hideElement - The element to hide.
 * @param {HTMLElement} showElement - The element to show.
 * @param {Function} onComplete - Callback function executed after the transition.
 */
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

/**
 * Switches the active tab in the Playground view.
 * @param {string} tabId - The ID of the tab to activate.
 */
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
