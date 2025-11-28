# JULES AI: PROTOCOLOS DE PROMPT & ENGENHARIA
**Versão:** 4.1 (Reorganized & Consolidated)
**Foco:** Abrangência Total, Granularidade Técnica e Automação Cognitiva.

---

## 1. FUNDAMENTOS DE ENGENHARIA DE PROMPT

A eficácia do agente é proporcional à precisão da instrução. Adote a postura de "Arquiteto de Intenção".

### Os 3 Pilares da Instrução Robusta
1.  **Contexto Explícito:** Defina o *porquê*, o *para quem* e o *cenário*.
2.  **Restrições Rígidas:** Delimite o escopo negativo (o que *não* fazer) e limites técnicos.
3.  **Persona Técnica:** Atribua uma especialidade de nicho (ex: "Engenheiro de Segurança Ofensiva", "Arquiteto de Soluções AWS").

### Framework de Refinamento (Níveis de Maturidade)

| Nível | Exemplo de Prompt | Resultado Esperado |
| :--- | :--- | :--- |
| **L1 (Básico)** | `// Crie um botão.` | Código genérico, inútil para produção. |
| **L2 (Contextual)** | `// Crie um botão React com TypeScript.` | Funcional, mas ignora padrões do projeto. |
| **L3 (Master)** | `// Implemente componente 'Button' polimórfico em React/TS. Consuma tokens do tema (colors.ts). Suporte variantes (primary, ghost), tamanhos e estados (loading/disabled). Garanta conformidade WCAG 2.1 AA.` | Código de produção, tipado, acessível e integrado. |

---

## 2. META-PROMPTS (OTIMIZAÇÃO DE AGENTE)
*Comandos para manipular o comportamento, a lógica e a saída do próprio agente.*

### Refinamento e Recursividade
- **Auto-Aprimoramento de Prompt (Recursivo):**
  > `// Atue como Engenheiro de Prompt Sênior. Analise minha solicitação: [Inserir Solicitação]. Reescreva-a aplicando técnicas de Chain-of-Thought e Few-Shot Prompting para maximizar a qualidade do output de um LLM de codificação. Não execute, apenas refine.`

- **Análise de Brechas (Gap Analysis):**
  > `// Analise o código gerado versus a solicitação original. Liste requisitos implícitos ignorados, "Edge Cases" não cobertos e possíveis regressões em funcionalidades existentes.`

- **Compressão de Contexto (State Management):**
  > `// Resuma o estado atual deste módulo em um parágrafo denso e 3 bullet points cruciais. O objetivo é colar esse resumo em uma nova janela de chat para restaurar o contexto arquitetural imediatamente.`

### Cognição & Didática
- **Cadeia de Pensamento (Chain of Thought):**
  > `// Antes de gerar o código, descreva seu raciocínio passo-a-passo. Quebre o problema em sub-problemas, explique a solução para cada um e só então escreva a implementação final.`

- **Técnica Feynman (Simplificação Extrema):**
  > `// Explique o funcionamento deste algoritmo complexo utilizando apenas analogias físicas e vocabulário de ensino fundamental. Foco na intuição, não na sintaxe.`

- **Método Socrático (Mentoria):**
  > `// Não me dê a resposta. Faça perguntas que me guiem a encontrar o erro neste código por conta própria. Aponte a direção, mas deixe-me caminhar.`

---

## 3. ESTRATÉGIA, PRODUTO & NEGÓCIOS (PRE-CODE)
*Validação de hipóteses, inteligência de mercado e arquitetura de solução.*

### Inteligência de Mercado
- **Engenharia Reversa de Concorrente:**
  > `// Atue como Product Manager. Analise [URL/Produto]. Extraia: 1. Proposta de Valor (UVP). 2. Stack Tecnológica provável (Wappalyzer mental). 3. Três pontos de fricção na UX que podemos explorar como diferencial.`

- **Advogado do Diabo (Risk Assessment):**
  > `// Atue como Investidor de Risco Avesso a Perdas. Destrua a ideia [Descrição da Feature]. Aponte falhas lógicas, riscos de escalabilidade, custos de manutenção e barreiras de entrada ignoradas.`

- **Geração de Personas (Dados Sintéticos):**
  > `// Gere 3 perfis técnicos de usuários para [Produto]. Defina: Cargo, "Job to be Done" (Framework JTBD), Dores Técnicas, Objeções de Adoção e Critérios de Sucesso.`

### Arquitetura & Decisão
- **Matriz de Decisão Tecnológica:**
  > `// Crie uma matriz comparativa entre [Tech A], [Tech B] e [Tech C] para o contexto [Descrever Contexto]. Critérios: Curva de aprendizado, Performance (Runtime), Tamanho do Bundle e Ecossistema (Community Support).`

- **Diagrama de Fluxo de Dados (Mermaid):**
  > `// Gere um diagrama Mermaid (Sequence Diagram) descrevendo o fluxo de autenticação, desde o clique no botão "Login" até a emissão do JWT e redirecionamento, incluindo tratativas de erro 401/403.`

---

## 4. DESIGN SYSTEM, UI & UX
*Criação, padronização e refinamento visual.*

### Frontend & UI (Vibecoding)
- **Design System "On-the-Fly" (Tailwind):**
  > `// Atue como UI/UX Designer Sênior. Crie uma interface [Tipo: Dashboard/Landing] com estética [Estilo: Cyberpunk/Glassmorphism]. Use Tailwind CSS. Raciocínio: 1. Defina a paleta de cores e tipografia. 2. Estruture o layout (Grid/Flex). 3. Aplique os estilos. Priorize gradientes, sombras coloridas e bordas translúcidas. O layout deve ser responsivo e "Mobile-First".`

- **Tradução Visual (Texto -> UI):**
  > `// Atue como Frontend Developer. Converta esta descrição em HTML/CSS: "[Descrição]". Antes de codar, liste as propriedades CSS chave que você usará para atingir o efeito visual (ex: box-shadow layers, backdrop-filter). Gere o código fiel à descrição.`

- **Micro-Interações (Juice):**
  > `// Atue como Motion Designer. "Juice it up!" Adicione feedback visual a este componente. Planeje as animações: Entrada, Hover, Click, Feedback. Use CSS transitions para performance. Exemplo: 'transform: scale(0.98)' no click e 'fade-in-up' na entrada.`

### Padronização de Layout & UI
- **Auditoria e Unificação de Design System:**
  > `// Atue como Design Ops Lead. Analise os estilos do projeto. Identifique fragmentação (ex: 50 tons de cinza diferentes). Crie um plano de unificação: 1. Extrair Tokens (Cores, Tipografia, Espaços). 2. Mapear componentes legados para os novos tokens. 3. Definir estratégia de migração gradual.`

- **Normalização de Hierarquia Visual:**
  > `// Atue como UI Designer. Analise a página atual. Verifique a "Escaneabilidade". Problema: Tudo parece ter a mesma importância. Solução: 1. Aumente o contraste de tamanho entre H1, H2 e Body. 2. Use peso de fonte e cor para diferenciar ações Primárias de Secundárias.`

- **Padronização de Breakpoints (Responsividade):**
  > `// Atue como Frontend Architect. Analise o CSS. Identifique "Magic Numbers" em media queries. Defina um sistema de breakpoints padrão (Mobile: <640px, Tablet: <1024px, Desktop: >1024px). Refatore o CSS para usar Mixins ou Variáveis baseadas nesses limites.`

- **Gestão de Z-Index (Camadas):**
  > `// Atue como CSS Specialist. Resolva os conflitos de empilhamento (z-index wars). Crie um sistema de camadas semântico: 1. Base (0). 2. Dropdowns (100). 3. Sticky Headers (200). 4. Modais/Overlays (300). 5. Toasts/Tooltips (400). Substitua valores arbitrários por variáveis.`

### Modificação de Estilo & Temas
- **Migração de Estilo (Re-skinning):**
  > `// Atue como Theme Specialist. Planeje a migração visual de [Estilo A] para [Estilo B]. Estratégia: 1. Mapear variáveis globais afetadas. 2. Criar novo arquivo de tema (theme-b.css). 3. Ajustar border-radius, sombras e tipografia. Mantenha o layout estrutural intacto.`

- **Ajuste Fino de CSS (Pixel Perfect):**
  > `// Atue como "Pixel Perfect" Obsessive. Compare o componente implementado com o Design. Identifique desalinhamentos sutis (1-2px). Ajuste Flexbox/Grid e Paddings para garantir alinhamento óptico perfeito. Verifique consistência de ritmo vertical.`

- **Extração de Paleta de Cores (Tokenização):**
  > `// Atue como Design System Engineer. Varra o CSS por valores Hex/RGB hardcoded. Extraia-os para Custom Properties (--color-*). Nomeie por função semântica (ex: --bg-primary, --text-muted) e não por aparência (ex: --blue-500).`

- **Conversão para Unidades Relativas (Acessibilidade):**
  > `// Atue como A11y Advocate. Refatore o CSS. Substitua unidades absolutas (px) por relativas (rem/em) para fontes e espaçamentos. Objetivo: Permitir que o usuário escale a interface via configurações do navegador sem quebrar o layout.`

### Consistência de UX
- **Injeção de Padrões de UX (Global):**
  > `// Atue como UX Architect. Analise a aplicação em busca de "Anti-Patterns". Identifique falta de Feedback de Estado (Loading/Empty/Error). Proponha um plano de padronização: 1. Componente de Loading Universal. 2. Empty States ilustrativos. 3. Tratamento de erro amigável.`

- **Padronização de Micro-interações:**
  > `// Atue como Interaction Designer. Defina a "Física" da interface. Regra: Toda ação deve ter reação. 1. Botões: Scale down no click. 2. Modais: Fade in + Slide up. 3. Listas: Staggered animation na carga. Implemente classes utilitárias para isso.`

- **Auditoria de Navegação por Teclado:**
  > `// Atue como Accessibility Tester. Navegue pela app usando apenas TAB. Identifique "Focus Traps" e elementos sem foco visível. Solução: Implemente um estilo global de ':focus-visible' (outline robusto) e garanta ordem lógica de tabulação.`

- **Padronização de Feedback de Formulário:**
  > `// Atue como UX Writer/Designer. Padronize a validação de formulários. Regra: 1. Validação Inline (onBlur). 2. Mensagens de erro claras e próximas ao campo. 3. Cores semânticas (Vermelho=Erro, Verde=Sucesso). 4. Botão de submit desabilitado (ou com loading) durante envio.`

- **Unificação de Feedback de Erro:**
  > `// Atue como UX Strategist. Mapeie os tipos de erro da aplicação. Defina canais de feedback: 1. Erro Crítico (Sistema fora) -> Modal Bloqueante. 2. Erro de Fluxo -> Toast/Snackbar. 3. Erro de Input -> Inline Text. Refatore para consistência.`

- **Consistência de Microcopy (Tom e Voz):**
  > `// Atue como Content Strategist. Audite os textos da interface (Botões, Labels, Modais). Identifique inconsistências (ex: "Salvar" vs "Enviar"). Defina um Guia de Tom e Voz (ex: Amigável, Direto). Reescreva os textos para seguir o padrão.`

- **Padrões de Loading (Skeleton vs Spinner):**
  > `// Atue como Frontend Performance Expert. Defina estratégia de Loading. Regra: 1. Carregamento de Página/Bloco -> Skeleton Screen (percepção de velocidade). 2. Ação de Botão -> Spinner interno. Substitua loaders genéricos por essa abordagem contextual.`

### Implementação de Features de UX
- **Modo Escuro (Dark Mode System):**
  > `// Atue como UI Engineer. Implemente Dark Mode. Requisitos: 1. Media Query (prefers-color-scheme). 2. Toggle manual com persistência (localStorage). 3. Variáveis CSS semânticas (ex: --bg-surface). 4. Script de inicialização para evitar "Flash of Incorrect Theme" (FOUC).`

- **Atalhos de Teclado (Power Users):**
  > `// Atue como Accessibility Dev. Implemente navegação por teclado (Hotkeys). Plano: 1. Mapear ações frequentes (Busca, Salvar, Fechar). 2. Criar Listener global. 3. Exibir dicas visuais (Tooltips com o atalho). Ex: 'Ctrl+K' abre a Command Palette.`

- **Breadcrumbs Dinâmicos:**
  > `// Atue como Information Architect. Implemente Breadcrumbs. Lógica: 1. Parsear a URL atual. 2. Mapear segmentos de rota para nomes legíveis. 3. Gerar links hierárquicos. Objetivo: Permitir que o usuário saiba onde está e volte níveis facilmente.`

- **Sistema de 'Undo/Redo' (Desfazer):**
  > `// Atue como UX Interaction Designer. Substitua confirmações modais ("Tem certeza?") por padrão "Undo". Fluxo: 1. Usuário deleta item. 2. Item some visualmente. 3. Toast aparece: "Item deletado. [Desfazer]". 4. Se clicar, restaura estado. Se timeout, confirma deleção.`

### Design Handoff & Fidelidade
- **Figma to Code Logic (Pixel Perfect):**
  > `// Atue como Frontend Developer Detalhista. Compare o Design (Imagem/Figma) com o Código Atual. Liste discrepâncias visuais: 1. Espaçamentos (Padding/Margin). 2. Tipografia (Weight/Size/Line-height). 3. Cores e Sombras. Gere o CSS Delta para corrigir.`

---

## 5. ENGENHARIA DE COMPONENTES (MEGA-PROMPTS)
*Caixa de Ferramentas para Componentes "First-Class" em Vanilla JS + Alta Performance.*

### 1. A GÊNESE: Criação de Componente Robusto
*Use quando a tela está em branco. Força estrutura antes da estética.*
> **// PROMPT: CRIAÇÃO DE COMPONENTE "FIRST-CLASS"**
>
> **Contexto:** Estou construindo uma aplicação Web focada em Performance (Vanilla JS). Preciso criar um componente de UI reutilizável: **[NOME DO COMPONENTE, ex: Header Principal / Sidebar de Navegação]**.
>
> **Atue como:** Arquiteto de Frontend Sênior & Especialista em Acessibilidade (WCAG).
>
> **Instruções de Execução:**
> 1.  **Estrutura Semântica (HTML5):** Escreva o HTML usando as tags mais semânticas possíveis (`<header>`, `<nav>`, `<aside>`, `<ul>`). Use nomenclatura de classes consistente (BEM ou Utility-First, prefiro: **[INSERIR PREFERÊNCIA: BEM / Kebab-case]**).
> 2.  **Estilização (CSS Moderno):**
>     * Use CSS Grid para o layout macro e Flexbox para alinhamentos internos.
>     * **Obrigatório:** Use Variáveis CSS (Custom Properties) para cores, espaçamentos e fontes. Não use "números mágicos" ou cores hardcoded.
>     * Mobile-First: O CSS base deve ser para telas pequenas. Use `@media (min-width)` para desktop.
> 3.  **Comportamento (Vanilla JS):**
>     * Se houver interatividade (ex: Toggle Menu), escreva uma classe JS ou Módulo ES6.
>     * Não anexe eventos no HTML (`onclick="..."`). Use `addEventListener`.
>     * Implemente "Event Delegation" se houver listas de itens clicáveis.
> 4.  **Acessibilidade (Non-Negotiable):**
>     * Inclua atributos ARIA onde necessário (ex: `aria-expanded`, `aria-label`, `role`).
>     * Garanta que o componente seja navegável via Teclado (Tab index, Focus ring visível).
>
> **Saída Esperada:** Entregue 3 blocos de código separados (HTML, CSS, JS) e uma breve explicação de como instanciar/usar este componente.

### 2. A AUDITORIA: Validação de Boas Práticas
*Use após criar para garantir QA Técnico.*
> **// PROMPT: AUDITORIA DE COMPONENTE (QA TÉCNICO)**
>
> **Contexto:** Tenho este código de componente **[COLAR CÓDIGO HTML/CSS/JS]**.
>
> **Atue como:** Auditor de QA e Especialista em A11y (Acessibilidade).
>
> **Missão:** Destrua este código em busca de falhas. Não seja gentil.
>
> **Checklist de Verificação:**
> 1.  **Semântica:** Estou usando `<div>` onde deveria usar `<button>`, `<a>` ou `<section>`?
> 2.  **Acessibilidade (WCAG 2.1 AA):**
>     * O contraste de cores está adequado?
>     * Leitores de tela conseguem entender o estado atual (aberto/fechado)?
>     * Existe "Focus Trap" em modais ou menus mobile?
> 3.  **Performance CSS:** Estou usando propriedades que forçam "Layout Recalculation" (como `top`/`left` em animações) em vez de `transform`? O uso de seletores é eficiente?
> 4.  **Manutenibilidade:** Existem valores hardcoded que deveriam ser variáveis? O CSS está vazando para fora do componente (falta de escopo)?
>
> **Saída Esperada:** Uma lista de "Violações Encontradas" classificada por gravidade (Crítica/Média/Baixa) e, na sequência, o **Código Refatorado** corrigindo todos os pontos.

### 3. A PADRONIZAÇÃO: Refatoração para Design System
*Use para garantir consistência global.*
> **// PROMPT: REFATORAÇÃO PARA DESIGN SYSTEM (TOKENIZAÇÃO)**
>
> **Contexto:** Tenho este componente funcional **[NOME]**, mas ele está visualmente "hardcoded" e inconsistente com o resto do site.
>
> **Entrada de Dados:**
> * **Código do Componente:** [COLAR CÓDIGO]
> * **Meus Tokens Globais (Exemplo):**
>     * Cores: `--color-primary`, `--color-bg`, `--color-text`
>     * Espaço: `--space-sm`, `--space-md`, `--space-lg`
>     * Fonte: `--font-base`, `--font-heading`
>
> **Atue como:** Engenheiro de Design Systems.
>
> **Instruções:**
> 1.  **Tokenização:** Substitua todos os valores hexadecimais, pixels e fontes fixas pelas Variáveis CSS fornecidas acima.
> 2.  **Padronização de Classes:** Renomeie as classes CSS para seguir estritamente o padrão: `.componente__elemento--modificador` (BEM).
> 3.  **Limpeza:** Remova qualquer estilo que seja "reset" ou global (ex: `box-sizing`, `font-family` no body) e mantenha apenas o estilo específico do componente.
>
> **Objetivo:** Quero poder mudar o arquivo `variables.css` e este componente se adaptar automaticamente ao novo tema.

### 4. O POLIMENTO: Melhoria Visual e Micro-interações
*Use para "Juice it up" e dar vida ao componente.*
> **// PROMPT: ESTÉTICA & MICRO-INTERAÇÕES (JUICE IT UP)**
>
> **Contexto:** Este componente **[NOME]** funciona, mas está "morto" e sem graça. Preciso aumentar a percepção de qualidade (Look & Feel).
>
> **Atue como:** Motion Designer e Frontend Developer Criativo.
>
> **Instruções:**
> 1.  **Feedback de Estado:** Adicione estilos visuais claros para `:hover`, `:active` e `:focus-visible`.
> 2.  **Micro-interações:**
>     * Adicione transições suaves (`transition`) para mudanças de cor e fundo.
>     * Se for um botão ou card, adicione um efeito sutil de `transform: translateY(-2px)` e sombra no hover para dar profundidade.
> 3.  **Performance de Animação:** Use APENAS `opacity` e `transform` para animações. Não anime `width`, `height` ou `margin`.
> 4.  **Toque Moderno:** Sugira o uso de `backdrop-filter` (glassmorphism) ou sombras coloridas suaves (`box-shadow`) se fizer sentido com a estética atual.
>
> **Saída:** O CSS atualizado com comentários explicando onde a "mágica" acontece.

---

## 6. DESENVOLVIMENTO BACKEND & ARQUITETURA
*Lógica de servidor, scripts, refatoração e estrutura de código.*

### Backend & Lógica
- **API RESTful Boilerplate:**
  > `// Atue como Backend Architect. Crie um controller [Node/Python] para a entidade [Nome]. Implemente CRUD completo. Chain-of-Thought: 1. Defina o Schema/Model. 2. Planeje as rotas e verbos HTTP. 3. Implemente a lógica com validação e tratamento de erros (Try/Catch).`

- **Otimização de Query SQL:**
  > `// Atue como DBA. Analise esta query SQL. Identifique gargalos de performance. Explique o Plano de Execução (Explain Plan) teórico. Reescreva utilizando JOINs otimizados e sugira índices compostos necessários.`

- **Gerador de Regex:**
  > `// Atue como Regex Expert. Crie uma Regex robusta para validar [Padrão]. Explique a lógica de cada token/grupo de captura. Forneça uma tabela de casos de teste: 3 positivos (match) e 3 negativos (no-match).`

### Scripts & Automação
- **Automação de Arquivos (Node/Python):**
  > `// Escreva um script para varrer o diretório [Dir], encontrar arquivos [Extensão] modificados há mais de [X] dias e movê-los para uma pasta de arquivamento compactada (ZIP).`

- **Web Scraping (Ético):**
  > `// Crie um script Puppeteer/Selenium para extrair [Dados] de [Site]. Inclua tratativa de paginação, espera por seletores dinâmicos e delay aleatório para evitar bloqueio (Rate Limiting).`

### Análise Estrutural & Refatoração
- **Análise Estrutural e Sugestão de Arquitetura:**
  > `// Atue como Arquiteto de Software. Analise a estrutura atual. Identifique padrões (Monólito vs Modular). Proponha uma reorganização de pastas baseada em Domínio ou Features. Justifique cada mudança com foco em escalabilidade e desacoplamento.`

- **Refatoração de Monólito para Modular:**
  > `// Atue como Senior Developer. Refatore este arquivo monolítico. Plano: 1. Mapeie as responsabilidades. 2. Crie interfaces/contratos. 3. Extraia para módulos coesos (CSS, JS, HTML separados). Apresente a nova estrutura de arquivos antes do código.`

- **Detecção de Código Morto (Dead Code):**
  > `// Atue como Code Janitor. Varra o projeto estaticamente. Liste classes CSS e funções JS não referenciadas. Confirme se não há uso dinâmico. Gere um relatório de itens seguros para remoção.`

- **Extração de Componentes Repetidos (DRY):**
  > `// Atue como Lead Dev. Analise o código em busca de duplicação (DRY). Identifique padrões de UI/Lógica repetidos. Proponha a criação de componentes reutilizáveis. Mostre o 'Antes' e 'Depois' da refatoração.`

---

## 7. QUALIDADE, SEGURANÇA & OPERAÇÃO
*Garantia de robustez, confiabilidade e manutenção.*

### Debugging & Performance
- **Análise de Complexidade (Big O):**
  > `// Atue como Computer Scientist. Analise a complexidade (Big O) desta função. Passo-a-passo: 1. Identifique loops e recursão. 2. Calcule o custo de cada operação. 3. Determine o pior caso. Proponha otimização para O(n) ou O(log n) usando estruturas de dados adequadas.`

- **Caça a Memory Leaks (JS):**
  > `// Atue como Performance Engineer. Analise este código. Rastreie o ciclo de vida dos objetos. Identifique Event Listeners não removidos, Intervalos órfãos ou Closures que retêm referências. Explique o impacto no Heap e corrija.`

- **Auditoria de Acessibilidade (a11y):**
  > `// Atue como Especialista em Acessibilidade (WCAG). Audite este HTML. Verifique: Contraste, Semântica, ARIA e Navegação por Teclado. Para cada violação, cite o critério WCAG correspondente e a correção.`

- **Análise de Bundle (Webpack/Vite):**
  > `// Analise o output de build (stats.json) ou a estrutura de imports. Identifique chunks gigantes (>500kb) e dependências duplicadas. Sugira pontos de 'Code Splitting' (Lazy Loading) para rotas ou componentes pesados para melhorar o Time-to-Interactive.`

- **Otimização de Renderização (React/Vue):**
  > `// Analise este componente. Identifique props ou estados que causam re-renderizações desnecessárias (objetos/funções recriados a cada render). Sugira uso de useMemo/useCallback ou React.memo onde apropriado para estabilizar a referência.`

### Testes & Segurança
- **Geração de Testes Unitários (Jest/Pytest):**
  > `// Atue como QA Engineer. Escreva testes unitários para [Função]. Estratégia: 1. Defina os casos de teste (Caminho Feliz, Entradas Inválidas, Limites). 2. Configure Mocks para I/O. 3. Implemente as asserções. Garanta alta cobertura.`

- **Auditoria de Segurança (AppSec):**
  > `// Atue como Security Researcher. Realize um Code Review focado em segurança (OWASP Top 10). Procure por: XSS, SQL Injection, Deserialização Insegura e Secrets. Explique o vetor de ataque e a mitigação.`

- **Testes End-to-End (Cypress/Playwright):**
  > `// Escreva um cenário de teste E2E para o fluxo de [Fluxo: Checkout/Login]. Cubra: Navegação inicial, Preenchimento de Form, Clique em CTA e Validação da URL final ou Mensagem de Sucesso. Inclua screenshots em caso de falha.`

- **Auditoria de Dependências (Supply Chain):**
  > `// Analise o 'package.json'. Identifique pacotes obsoletos ou com histórico de vulnerabilidades conhecidas. Sugira atualizações seguras (minor/patch) e alternativas para pacotes abandonados.`

### Observabilidade & Monitoramento
- **Logs Estruturados (JSON):**
  > `// Refatore os 'console.log' espalhados. Crie um Logger utilitário que formate a saída em JSON com: Timestamp, Nível (INFO/ERROR), Contexto (Módulo/Função) e Mensagem. Isso facilitará a ingestão em ferramentas de monitoramento.`

- **Health Check Endpoint:**
  > `// Crie uma rota '/health' ou '/status' para a API. Ela deve retornar 200 OK se a aplicação estiver viva, e incluir no corpo o status das conexões vitais (Banco de Dados, Redis, APIs Externas) para monitoramento de uptime.`

---

## 8. DEVOPS & INFRAESTRUTURA
*Deploy, CI/CD e Containerização.*

- **Dockerfile Otimizado:**
  > `// Atue como DevOps Engineer. Crie um Dockerfile Multi-Stage para [Node/Python]. Chain-of-Thought: 1. Base Image (Alpine). 2. Build Stage (Instalação de deps + Compilação). 3. Production Stage (Cópia apenas dos artefatos + Remoção de deps de dev). 4. Segurança (Usuário não-root).`

- **GitHub Actions (CI/CD):**
  > `// Atue como CI/CD Specialist. Gere um workflow do GitHub Actions. Pipeline: 1. Trigger (Push/PR). 2. Setup (Cache de deps). 3. Quality Gate (Lint + Testes Unitários). 4. Build. 5. Deploy (apenas na main). Se falhar em qualquer etapa, bloqueie.`

- **Nginx Reverse Proxy:**
  > `// Atue como SysAdmin. Gere configuração Nginx para servir esta aplicação. Requisitos: 1. Redirecionamento forçado HTTP->HTTPS. 2. Otimização (Gzip/Brotli). 3. Caching de estáticos (Long-term caching). 4. Hardening (Headers de segurança: HSTS, CSP, X-Frame).`

---

## 9. DADOS & ANALYTICS
*Manipulação, análise e visualização de dados.*

- **Análise Exploratória (Pandas):**
  > `// Atue como Data Scientist. Tenho um CSV com colunas [Colunas]. Gere código Python (Pandas). Plano: 1. Data Cleaning (Tratar nulos/duplicados). 2. Feature Engineering (Criar novas colunas derivadas). 3. Agregação (Groupby + Sum/Mean). 4. Cálculo de KPI (MoM Growth).`

- **Visualização de Dados (D3/Chart.js):**
  > `// Atue como Data Visualization Expert. Crie um gráfico [Tipo] usando [Lib]. Dados: [JSON]. Requisitos UX: 1. Tooltips informativos no hover. 2. Eixos legíveis e formatados. 3. Paleta de cores acessível (Colorblind-safe). 4. Responsividade.`

- **SQL para Business Intelligence:**
  > `// Atue como BI Analyst. Escreva uma query SQL para calcular o LTV (Lifetime Value). Lógica: 1. Unir tabelas Users/Orders. 2. Calcular receita total por usuário. 3. Agrupar por coorte (mês de cadastro). 4. Retornar média de LTV por coorte.`

---

## 10. GESTÃO, DOCUMENTAÇÃO & SOFT SKILLS
*Documentação, gestão de projetos, aprendizado e comunicação.*

### Documentação Viva & Engenharia de Conhecimento
- **Auto-Doc (Técnico):**
  > `// Atue como Technical Writer. Analise este módulo. Gere documentação JSDoc/Docstring. Padrão: 1. Descrição do propósito. 2. Parâmetros (Tipos e Restrições). 3. Retorno. 4. Exemplo de uso prático. Crie também um README.md resumindo a arquitetura.`

- **Manual do Usuário (Final):**
  > `// Atue como Customer Success. Escreva um Guia Rápido para o usuário final sobre esta funcionalidade. Linguagem: Simples, sem tecniquês. Estrutura: "Como [Realizar Tarefa] em 3 passos". Inclua dicas de "Troubleshooting" básico.`

### Gestão de Projeto & Estimativa
- **Estimativa PERT (Anti-Prejuízo):**
  > `// Atue como Tech Lead Sênior. Analise a feature [Descrição]. Decomponha em tarefas (WBS). Para cada tarefa, estime: Otimista (O), Pessimista (P), Provável (M). Calcule PERT = (O + 4M + P) / 6. Adicione 20% de margem de risco.`

- **Definição de Pronto (DoD):**
  > `// Atue como Agile Coach. Defina o "Definition of Done" para esta tarefa. Checklist: 1. Código compilando? 2. Testes passando? 3. Code Review aprovado? 4. Critérios de aceitação de UX atendidos? 5. Documentação atualizada? Nada sobe sem isso.`

### Aprendizado Acelerado & Mentor Híbrido
- **Explain Like I'm Junior (Conceitual):**
  > `// Atue como Mentor Sênior. Explique a solução implementada. Use a Técnica Feynman: 1. Analogia do mundo real. 2. Explicação técnica simplificada. 3. Por que escolhemos isso e não a alternativa X? Foco em transferir conhecimento, não apenas entregar código.`

- **Plano de Estudo JIT (Just-in-Time):**
  > `// Atue como Career Coach. Analise o código que acabamos de escrever. Identifique 3 conceitos chave (ex: Promises, Flexbox, SQL Joins) que eu preciso dominar. Para cada um, sugira um exercício prático de 15 minutos para fixação.`

### Gestão de Crise & SRE
- **Protocolo de Triagem (War Room):**
  > `// Atue como SRE Commander. Estamos com um incidente: [Sintoma]. Guie a War Room. Protocolo: 1. Estancar o sangramento (Rollback? Restart?). 2. Isolamento (É Rede? Banco? Código?). 3. Análise de Logs/Métricas. 4. Correção. Não adivinhe, valide hipóteses.`

### Comunicação & Negociação
- **Negociação de Escopo (Scope Creep):**
  > `// Atue como Project Manager Sênior. Escreva um e-mail para um cliente pedindo alterações fora do escopo. Estrutura: 1. Agradecimento e Validação ("Ótima ideia"). 2. Choque de Realidade ("Isso impacta o prazo em X dias"). 3. Solução ("Podemos fazer na Fase 2 ou orçar extra agora"). Tom: Profissional, Firme e Colaborativo.`

- **Comunicado de Incidente (Post-Mortem):**
  > `// Atue como CTO. Escreva um Post-Mortem para stakeholders não-técnicos sobre [Incidente]. Seções: 1. O que aconteceu (Sintoma). 2. Por que aconteceu (Causa Raiz Técnica). 3. O que fizemos (Correção Imediata). 4. Como evitar recorrência (Plano de Ação). Tom: Transparente e Responsável.`

- **Cold Mail (Prospecção B2B):**
  > `// Atue como Copywriter B2B. Crie um Cold Mail para [Nicho]. Framework AIDA: 1. Atenção (Gancho personalizado sobre a empresa deles). 2. Interesse (Problema latente do setor). 3. Desejo (Nossa solução única). 4. Ação (CTA "Soft" para call rápida).`

---

## 11. CATÁLOGO DE SERVIÇOS (BOILERPLATES COMERCIAIS)
*Prompts prontos para execução dos serviços do portfólio "Me Contrate".*

### 🚀 Performance & Conversão
- **Landing Page "Speed-First" (<1s):**
  > `// Atue como Web Performance Engineer. Crie estrutura para Landing Page. Meta: Lighthouse 100/100. Restrições: 1. CSS Inline Crítico (Critical Path). 2. Imagens WebP/AVIF com Lazy-Load e dimensões explícitas. 3. Zero Blocking JS. 4. Fontes com 'font-display: swap'.`

- **Landing Page AIDA (Conversão):**
  > `// Atue como Conversion Rate Optimization (CRO) Specialist. Estruture uma Landing Page. Framework: 1. Hero (Headline + Subhead + CTA). 2. Problema (Agitação da dor). 3. Solução (Benefícios > Features). 4. Prova Social (Testemunhos reais). 5. Garantia (Risco Zero).`

### 🛍️ E-commerce & Varejo
- **Storefront Headless (Experience):**
  > `// Atue como Creative Developer. Projete um Storefront Headless. Features: 1. View Transitions API para navegação fluida. 2. Carrinho Optimistic UI (atualiza antes da API). 3. Micro-animações de "Adicionar ao Carrinho". Foco em Percepção de Performance.`

- **E-commerce MVP (WhatsApp):**
  > `// Atue como Fullstack Dev. Crie uma Loja "No-Code" Style. Stack: JSON (Catálogo) + JS Vanilla. Fluxo: 1. Renderiza Grid de Produtos. 2. Adiciona ao Carrinho (LocalStorage). 3. Checkout: Monta string URL do WhatsApp com o pedido formatado e abre o app.`

- **Customização Nuvemshop/Shopify:**
  > `// Atue como Frontend Specialist em E-commerce. Gere CSS (Sass) para override de tema. Objetivo: "Premium Feel". Ações: 1. Refinar tipografia (Line-height/Spacing). 2. Suavizar sombras e bordas. 3. Fixar Header com efeito Blur (Glassmorphism).`

### 🎨 Consultoria & Design
- **Relatório de Auditoria UX:**
  > `// Atue como UX Researcher Sênior. Gere um template Markdown para Auditoria Heurística. Estrutura: 1. Resumo Executivo. 2. Avaliação das 10 Heurísticas de Nielsen (Score 0-4). 3. Matriz de Priorização (Esforço x Impacto). 4. Recomendações de "Quick Wins".`

- **Organizador de Assets (Script):**
  > `// Atue como Automation Engineer. Crie script Node.js para organização de arquivos. Lógica: 1. Scan recursivo de diretório. 2. Extração de metadados (Data de criação). 3. Renomeação padronizada (YYYY-MM-DD_Nome). 4. Movimentação para estrutura de pastas por Ano/Mês.`

### 💼 Gestão & Recorrência
- **Relatório Mensal (Freelance):**
  > `// Gere template de Relatório de Atividades. Tabela: Data, Tarefa, Categoria (Dev/Reunião/Bugfix), Duração. Gráfico ASCII simples de distribuição de tempo. Seção: "Impedimentos e Riscos".`

---

## 12. CONTRIBUIÇÃO
*Protocolo para atualização deste documento.*

*   **Pull Requests:** Aceitos apenas com testes de prompt validados.
*   **Padrão:** Seguir a estrutura de metadados e categorização existente.
*   **Arquivo:** `contributing.md`
