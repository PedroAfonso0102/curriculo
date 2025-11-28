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

## 10. CONTRIBUIÇÃO
*Protocolo para atualização deste documento.*

*   **Pull Requests:** Aceitos apenas com testes de prompt validados.
*   **Padrão:** Seguir a estrutura de metadados e categorização existente.
*   **Arquivo:** `contributing.md`
