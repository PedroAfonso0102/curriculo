<p align="center">
  <img src="assets/jules-readme.png" alt="Jules Awesome List" width="600">
</p>

<div align="center">
  <h1>Awesome Jules Prompts 🌟 (Edição Avançada)</h1>
  <p>Prompts curados e estratégias de engenharia de prompt para o Jules, seu agente de codificação assíncrono.</p>
  <br>
  <a href="https://jules.google.com">Visitar Jules</a> •
  <a href="#contribuindo">Contribuir</a>
</div>

---

## Índice

- [Filosofia de Prompting Avançado](#filosofia-de-prompting-avançado)
- [A Arte do Refinamento: Do Básico ao Excepcional](#a-arte-do-refinamento-do-básico-ao-excepcional)
- [Brainstorming & Ideação Arquitetural](#brainstorming--ideação-arquitetural)
- [Kickoff de Novas Features (Start)](#kickoff-de-novas-features-start)
- [Engenharia do Dia a Dia & Refatoração](#engenharia-do-dia-a-dia--refatoração)
- [Debug, Performance & Otimização](#debug-performance--otimização)
- [Documentação & Gestão de Conhecimento](#documentação--gestão-de-conhecimento)
- [Testes, QA & Segurança](#testes-qa--segurança)
- [Gestão de Dependências & Modernização](#gestão-de-dependências--modernização)
- [Criativo & Experimental](#criativo--experimental)
- [Contribuindo](#contribuindo)

---

## Filosofia de Prompting Avançado

Para extrair o máximo de um agente como o Jules, você deve deixar de ser apenas um "solicitante de código" para se tornar um "Arquiteto de Intenção". O Jules não apenas escreve código; ele entende contexto, dependências e padrões.

**Os 3 Pilares do Prompt Avançado:**
1.  **Contexto Explícito**: Não assuma que o agente sabe *por que* você quer algo. Diga a ele.
2.  **Restrições Criativas**: Defina o que *não* fazer (ex: "sem bibliotecas externas", "mantenha a compatibilidade com X").
3.  **Role-Playing Técnico**: Peça para o agente atuar como um especialista (ex: "Atue como um Engenheiro de Segurança", "Atue como um Designer de UX").

---

## A Arte do Refinamento: Do Básico ao Excepcional

A diferença entre um código "que funciona" e um código "de produção" está na qualidade do prompt. Use este framework para elevar suas solicitações.

### Exemplo 1: Criação de Componente
*   🔴 **Básico**: `// Crie um botão.`
*   🟡 **Avançado**: `// Crie um componente de botão em React com TypeScript.`
*   🟢 **Refinado (Jules Master)**: 
    > `// Implemente um componente 'Button' polimórfico e reutilizável em React/TypeScript. Ele deve consumir os tokens de design do nosso arquivo de tema, suportar variantes (primary, secondary, ghost, danger), tamanhos (sm, md, lg) e estados de carregamento. Garanta acessibilidade total (ARIA) e tipagem estrita para evitar props inválidas.`

### Exemplo 2: Refatoração
*   🔴 **Básico**: `// Melhore este código.`
*   🟡 **Avançado**: `// Refatore esta função para ser mais limpa.`
*   🟢 **Refinado (Jules Master)**:
    > `// Analise a complexidade ciclomática desta função. Refatore-a aplicando o padrão 'Early Return' para reduzir o aninhamento. Extraia lógicas repetidas para funções auxiliares privadas e renomeie as variáveis para refletir melhor o domínio do negócio, mantendo a compatibilidade da assinatura pública.`

---

## Brainstorming & Ideação Arquitetural
*Use estes prompts para explorar caminhos antes de escrever uma linha de código.*

- `// Atue como um Arquiteto de Software Sênior. Analise a estrutura atual do projeto e proponha 3 abordagens arquiteturais para implementar [Feature X], listando os prós, contras e impacto na dívida técnica de cada uma.`
  <sub>Ideal para decisões de alto nível antes do desenvolvimento.</sub>

- `// Estou pensando em usar [Tecnologia/Lib A] para resolver [Problema Y]. Critique essa escolha comparando-a com [Tecnologia/Lib B] e [Tecnologia/Lib C], considerando o contexto do nosso codebase atual.`
  <sub>Validação de stack tecnológica.</sub>

- `// Gere um diagrama mental (em texto ou Mermaid) de como os dados fluem através da aplicação se implementarmos [Nova Funcionalidade], desde o banco de dados até a UI.`
  <sub>Visualização de fluxo de dados e dependências.</sub>

- `// Identifique gargalos potenciais de escalabilidade no design atual se aumentarmos o volume de usuários em 10x. Proponha soluções preventivas.`
  <sub>Planejamento de capacidade e robustez.</sub>

---

## Kickoff de Novas Features (Start)
*Prompts para sair do zero e gerar o esqueleto funcional de novas funcionalidades.*

- `// Crie um plano de implementação passo-a-passo para a feature [Nome da Feature]. Para cada passo, especifique quais arquivos precisam ser criados ou modificados e descreva a lógica necessária.`
  <sub>Planejamento granular de tarefas.</sub>

- `// Gere o boilerplate completo para um novo módulo [Nome do Módulo] seguindo a Clean Architecture. Inclua as camadas de Entidade, Use Case, Controller e Gateway, com interfaces bem definidas.`
  <sub>Geração de estrutura de código complexa e organizada.</sub>

- `// Implemente o esqueleto vertical (Vertical Slice) da feature [X], conectando o Frontend (componente vazio), a API (rota mockada) e o Banco de Dados (model/schema), garantindo que a comunicação ponta-a-ponta funcione.`
  <sub>Prototipagem rápida funcional.</sub>

- `// Crie uma 'Feature Flag' para [Nova Funcionalidade] e envolva o código existente necessário para que possamos fazer o deploy em produção sem ativar a feature para os usuários finais.`
  <sub>Estratégias de deploy seguro e CI/CD.</sub>

---

## Engenharia do Dia a Dia & Refatoração

- `// Refatore este arquivo aplicando os princípios SOLID. Foque especificamente no Princípio da Responsabilidade Única (SRP), extraindo classes ou hooks conforme necessário.`
  <sub>Melhoria de qualidade de código orientada a objetos/hooks.</sub>

- `// Converta este componente de Classe (Legacy) para Componente Funcional com Hooks, preservando todo o ciclo de vida e estado, mas modernizando a sintaxe.`
  <sub>Modernização de React/Frontend.</sub>

- `// Adicione tipagem estrita (no-any) a este módulo Python/TypeScript. Crie interfaces/types para todas as estruturas de dados implícitas.`
  <sub>Endurecimento de código e segurança de tipos.</sub>

- `// Normalize o tratamento de erros neste módulo. Substitua os 'try-catch' dispersos por um padrão de Result Pattern ou use o middleware de erro global do projeto.`
  <sub>Padronização e robustez.</sub>

---

## Debug, Performance & Otimização

- `// Analise o 'Critical Rendering Path' deste componente. Identifique renderizações desnecessárias e sugira o uso de memoization (useMemo, useCallback) ou virtualização onde apropriado.`
  <sub>Otimização de performance de Frontend.</sub>

- `// Investigue esta query SQL/ORM. Explique por que ela pode ser lenta em grandes volumes de dados e reescreva-a para ser mais eficiente (ex: indexação, joins otimizados).`
  <sub>Otimização de Banco de Dados.</sub>

- `// Realize uma análise estática de segurança neste arquivo. Aponte vulnerabilidades comuns (XSS, Injection, ReDoS) e corrija-as.`
  <sub>Auditoria de segurança rápida.</sub>

- `// O código está falhando silenciosamente em [Cenário X]. Adicione logs estruturados e contextuais em pontos chave para revelar o estado interno sem poluir o console.`
  <sub>Instrumentação para debugging.</sub>

---

## Documentação & Gestão de Conhecimento

- `// Gere uma documentação técnica (JSDoc/Docstring) para este módulo que explique não apenas O QUE o código faz, mas POR QUE foi feito dessa forma (decisões de design).`
  <sub>Documentação rica e contextual.</sub>

- `// Crie um arquivo 'ARCHITECTURE.md' que descreva a estrutura de pastas, os principais padrões de design utilizados neste repositório e o fluxo de dados principal.`
  <sub>Onboarding e visão geral do sistema.</sub>

- `// Escreva um guia de 'Troubleshooting' para este serviço, listando os erros mais comuns, suas causas prováveis e passos para resolução.`
  <sub>Runbooks para DevOps e SRE.</sub>

---

## Testes, QA & Segurança

- `// Escreva cenários de teste BDD (Gherkin) para a feature [X] cobrindo casos de sucesso, casos de borda e fluxos de erro.`
  <sub>Definição de requisitos baseada em comportamento.</sub>

- `// Gere testes unitários para esta função que alcancem 100% de cobertura de ramificação (branch coverage), zombando (mocking) todas as dependências externas.`
  <sub>Testes robustos e isolados.</sub>

- `// Crie um teste de integração que simule um fluxo de usuário completo: Login -> Acessar Dashboard -> Criar Item -> Logout.`
  <sub>Testes E2E e de fluxo crítico.</sub>

- `// Analise este código em busca de condições de corrida (Race Conditions) em ambientes concorrentes e sugira mecanismos de bloqueio ou sincronização.`
  <sub>Programação concorrente e paralela.</sub>

---

## Gestão de Dependências & Modernização

- `// Analise o 'package.json' e identifique bibliotecas que estão obsoletas ou que possuem alternativas mais modernas e leves. Proponha um plano de migração.`
  <sub>Manutenção de saúde do projeto.</sub>

- `// Crie um script para automatizar a atualização de dependências e rodar a suíte de testes automaticamente para validar a integridade.`
  <sub>Automação de DevOps.</sub>

---

## Criativo & Experimental

- `// Crie um 'Easter Egg' no console do navegador que exiba uma arte ASCII do logo do projeto quando um desenvolvedor abrir o DevTools.`
  <sub>Cultura e diversão.</sub>

- `// Prototipe uma interface de linha de comando (CLI) interativa para interagir com a API deste projeto, facilitando testes manuais.`
  <sub>Ferramentas de produtividade interna.</sub>

- `// Gere uma variação de design 'Cyberpunk' para este componente CSS, usando cores neon, glitch effects e fontes monoespaçadas.`
  <sub>Exploração visual e criativa.</sub>

---

## Boilerplates de Serviço (Me Contrate)
*Prompts 'Ready-to-Use' alinhados com os serviços do seu portfólio. Copie e cole para iniciar projetos com qualidade premium.*

### 🚀 Landing Pages & Performance

- **Landing Page (Conversão Clássica)**
  > `// Atue como um Especialista em CRO (Conversion Rate Optimization). Crie a estrutura HTML5/CSS3 para uma Landing Page focada em [Objetivo: Venda/Lead]. A estrutura deve seguir o modelo AIDA (Atenção, Interesse, Desejo, Ação). Inclua seções para: Hero com CTA claro, Prova Social (Testemunhos), Benefícios (Grid), FAQ (Accordion) e Rodapé. O CSS deve ser responsivo (Mobile-First) e visualmente limpo.`

- **Landing Page "Speed-First" (<1s Load)**
  > `// Atue como um Engenheiro de Performance Web. Crie um boilerplate para uma Landing Page 'Speed-First'. O objetivo é atingir 100/100 no Lighthouse. Requisitos Obrigatórios: HTML5 Semântico estrito, CSS crítico in-line (acima da dobra), imagens com lazy-loading nativo e srcset, e ZERO frameworks JS (apenas Vanilla JS leve se estritamente necessário). Minifique o output final.`

### 🛍️ E-commerce & Storefronts

- **E-commerce Básico (Pequenos Negócios)**
  > `// Crie um esqueleto funcional para um E-commerce simples. Preciso de: 1. Um array JSON mockado contendo 6 produtos (id, nome, preço, img). 2. Uma função JS para renderizar esses produtos em um Grid responsivo. 3. Uma lógica simples de Carrinho (adicionar/remover/total) usando LocalStorage para persistência. 4. Um botão de checkout que apenas monte uma mensagem de pedido para o WhatsApp.`

- **Storefront Customizado (Headless/Imersivo)**
  > `// Atue como um Desenvolvedor Creative Frontend. Projete a arquitetura de um Storefront Headless. O foco é UX de alto nível ("App-like feel"). Utilize a View Transitions API para navegação fluida entre a Vitrine e o Detalhe do Produto. O carrinho deve ser um 'Off-Canvas' (gaveta lateral) que não recarrega a página. Simule o consumo de uma API REST externa.`

- **Setup de Plataforma (Nuvemshop/Shopify)**
  > `// Gere um snippet CSS avançado para customizar o checkout/vitrine de uma loja [Nuvemshop/Shopify]. O objetivo é elevar a percepção de valor (premium). Altere as fontes padrão para [Fonte Google Fonts], ajuste os botões de compra para terem um gradiente sutil e hover effect, e limpe a poluição visual do rodapé padrão. Adicione comentários explicando onde colar cada bloco no painel admin.`

### 💻 Aplicações & Sistemas

- **Aplicação Web (SaaS/Dashboard)**
  > `// Inicie a estrutura de uma Aplicação Web (Dashboard Admin). Use [React/Vue/Vanilla]. Crie um layout com Sidebar lateral colapsável e Header fixo. Implemente um roteamento básico para 3 views: 'Dashboard' (com cards de métricas placeholder), 'Usuários' (tabela com filtros) e 'Configurações'. Inclua um mock de autenticação (Login screen).`

### 🎨 Design & Audiovisual

- **Consultoria UX/UI (Auditoria)**
  > `// Atue como um UX Researcher. Crie um template Markdown para um 'Relatório de Auditoria Heurística'. O template deve conter seções para: 1. Resumo Executivo. 2. Análise das 10 Heurísticas de Nielsen (com espaço para prints e gravidade do erro). 3. Matriz de Priorização (Esforço x Impacto). 4. Recomendações de Quick Wins.`

- **Pacote Visual Asset (Organização)**
  > `// Crie uma estrutura de pastas e um script (Node.js ou Python) para automatizar a organização de assets de mídia. O script deve ler uma pasta 'Input', renomear arquivos de imagem/vídeo baseados em data/projeto (ex: 'PROJ_2024_PROD_001.jpg') e mover para pastas separadas 'Raw', 'Editado' e 'Final_Web_Ready' (com compressão automática via sharp/ffmpeg se possível).`

### 💼 Serviços Recorrentes

- **Freelance Fixo (Relatório & Controle)**
  > `// Gere um template de 'Log de Horas e Atividades' em Markdown ou HTML simples para enviar ao cliente mensalmente. Deve conter: Tabela de Sessões (Data, Hora Início, Hora Fim, Descrição da Tarefa, Duração), Resumo Total de Horas, e uma seção de 'Próximos Passos/Impedimentos'.`

---

### 🔍 Pesquisa & Estratégia de Mercado

- **Análise de Concorrente (Engenharia Reversa)**
  > `// Atue como um Analista de Produto Sênior. Analise o site [URL do Concorrente] (ou a descrição do produto). Liste: 1. A Proposta de Valor Única (UVP) deles. 2. Três pontos fracos na UX/UI que podemos explorar. 3. A provável stack tecnológica que estão usando (baseado em padrões visuais/comportamentais).`

- **Validação de Ideia (Advogado do Diabo)**
  > `// Atue como um Investidor Cético de Venture Capital. Eu vou apresentar minha ideia de feature/produto: [Descrição da Ideia]. Quero que você a destrua. Encontre todas as falhas lógicas, riscos de mercado, dificuldades técnicas e motivos pelos quais ela falharia. Seja brutalmente honesto.`

- **Geração de Persona (Dados Sintéticos)**
  > `// Crie 3 Personas de Usuário detalhadas para o produto [Nome do Produto]. Para cada uma, inclua: Nome, Idade, Cargo, "Job to be Done" (o que eles realmente querem resolver), Dores Atuais, Objeções de Compra e um "Quote" (frase típica).`

### 🧠 Meta-Prompts (Otimização do Agente)

- **Refinamento de Prompt (O "Prompt para criar Prompts")**
  > `// Atue como um Engenheiro de Prompt Especialista. Eu preciso de um prompt para pedir ao Jules que [Descreva a Tarefa, ex: crie um sistema de login]. Escreva o MELHOR prompt possível para essa tarefa, garantindo que ele inclua contexto, restrições, formato de saída e personas. Não execute a tarefa, apenas me dê o prompt.`

- **Análise de Brechas (Gap Analysis)**
  > `// Analise a minha última solicitação e o código que você gerou. Identifique se houve algum requisito implícito que eu esqueci de pedir ou se há algum "Edge Case" (caso de borda) que o código atual não cobre. Liste-os.`

- **Explicação para Leigos (Feynman Technique)**
  > `// Explique o funcionamento deste bloco de código complexo como se eu fosse um estudante de 12 anos. Use analogias do mundo real e evite jargões técnicos excessivos.`

---

## Contribuindo

Suas contribuições são bem-vindas! Adicione novos prompts avançados, corrija formatações ou sugira novas categorias de engenharia de prompt.

- 📄 [Guia de Contribuição](contributing.md)
- 🪄 Abra um [Pull Request](https://github.com/YOUR_REPO/pulls)
