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
        role: "Gestão Comercial & Desenvolvimento Digital",
        section_summary: "Resumo",
        summary_text: "Profissional de Vendas e Operações com perfil Hands-on. Minha atuação comercial é potencializada por um background técnico em desenvolvimento web e produção audiovisual. Isso me permite não apenas negociar e fechar contratos, mas também criar meus próprios materiais de apoio, automatizar tarefas repetitivas e dialogar com times de produto sem ruídos. Foco em reduzir fricção operacional para entregar receita.",
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
        tab_lab: "O Laboratório",
        tab_insights: "Insight Log",
        tab_insights_title: "Insight Log",
        tab_insights_desc: "Análises e reflexões sobre mercado, tecnologia e vendas.",
        // Portfolio
        nav_portfolio: "Portfólio",
        portfolio_title: "Portfólio",
        portfolio_subtitle: "Vitrine de Projetos Imobiliários & Digitais",
        btn_details: "Ver Detalhes →",
        btn_soon: "Em breve",
        // Playground & UI labels
        nav_resume: "Currículo",
        nav_playground: "Playground",
        nav_hire: "Me Contrate",
        mobile_menu_open: "Menu",
        mobile_menu_close: "Fechar",
        playground_title: "Playground",
        playground_role: "Área de Testes e Experimentação",
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
        hire_back: "← Voltar",
        hire_invest: "Investimento",
        hire_deadline: "Prazo Estimado",
        hire_included: "O que está incluso",
        hire_not_included: "O que não está incluso",
        hire_btn_budget: "Pedir Orçamento",
        hire_btn_schedule: "Agendar",
        hire_form_title: "Qualifique o projeto",
        hire_form_name: "Nome",
        hire_form_budget: "Orçamento (R$)",
        hire_form_deadline: "Prazo (dias)",
        hire_form_link: "Link do projeto (opcional)",
        hire_form_submit: "Enviar (WhatsApp)",
        hire_schedule_title: "Escolha uma Data",
        hire_schedule_desc: "Selecione um dia de preferência. Confirmaremos o horário exato pelo WhatsApp.",
        hire_schedule_next: "Próximos Dias Úteis",
        hire_schedule_period: "Período Preferido",
        hire_period_morning: "Manhã",
        hire_period_afternoon: "Tarde",
        hire_period_night: "Noite",
        hire_conf_title: "Solicitação enviada",
        hire_conf_desc: "Redirecionado ao WhatsApp. Se não abrir, verifique bloqueadores.",
        hire_conf_btn: "Voltar",

        // Hire Me - Expectations (Green/Red Flags)
        hire_exp_green_title: "O que esperar (Green Flags)",
        hire_exp_green_1: "Execução ponta a ponta",
        hire_exp_green_2: "Criação de materiais de venda",
        hire_exp_green_3: "CRM Driven",
        hire_exp_red_title: "O que NÃO esperar (Red Flags)",
        hire_exp_red_1: "Gestão de times grandes (no momento)",
        hire_exp_red_2: "Desenvolvimento de Software Complexo/Back-end",
        hire_exp_red_3: "Cold calling sem estratégia prévia",

        // Hire Me - Services
        service_landing_title: "Landing Page",
        service_landing_desc: "Página de alta conversão focada em um único objetivo (venda, captura de lead, etc). Design persuasivo e otimizado.",
        service_landing_inc1: "Design Exclusivo",
        service_landing_inc2: "Copywriting Básico",
        service_landing_inc3: "Integração com Email Mkt",
        service_landing_inc4: "Otimização Mobile",
        service_landing_exc1: "Domínio e Hospedagem",
        service_landing_exc2: "Gestão de Tráfego",

        service_ecommerce_title: "E-commerce Básico",
        service_ecommerce_desc: "Loja virtual completa para pequenos negócios. Gestão de produtos, estoque e pagamentos integrados.",
        service_ecommerce_inc1: "Até 50 produtos",
        service_ecommerce_inc2: "Integração PagSeguro/Stripe",
        service_ecommerce_inc3: "Cálculo de Frete",
        service_ecommerce_inc4: "Painel Administrativo",
        service_ecommerce_exc1: "Cadastro de todos os produtos",
        service_ecommerce_exc2: "Fotografia de produtos",

        service_app_title: "Aplicação Web",
        service_app_desc: "Sistemas web complexos, dashboards, áreas de membros ou ferramentas SaaS personalizadas.",
        service_app_inc1: "Arquitetura de Banco de Dados",
        service_app_inc2: "API RESTful",
        service_app_inc3: "Frontend React/Vue",
        service_app_inc4: "Painel Admin",
        service_app_exc1: "App Nativo (iOS/Android)",

        service_ux_title: "Consultoria UX/UI",
        service_ux_desc: "Avaliação de usabilidade e interface. Entrego relatório com falhas críticas, wireframes e plano de intervenção. Processo: auditoria → priorização → alinhamento.",
        service_ux_inc1: "Relatório com prioridades",
        service_ux_inc2: "Wireframes de solução",
        service_ux_inc3: "Sessão de alinhamento (remote)",
        service_ux_exc1: "Implementação em código",

        service_mentor_title: "Mentoria Audiovisual",
        service_mentor_desc: "Orientação de carreira, análise técnica e direção de projetos audiovisuais.",
        service_mentor_inc1: "Análise de Portfólio/Reel",
        service_mentor_inc2: "Direção de Arte & Roteiro",
        service_mentor_inc3: "Feedback de Edição",
        service_mentor_exc1: "Desenvolvimento de projetos completos",

        service_freelance_title: "Freelance Fixo",
        service_freelance_desc: "Contrato mensal de horas para manutenção, pequenas features e suporte. Entrego relatório mensal de horas e prioridades.",
        service_freelance_inc1: "Alocação mensal de horas",
        service_freelance_inc2: "Relatório mensal",
        service_freelance_inc3: "Prioridade no atendimento",
        service_freelance_exc1: "Projetos novos de grande escopo",

        hire_price_consult: "Sob Consulta",
        hire_price_hour: "R$ 300/h",
        hire_price_hour_mentor: "R$ 200/h",
        hire_price_monthly: "Mensal",
        hire_dead_variable: "Variável",
        hire_dead_hour: "Por hora",
        hire_dead_session: "Sessão 1h",
        hire_dead_recur: "Recorrente",
        hire_day_unit: "dias úteis",

        // New Services (v2.1)
        service_speed_landing_title: "Landing Page — Speed-First",
        service_speed_landing_desc: "Landing otimizada para anúncios. Página única, carregamento <1s. Processo: briefing → design (Figma) → desenvolvimento → otimização.",
        service_speed_landing_inc1: "HTML5 + CSS otimizado",
        service_speed_landing_inc2: "Vanilla JS, sem libs",
        service_speed_landing_inc3: "Design aprovado (Figma)",
        service_speed_landing_inc4: "Otimização para mobile",
        service_speed_landing_exc1: "Mudanças estruturais pós-aprovação",

        service_storefront_title: "Storefront Customizado",
        service_storefront_desc: "Storefront para e‑commerce (vitrine + carrinho). Integração com PagSeguro/Stripe/Shopify/Nuvemshop. Processo: briefing → protótipo → integração → entrega.",
        service_storefront_inc1: "Frontend custom (Vanilla)",
        service_storefront_inc2: "Integração de pagamentos",
        service_storefront_inc3: "Carrinho visual e vitrine",
        service_storefront_inc4: "Base de identidade visual",
        service_storefront_exc1: "Checkout transacional (terceiro)",

        service_platform_setup_title: "Sales Ops & Vendas",
        service_platform_setup_desc: "Otimização de processos comerciais e configuração de CRM. Foco em limpar o funil e acelerar o fechamento.",
        service_platform_setup_inc1: "Configuração de CRM",
        service_platform_setup_inc2: "Automação de Follow-up",
        service_platform_setup_inc3: "Playbook de Vendas",
        service_platform_setup_exc1: "Gestão de equipe de vendas",

        service_visual_asset_title: "Produção Audiovisual B2B",
        service_visual_asset_desc: "Vídeos e materiais visuais focados em suporte à venda. Demonstrações de produto, vídeos institucionais e assets para ads.",
        service_visual_asset_inc1: "Vídeo Institucional",
        service_visual_asset_inc2: "Edição para Ads",
        service_visual_asset_inc3: "Roteiro de Vendas",
        service_visual_asset_exc1: "Cobertura de eventos sociais",

        hire_price_landing: "R$ 2.500 - R$ 3.500",
        hire_price_storefront: "R$ 5.000 - R$ 7.000",
        hire_price_setup: "R$ 2.000 + Setup",
        hire_price_visual: "R$ 3.500+"
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
        tab_lab: "The Laboratory",
        tab_insights: "Insight Log",
        tab_insights_title: "Insight Log",
        tab_insights_desc: "Analysis and reflections on market, technology and sales.",
        // Portfolio
        nav_portfolio: "Portfolio",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Showcase of Real Estate & Digital Projects",
        btn_details: "View Details →",
        btn_soon: "Coming Soon",
        // Playground & UI labels
        nav_resume: "Resume",
        nav_playground: "Playground",
        nav_hire: "Hire Me",
        mobile_menu_open: "Menu",
        mobile_menu_close: "Close",
        playground_title: "Playground",
        playground_role: "Testing & Experimentation Area",
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
        hire_role: "Choose the ideal service for your moment",
        hire_back: "← Back",
        hire_invest: "Investment",
        hire_deadline: "Estimated Time",
        hire_included: "What's included",
        hire_not_included: "What's not included",
        hire_btn_budget: "Request Quote",
        hire_btn_schedule: "See Schedule",
        hire_form_title: "Qualification Form",
        hire_form_name: "Your Name",
        hire_form_budget: "What is your budget?",
        hire_form_deadline: "What is the ideal deadline?",
        hire_form_link: "Current project link (if any)?",
        hire_form_submit: "Send via WhatsApp",
        hire_schedule_title: "Pick a Date",
        hire_schedule_desc: "Select a preferred day. We will confirm the exact time via WhatsApp.",
        hire_schedule_next: "Next Business Days",
        hire_schedule_period: "Preferred Period",
        hire_period_morning: "Morning",
        hire_period_afternoon: "Afternoon",
        hire_period_night: "Night",
        hire_conf_title: "Request Started!",
        hire_conf_desc: "You were redirected to WhatsApp. If the window didn't open, check your pop-up blocker.",
        hire_conf_btn: "Back to Home",
        // Hire Me - Services
        service_landing_title: "Landing Page",
        service_landing_desc: "High conversion page focused on a single objective (sales, lead capture, etc). Persuasive and optimized design.",
        service_landing_inc1: "Exclusive Design",
        service_landing_inc2: "Basic Copywriting",
        service_landing_inc3: "Email Mkt Integration",
        service_landing_inc4: "Mobile Optimization",
        service_landing_exc1: "Domain and Hosting",
        service_landing_exc2: "Traffic Management",

        service_ecommerce_title: "Basic E-commerce",
        service_ecommerce_desc: "Complete online store for small businesses. Product, inventory, and payment management integrated.",
        service_ecommerce_inc1: "Up to 50 products",
        service_ecommerce_inc2: "PagSeguro/Stripe Integration",
        service_ecommerce_inc3: "Shipping Calculation",
        service_ecommerce_inc4: "Admin Panel",
        service_ecommerce_exc1: "Registration of all products",
        service_ecommerce_exc2: "Product photography",

        service_app_title: "Web Application",
        service_app_desc: "Complex web systems, dashboards, member areas, or custom SaaS tools.",
        service_app_inc1: "Database Architecture",
        service_app_inc2: "RESTful API",
        service_app_inc3: "React/Vue Frontend",
        service_app_inc4: "Admin Panel",
        service_app_exc1: "Native App (iOS/Android)",

        service_ux_title: "UX/UI Consulting",
        service_ux_desc: "Heuristic analysis, usability tests, or interface redesign to improve user experience.",
        service_ux_inc1: "Improvement Report",
        service_ux_inc2: "Suggestion Wireframes",
        service_ux_inc3: "Alignment Meeting",
        service_ux_exc1: "Implementation (Code)",

        service_mentor_title: "Audiovisual Mentorship",
        service_mentor_desc: "Career guidance, technical analysis, and direction of audiovisual projects.",
        service_mentor_inc1: "Portfolio/Reel Analysis",
        service_mentor_inc2: "Art Direction & Script",
        service_mentor_inc3: "Editing Feedback",
        service_mentor_exc1: "Development of complete projects",

        service_freelance_title: "Retainer Freelance",
        service_freelance_desc: "Monthly hours allocation for maintenance, small improvements, or continuous support on your projects.",
        service_freelance_inc1: "Priority support",
        service_freelance_inc2: "Hour report",
        service_freelance_inc3: "Preventive maintenance",
        service_freelance_exc1: "New large projects",

        hire_price_consult: "On Request",
        hire_price_hour: "R$ 300/h",
        hire_price_hour_mentor: "R$ 200/h",
        hire_price_monthly: "Monthly",
        hire_dead_variable: "Variable",
        hire_dead_hour: "Per hour",
        hire_dead_session: "1h Session",
        hire_dead_recur: "Recurring",
        hire_day_unit: "business days",

        // New Services (v2.1)
        service_speed_landing_title: "\"Speed-First\" Landing Page",
        service_speed_landing_desc: "Instant loading (< 1s). Surgical optimization for Quality Score (Google/Facebook Ads).",
        service_speed_landing_inc1: "Semantic HTML5 + Modern CSS3",
        service_speed_landing_inc2: "Zero dependencies (Vanilla JS)",
        service_speed_landing_inc3: "Rigorous Design approval",
        service_speed_landing_inc4: "Non-negotiable performance",
        service_speed_landing_exc1: "Structural changes after approval",

        service_storefront_title: "Custom Storefront",
        service_storefront_desc: "An immersive showcase, far from the rigidity of \"ready-made stores\". Navigation fluidity of giants.",
        service_storefront_inc1: "Vanilla JS Frontend",
        service_storefront_inc2: "API/SDK Integration",
        service_storefront_inc3: "Visual Storefront & Cart",
        service_storefront_inc4: "Exclusive brand identity",
        service_storefront_exc1: "Checkout (third-party secure env)",

        service_platform_setup_title: "Platform Setup",
        service_platform_setup_desc: "Advanced Nuvemshop/Shopify configuration + Custom CSS. Inseparable from the photography package.",
        service_platform_setup_inc1: "Nuvemshop/Shopify Configuration",
        service_platform_setup_inc2: "Custom CSS",
        service_platform_setup_inc3: "Elite visual identity",
        service_platform_setup_exc1: "Standard templates without customization",

        service_visual_asset_title: "\"Visual Asset\" Package",
        service_visual_asset_desc: "The raw material needed for the site to work. Product Photography and Institutional Video.",
        service_visual_asset_inc1: "Product Photography (Still/Ambient)",
        service_visual_asset_inc2: "Institutional Video/Reels",
        service_visual_asset_inc3: "Art Direction",
        service_visual_asset_exc1: "Amateur material",

        hire_price_landing: "R$ 2.500 - R$ 3.500",
        hire_price_storefront: "R$ 5.000 - R$ 7.000",
        hire_price_setup: "R$ 2.000 + Setup",
        hire_price_visual: "R$ 3.500+"
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
        tab_lab: "El Laboratorio",
        tab_insights: "Insight Log",
        tab_insights_title: "Insight Log",
        tab_insights_desc: "Análisis y reflexiones sobre mercado, tecnología y ventas.",
        // Portfolio
        nav_portfolio: "Portafolio",
        portfolio_title: "Portafolio",
        portfolio_subtitle: "Escaparate de Proyectos Inmobiliarios y Digitales",
        btn_details: "Ver Detalles →",
        btn_soon: "Próximamente",
        // Playground & UI labels
        nav_resume: "Currículum",
        nav_playground: "Playground",
        nav_hire: "Contrátame",
        mobile_menu_open: "Menú",
        mobile_menu_close: "Cerrar",
        playground_title: "Playground",
        playground_role: "Área de Pruebas y Experimentación",
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
        hire_back: "← Volver",
        hire_invest: "Inversión",
        hire_deadline: "Plazo Estimado",
        hire_included: "Qué está incluido",
        hire_not_included: "Qué no está incluido",
        hire_btn_budget: "Solicitar Presupuesto",
        hire_btn_schedule: "Ver Horarios",
        hire_form_title: "Formulario de Calificación",
        hire_form_name: "Tu Nombre",
        hire_form_budget: "¿Cuál es el presupuesto disponible?",
        hire_form_deadline: "¿Cuál es el plazo ideal?",
        hire_form_link: "¿Enlace del proyecto actual (si hay)?",
        hire_form_submit: "Enviar vía WhatsApp",
        hire_schedule_title: "Elige una Fecha",
        hire_schedule_desc: "Selecciona un día de preferencia. Confirmaremos el horario exacto por WhatsApp.",
        hire_schedule_next: "Próximos Días Hábiles",
        hire_schedule_period: "Período Preferido",
        hire_period_morning: "Mañana",
        hire_period_afternoon: "Tarde",
        hire_period_night: "Noche",
        hire_conf_title: "¡Solicitud Iniciada!",
        hire_conf_desc: "Has sido redirigido a WhatsApp. Si la ventana no se abrió, verifica tu bloqueador de ventanas emergentes.",
        hire_conf_btn: "Volver al Inicio",
        // Hire Me - Services
        service_landing_title: "Landing Page",
        service_landing_desc: "Página de alta conversión enfocada en un único objetivo (venta, captura de leads, etc). Diseño persuasivo y optimizado.",
        service_landing_inc1: "Diseño Exclusivo",
        service_landing_inc2: "Copywriting Básico",
        service_landing_inc3: "Integración con Email Mkt",
        service_landing_inc4: "Optimización Móvil",
        service_landing_exc1: "Dominio y Alojamiento",
        service_landing_exc2: "Gestión de Tráfico",

        service_ecommerce_title: "E-commerce Básico",
        service_ecommerce_desc: "Tienda virtual completa para pequeños negocios. Gestión de productos, inventario y pagos integrados.",
        service_ecommerce_inc1: "Hasta 50 productos",
        service_ecommerce_inc2: "Integración PagSeguro/Stripe",
        service_ecommerce_inc3: "Cálculo de Envío",
        service_ecommerce_inc4: "Panel Administrativo",
        service_ecommerce_exc1: "Registro de todos los productos",
        service_ecommerce_exc2: "Fotografía de productos",

        service_app_title: "Aplicación Web",
        service_app_desc: "Sistemas web complejos, paneles de control, áreas de miembros o herramientas SaaS personalizadas.",
        service_app_inc1: "Arquitectura de Base de Datos",
        service_app_inc2: "API RESTful",
        service_app_inc3: "Frontend React/Vue",
        service_app_inc4: "Panel Admin",
        service_app_exc1: "App Nativo (iOS/Android)",

        service_ux_title: "Consultoría UX/UI",
        service_ux_desc: "Análisis heurístico, pruebas de usabilidad o rediseño de interfaces para mejorar la experiencia del usuario.",
        service_ux_inc1: "Informe de Mejoras",
        service_ux_inc2: "Wireframes de Sugerencia",
        service_ux_inc3: "Reunión de Alineación",
        service_ux_exc1: "Implementación (Código)",

        service_mentor_title: "Mentoría Audiovisual",
        service_mentor_desc: "Orientación de carrera, análisis técnico y dirección de proyectos audiovisuales.",
        service_mentor_inc1: "Análisis de Portafolio/Reel",
        service_mentor_inc2: "Dirección de Arte y Guion",
        service_mentor_inc3: "Feedback de Edición",
        service_mentor_exc1: "Desarrollo de proyectos completos",

        service_freelance_title: "Freelance Fijo",
        service_freelance_desc: "Asignación de horas mensuales para mantenimiento, pequeñas mejoras o soporte continuo en sus proyectos.",
        service_freelance_inc1: "Prioridad en la atención",
        service_freelance_inc2: "Informe de horas",
        service_freelance_inc3: "Mantenimiento preventivo",
        service_freelance_exc1: "Nuevos proyectos grandes",

        hire_price_consult: "A Consultar",
        hire_price_hour: "R$ 300/h",
        hire_price_hour_mentor: "R$ 200/h",
        hire_price_monthly: "Mensual",
        hire_dead_variable: "Variable",
        hire_dead_hour: "Por hora",
        hire_dead_session: "Sesión 1h",
        hire_dead_recur: "Recurrente",
        hire_day_unit: "días hábiles",

        // New Services (v2.1)
        service_speed_landing_title: "Landing Page \"Speed-First\"",
        service_speed_landing_desc: "Carga instantánea (< 1s). Optimización quirúrgica para el Nivel de Calidad (Google/Facebook Ads).",
        service_speed_landing_inc1: "HTML5 Semántico + CSS3 Moderno",
        service_speed_landing_inc2: "Cero dependencias (Vanilla JS)",
        service_speed_landing_inc3: "Aprobación rigurosa de Diseño",
        service_speed_landing_inc4: "Rendimiento no negociable",
        service_speed_landing_exc1: "Cambios estructurales post-aprobación",

        service_storefront_title: "Storefront Personalizado",
        service_storefront_desc: "Una vitrina inmersiva, lejos de la rigidez de las \"tiendas listas\". Fluidez de navegación de gigantes.",
        service_storefront_inc1: "Frontend Vanilla JS",
        service_storefront_inc2: "Integración API/SDK",
        service_storefront_inc3: "Vitrina y Carrito Visual",
        service_storefront_inc4: "Identidad de marca exclusiva",
        service_storefront_exc1: "Checkout (entorno seguro de terceros)",

        service_platform_setup_title: "Configuración de Plataforma",
        service_platform_setup_desc: "Configuración avanzada de Nuvemshop/Shopify + CSS Personalizado. Inseparable del paquete de fotografía.",
        service_platform_setup_inc1: "Configuración Nuvemshop/Shopify",
        service_platform_setup_inc2: "CSS Personalizado",
        service_platform_setup_inc3: "Identidad visual de élite",
        service_platform_setup_exc1: "Plantillas estándar sin personalización",

        service_visual_asset_title: "Paquete \"Visual Asset\"",
        service_visual_asset_desc: "La materia prima necesaria para que el sitio funcione. Fotografía de Producto y Video Institucional.",
        service_visual_asset_inc1: "Fotografía de Producto (Still/Ambientada)",
        service_visual_asset_inc2: "Video Institucional/Reels",
        service_visual_asset_inc3: "Dirección de Arte",
        service_visual_asset_exc1: "Material amateur",

        hire_price_landing: "R$ 2.500 - R$ 3.500",
        hire_price_storefront: "R$ 5.000 - R$ 7.000",
        hire_price_setup: "R$ 2.000 + Setup",
        hire_price_visual: "R$ 3.500+"
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
        'portfolio': document.getElementById('portfolio-view'),
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
