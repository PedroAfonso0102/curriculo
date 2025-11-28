# JULES AI: PROTOCOLOS DE PROMPT & ENGENHARIA
**Versão:** 4.0 (Exponential Expansion)
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

## 4. DESENVOLVIMENTO & IMPLEMENTAÇÃO (CODE)
*Execução técnica, frameworks específicos e ferramentas auxiliares.*

### Frontend & UI (Vibecoding)
- **Design System "On-the-Fly" (Tailwind):**
  > `// Crie uma interface [Tipo: Dashboard/Landing] com estética [Estilo: Cyberpunk/Glassmorphism]. Use Tailwind CSS. Priorize gradientes, sombras coloridas e bordas translúcidas. O layout deve ser responsivo e "Mobile-First".`

- **Tradução Visual (Texto -> UI):**
  > `// Converta esta descrição em HTML/CSS: "Um card de produto flutuante, fundo escuro fosco (#1a1a1a), imagem do produto que salta para fora do card no hover, tipografia Sans-serif grossa, botão de compra com gradiente neon roxo".`

- **Micro-Interações (Juice):**
  > `// "Juice it up!" Adicione feedback visual a este componente. Hover states elásticos, active states com scale-down, transições de entrada (fade-in-up) e feedback de sucesso (ícone animado).`

### Backend & Lógica
- **API RESTful Boilerplate:**
  > `// Crie um controller [Node/Python] para a entidade [Nome]. Implemente CRUD completo: Create (com validação), Read (com paginação e filtros), Update (parcial/PATCH), Delete (soft delete).`

- **Otimização de Query SQL:**
  > `// Analise esta query SQL. Ela está lenta em grandes volumes. Reescreva-a utilizando JOINs explícitos, sugira índices compostos necessários e explique o Plano de Execução (Explain Plan) teórico.`

- **Gerador de Regex:**
  > `// Crie uma Regex robusta para validar [Padrão: CPF, Email Corporativo, Senha Forte]. Explique cada grupo de captura e forneça 5 casos de teste (match/no-match).`

### Scripts & Automação
- **Automação de Arquivos (Node/Python):**
  > `// Escreva um script para varrer o diretório [Dir], encontrar arquivos [Extensão] modificados há mais de [X] dias e movê-los para uma pasta de arquivamento compactada (ZIP).`

- **Web Scraping (Ético):**
  > `// Crie um script Puppeteer/Selenium para extrair [Dados] de [Site]. Inclua tratativa de paginação, espera por seletores dinâmicos e delay aleatório para evitar bloqueio (Rate Limiting).`

---

## 5. QUALIDADE, SEGURANÇA & OPERAÇÃO (POST-CODE)
*Garantia de robustez, confiabilidade e manutenção.*

### Debugging & Performance
- **Análise de Complexidade (Big O):**
  > `// Analise a complexidade de tempo e espaço (Big O) desta função. Identifique loops aninhados desnecessários e proponha uma solução O(n) ou O(log n) usando Hash Maps ou Busca Binária.`

- **Caça a Memory Leaks (JS):**
  > `// Analise este componente React/Node. Identifique Event Listeners não removidos, Intervalos órfãos, ou Closures que retêm referências grandes indevidamente.`

- **Auditoria de Acessibilidade (a11y):**
  > `// Analise este HTML. Aponte violações da WCAG 2.1. Verifique: Contraste de cores, Hierarquia de Headings, Labels em formulários, Alt text em imagens e Navegação por teclado.`

### Testes & Segurança
- **Geração de Testes Unitários (Jest/Pytest):**
  > `// Escreva testes unitários para [Função]. Cubra: 1. Caminho Feliz. 2. Entradas Inválidas (Null, Undefined, Tipos errados). 3. Limites (Boundary Values). Use Mocks para I/O.`

- **Auditoria de Segurança (AppSec):**
  > `// Analise este código como um Hacker Ético. Procure por: XSS, SQL Injection, Insegurança na Deserialização, Hardcoded Secrets e Exposição de Dados Sensíveis.`

---

## 6. DEVOPS & INFRAESTRUTURA
*Deploy, CI/CD e Containerização.*

- **Dockerfile Otimizado:**
  > `// Crie um Dockerfile Multi-Stage para esta aplicação [Node/Python]. 1. Stage Build: Instala deps e compila. 2. Stage Run: Imagem Alpine mínima, apenas binários/dist. Configure usuário não-root por segurança.`

- **GitHub Actions (CI/CD):**
  > `// Gere um workflow do GitHub Actions. Triggers: Push na main e PRs. Steps: Checkout, Setup Env, Install Deps (com Cache), Lint, Test, Build. Falhe o pipeline se o Lint ou Test não passar.`

- **Nginx Reverse Proxy:**
  > `// Gere uma configuração de Nginx para servir esta aplicação. Requisitos: Redirecionamento HTTP->HTTPS, Gzip Compression ativado, Cache de Assets estáticos e Headers de Segurança (HSTS, X-Frame-Options).`

---

## 7. DADOS & ANALYTICS
*Manipulação, análise e visualização de dados.*

- **Análise Exploratória (Pandas):**
  > `// Tenho um CSV com colunas [Colunas]. Gere código Python (Pandas) para: 1. Limpar valores nulos. 2. Agrupar por [Categoria] e somar [Valor]. 3. Calcular a variação percentual mês a mês (MoM).`

- **Visualização de Dados (D3/Chart.js):**
  > `// Crie um gráfico [Tipo: Linha/Barra] usando [Lib]. Dados de entrada: Array JSON [Estrutura]. Adicione Tooltips interativos, Eixos formatados e Legenda responsiva.`

- **SQL para Business Intelligence:**
  > `// Escreva uma query SQL para calcular o LTV (Lifetime Value) dos clientes. Considere as tabelas: Users, Orders, Transactions. A query deve retornar o LTV médio por coorte de mês de cadastro.`

---

## 8. COMUNICAÇÃO & NEGOCIAÇÃO (SOFT SKILLS)
*Templates para gestão comercial e situações críticas.*

- **Negociação de Escopo (Scope Creep):**
  > `// Escreva um e-mail formal, mas firme, para um cliente que pediu alterações fora do escopo contratado. Agradeça a sugestão, explique que impacta o prazo/custo e envie o orçamento adicional para aprovação.`

- **Comunicado de Incidente (Post-Mortem):**
  > `// Escreva um comunicado de incidente para stakeholders não-técnicos. Ocorreu: [Queda do Banco de Dados]. Causa Raiz: [Estouro de Memória]. Solução: [Upgrade de Instância]. Medida Preventiva: [Auto-Scaling]. Tom: Transparente, Responsável e Focado na Solução.`

- **Cold Mail (Prospecção B2B):**
  > `// Crie um template de Cold Mail para oferecer serviços de [Serviço] para [Nicho de Empresa]. Estrutura: Gancho personalizado (sobre a empresa deles), Problema comum no setor, Nossa Solução (Value Prop), Prova Social breve e CTA "Soft" (pergunta de interesse).`

---

## 9. CATÁLOGO DE SERVIÇOS (BOILERPLATES COMERCIAIS)
*Prompts prontos para execução dos serviços do portfólio "Me Contrate".*

### 🚀 Performance & Conversão
- **Landing Page "Speed-First" (<1s):**
  > `// Atue como Engenheiro de Performance. Crie estrutura para Landing Page. Meta: Lighthouse 100. Requisitos: HTML Semântico, CSS Inline Crítico (Critical Path), Zero JS Frameworks, Imagens WebP com Lazy-Load. Foco em TBT (Total Blocking Time) zero.`

- **Landing Page AIDA (Conversão):**
  > `// Atue como Copywriter e Dev. Estruture Landing Page modelo AIDA. Seções: Hero (Headline + CTA), Problema (Agitação), Solução (Benefícios), Prova Social (Testimonials), Garantia e FAQ. Design focado em hierarquia visual.`

### 🛍️ E-commerce & Varejo
- **Storefront Headless (Experience):**
  > `// Atue como Creative Developer. Projete Storefront Headless. Use View Transitions API. Implemente Carrinho "Off-Canvas" (gaveta lateral). Simule consumo de API. Foco em animações de entrada e feedback tátil.`

- **E-commerce MVP (WhatsApp):**
  > `// Crie Loja Simples (No-Backend). 1. JSON de produtos. 2. Grid Responsivo. 3. Carrinho (LocalStorage). 4. Checkout: Gera mensagem formatada para WhatsApp ("Olá, quero: 2x Item A, 1x Item B. Total: R$ X").`

- **Customização Nuvemshop/Shopify:**
  > `// Gere CSS (Sass) para override de tema. Altere: Fontes (Google Fonts), Botões (Gradiente + Shadow), Header (Sticky + Blur). Remova "Powered by" se possível via CSS. Objetivo: Look & Feel Premium.`

### 🎨 Consultoria & Design
- **Relatório de Auditoria UX:**
  > `// Atue como UX Researcher. Gere template Markdown para Auditoria Heurística. Seções: Resumo, Análise das 10 Heurísticas de Nielsen (Gravidade 0-4), Matriz Esforço x Impacto, Quick Wins. Inclua placeholders para screenshots.`

- **Organizador de Assets (Script):**
  > `// Crie script Node.js. Input: Pasta 'Raw'. Ação: Ler metadados (Data), Renomear (PROJ_YYYYMMDD_SEQ), Mover para 'Organized/YYYY/MM'. Gerar thumbnails low-res para visualização rápida.`

### 💼 Gestão & Recorrência
- **Relatório Mensal (Freelance):**
  > `// Gere template de Relatório de Atividades. Tabela: Data, Tarefa, Categoria (Dev/Reunião/Bugfix), Duração. Gráfico ASCII simples de distribuição de tempo. Seção: "Impedimentos e Riscos".`

---

## 10. REFATORAÇÃO, PADRONIZAÇÃO & DESIGN SYSTEM
*Prompts para manutenção de escala, consistência visual e arquitetura de pastas.*

### 🏗️ Análise & Reestruturação de Código
- **Análise Estrutural e Sugestão de Arquitetura:**
  > `// Atue como Arquiteto de Software. Analise a estrutura atual deste projeto (arquivos e pastas). Identifique se estamos usando um padrão "Single File" (monolítico) ou se há uma tentativa de modularização. Com base no contexto inferido, sugira a MELHOR reorganização de pastas possível. Proponha subdivisões para CSS (ex: atomic, components), JS (ex: services, utils) e HTML. Justifique cada mudança com foco em escalabilidade e manutenção.`

- **Refatoração de Monólito para Modular:**
  > `// Este arquivo está muito grande. Analise as responsabilidades misturadas aqui. Proponha um plano de refatoração para quebrar este arquivo em módulos menores e coesos. Ex: Extrair estilos para CSS separado, lógica para JS separado e manter apenas a estrutura no HTML. Me dê a estrutura de pastas resultante antes de codar.`

- **Detecção de Código Morto (Dead Code):**
  > `// Varra o projeto em busca de "Código Morto". Identifique classes CSS declaradas que não são usadas em nenhum HTML e funções JS que nunca são chamadas ou exportadas. Liste esses itens para remoção segura para reduzir o tamanho do bundle.`

- **Extração de Componentes Repetidos (DRY):**
  > `// Analise o HTML/JSX. Encontre padrões de interface que se repetem em mais de 3 lugares (ex: Cards de produto, Itens de lista, Botões com ícone). Proponha a abstração desses trechos em componentes reutilizáveis únicos para eliminar duplicação.`

### 📐 Padronização de Layout & UI
- **Auditoria e Unificação de Design System:**
  > `// Atue como Design Ops. Analise todos os arquivos de estilo/componentes deste repositório. Identifique inconsistências no Grid System, Espaçamentos (Margins/Paddings), Tipografia e Cores. Crie um plano para padronizar tudo sob um único Design System. Liste quais componentes devem ser mantidos, quais devem ser refatorados para se adequar ao padrão e quais devem ser descartados por redundância.`

- **Normalização de Hierarquia Visual:**
  > `// Analise a hierarquia visual das páginas. Verifique se o uso de H1, H2, H3 e tamanhos de fonte segue uma lógica consistente de importância. Identifique onde a hierarquia está quebrada (ex: botões secundários chamando mais atenção que os primários) e proponha correções CSS em lote para resolver.`

- **Padronização de Breakpoints (Responsividade):**
  > `// Analise as Media Queries espalhadas pelo CSS. Identifique valores arbitrários (ex: 768px, 770px, 800px) que causam comportamento inconsistente. Unifique tudo para um padrão de breakpoints (Mobile, Tablet, Desktop) e refatore o CSS para usar variáveis de breakpoint centralizadas.`

- **Gestão de Z-Index (Camadas):**
  > `// Analise o uso de 'z-index'. Identifique valores "mágicos" (9999, 1000) que causam guerras de sobreposição. Proponha uma escala semântica de camadas (ex: --z-dropdown, --z-modal, --z-toast) e refatore o CSS para usar essas variáveis.`

### 🎨 Modificação de Estilo & Temas
- **Migração de Estilo (Re-skinning):**
  > `// Quero alterar a linguagem visual deste projeto de [Estilo Atual] para [Novo Estilo, ex: Material Design, Flat, Neumorphism]. Liste as variáveis CSS (Cores, Bordas, Sombras, Fontes) que precisam ser alteradas. Gere o novo CSS base que aplica essa transformação globalmente sem quebrar o layout.`

- **Ajuste Fino de CSS (Pixel Perfect):**
  > `// O elemento [Seletor] não está alinhado corretamente com [Referência] em telas [Tamanho]. Ajuste o CSS (Flexbox/Grid) para garantir alinhamento perfeito. Verifique também se o espaçamento interno (padding) está consistente com o resto do componente.`

- **Extração de Paleta de Cores (Tokenização):**
  > `// Encontre todas as cores Hex/RGB hardcoded nos arquivos CSS/JS. Extraia-as para um arquivo 'variables.css' ou objeto de tema, nomeando-as semanticamente (ex: --color-primary, --color-bg-surface, --color-text-muted) em vez de pelo nome da cor.`

- **Conversão para Unidades Relativas (Acessibilidade):**
  > `// Converta todos os tamanhos de fonte e espaçamentos definidos em 'px' para 'rem'. Assuma base 16px. Isso é crucial para permitir que o usuário escale a fonte pelo navegador e melhore a acessibilidade.`

### 🧩 Consistência de UX
- **Injeção de Padrões de UX (Global):**
  > `// Analise o repositório e identifique onde faltam padrões essenciais de UX. Ex: Feedback de carregamento (Skeletons/Spinners), Estados vazios (Empty States) em listas, e Feedback de erro em formulários. Gere um plano para implementar esses padrões de forma consistente em TODAS as telas que precisam.`

- **Padronização de Micro-interações:**
  > `// Defina um padrão de animação para interações (Hover, Click, Modal Open). Ex: "Todos os botões devem ter scale(0.98) no click". Aplique esse padrão globalmente no CSS/JS para que a sensação de uso seja uniforme em todo o aplicativo.`

- **Auditoria de Navegação por Teclado:**
  > `// Verifique se todos os elementos interativos (botões, links, inputs) possuem estados de ':focus' visíveis e distintos. Se não, crie um estilo padrão de 'focus-ring' (anel de foco) de alto contraste e aplique globalmente para garantir acessibilidade.`

- **Padronização de Feedback de Formulário:**
  > `// Garanta que todos os inputs tenham 3 estados visuais claros: Padrão, Erro (borda vermelha + mensagem de texto) e Sucesso (borda verde). Gere o CSS/JS necessário para validar e aplicar esses estados automaticamente em todos os formulários.`

---

## 11. CICLO DE VIDA & GESTÃO ESTRATÉGICA
*Lacunas estratégicas: Documentação, Gestão, Aprendizado e Crise.*

### 📚 Documentação Viva & Engenharia de Conhecimento
- **Auto-Doc (Técnico):**
  > `// Analise este arquivo/módulo. Gere uma documentação técnica no padrão JSDoc/Docstring para todas as funções exportadas. Além disso, crie um arquivo 'ARCHITECTURE.md' explicando o fluxo de dados e as decisões de design (ex: por que usou a lib X e não Y).`

- **Manual do Usuário (Final):**
  > `// Com base nas funcionalidades implementadas neste código, escreva um Manual do Usuário Final. Linguagem simples, passo-a-passo, focada em "Como realizar a tarefa X".`

### ⏱️ Gestão de Projeto & Estimativa
- **Estimativa PERT (Anti-Prejuízo):**
  > `// Atue como Tech Lead. Analise esta feature request: [Descrição]. Quebre-a em sub-tarefas técnicas granulares (ex: criar tabela, endpoint, validação, front, teste). Estime o tempo Otimista, Provável e Pessimista para cada tarefa. Calcule a média PERT e adicione 20% de margem de segurança (buffer).`

- **Definição de Pronto (DoD):**
  > `// Para evitar refações infinitas, crie uma lista de critérios de aceitação ("Definition of Done") para esta tarefa. O que exatamente precisa acontecer para considerarmos isso 100% concluído e impedir que o cliente peça "só mais uma coisinha"?`

### 🎓 Aprendizado Acelerado & Mentor Híbrido
- **Explain Like I'm Junior (Conceitual):**
  > `// Não apenas gere o código. Após a solução, adicione uma seção "Conceitos Chave". Explique a lógica por trás da escolha desta arquitetura/função específica. Por que isso é melhor que a abordagem ingênua? Use analogias visuais.`

- **Plano de Estudo JIT (Just-in-Time):**
  > `// Analise as tecnologias e padrões usados neste projeto que criamos (ex: Grid Layout, JWT, MySQL Joins). Crie um roteiro de estudos prático com 3 tópicos prioritários que eu preciso dominar para parar de depender de IA para tarefas similares a esta.`

### 🚨 Gestão de Crise & SRE
- **Protocolo de Triagem (War Room):**
  > `// O sistema apresenta o erro [Erro/Sintoma]. Atue como SRE (Site Reliability Engineer). Não tente corrigir ainda. Primeiro, guie-me por um checklist lógico de isolamento de falha para descobrirmos a Causa Raiz. Comece do mais óbvio (DNS, Servidor) para o mais complexo (Código, Banco).`

### 🎨 Design Handoff & Fidelidade
- **Figma to Code Logic (Pixel Perfect):**
  > `// Tenho este CSS atual [Colar CSS] e esta imagem do design desejado [Descrever diferenças ou colar propriedades do Figma]. Identifique as discrepâncias visuais exatas (line-height, letter-spacing, box-shadow). Gere apenas o CSS delta (as correções) para tornar a implementação 1:1 com o design.`

---

## 12. ENGENHARIA DE COMPONENTES (MEGA-PROMPTS)
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

## 13. CONTRIBUIÇÃO
*Protocolo para atualização deste documento.*

*   **Pull Requests:** Aceitos apenas com testes de prompt validados.
*   **Padrão:** Seguir a estrutura de metadados e categorização existente.
*   **Arquivo:** `contributing.md`
