# Currículo & Portfólio Digital - Pedro Afonso Pinheiro de Paula

Bem-vindo ao repositório do meu currículo e portfólio digital. Este projeto é uma aplicação web interativa (SPA) construída com tecnologias nativas, combinando apresentação profissional, experimentação técnica e um catálogo de serviços.

🔗 **Acesse online:** [https://pedroafonso.com/curriculo](https://pedroafonso.com/curriculo)

---

## 🏗️ Arquitetura do Sistema

O sistema segue uma arquitetura **Client-Side Monolithic** simplificada, sem dependências de build tools complexos. O foco é performance (High Performance Loading) e SEO para o conteúdo principal.

### Diagrama de Arquitetura (Mermaid)

```mermaid
graph TD
    User[Usuário / Navegador]
    
    subgraph "Core Application"
        Index[index.html<br/>(Entry Point & Content)]
        MainJS[main.js<br/>(Router, i18n, Theme)]
        Styles[styles.css<br/>(Design System)]
    end

    subgraph "Modules (Lazy/On-Demand)"
        ExpJS[js/experiments.js<br/>(Canvas Simulations)]
        HireJS[js/hire_me.js<br/>(Service Logic)]
    end

    subgraph "DOM Views"
        ResumeView[#resume-view<br/>(Static HTML)]
        PlayView[#playground-view<br/>(Canvas Container)]
        HireView[#hire-me-view<br/>(Dynamic DOM)]
    end

    subgraph "External Services"
        WA[WhatsApp API<br/>(Conversion Endpoint)]
    end

    %% Flow
    User -->|Request| Index
    Index -->|Loads| MainJS
    Index -->|Loads| Styles
    
    MainJS -->|Control| ResumeView
    MainJS -->|Control| PlayView
    MainJS -->|Control| HireView
    
    PlayView -.->|Controlled by| ExpJS
    HireView -.->|Controlled by| HireJS
    
    HireJS -->|Redirect| WA
```

### 🧱 Limites do Sistema

1.  **Frontend-Only:** Não há backend próprio. Toda a lógica reside no navegador do cliente.
2.  **Persistência Local:** Preferências de usuário (Tema) são salvas no `localStorage`. Não há banco de dados centralizado.
3.  **Dependência Externa:** O fluxo de conversão ("Me Contrate") depende inteiramente da API de URL do WhatsApp (`wa.me`).
4.  **Compatibilidade:** Otimizado para navegadores modernos (ES6+), com degradação graciosa para visualização de conteúdo estático.

### 🔄 Fluxo de Dados

1.  **Inicialização:**
    *   O navegador carrega `index.html` (Paint inicial rápido com conteúdo em PT-BR).
    *   `main.js` hidrata a aplicação: verifica preferências de tema e idioma.
2.  **Navegação (Roteamento):**
    *   Cliques no menu invocam `switchView()`.
    *   Oculta/Mostra contêineres DOM (`display: none/block`).
    *   Pausa loops de animação (Canvas) quando o Playground é ocultado para economizar CPU/Bateria.
3.  **Internacionalização (i18n):**
    *   Sistema "Dual Update": Conteúdo crítico hardcoded no HTML (SEO) + Objeto JSON em memória para trocas dinâmicas.
4.  **Conversão:**
    *   Usuário preenche formulário em `#hire-me-view`.
    *   `js/hire_me.js` sanitiza inputs e constrói uma URL codificada.
    *   Redirecionamento para WhatsApp com mensagem pré-formatada.

### ⚠️ Modos de Falha e Resiliência

| Modo de Falha | Impacto | Mitigação / Comportamento |
| :--- | :--- | :--- |
| **JavaScript Desabilitado** | Alto | O conteúdo do Currículo (Resume) permanece visível e legível (HTML estático). Funcionalidades interativas (Playground, Troca de Idioma) falham silenciosamente. |
| **Bloqueio de Pop-up** | Médio | O redirecionamento para o WhatsApp pode ser bloqueado. O sistema deve instruir o usuário a verificar bloqueadores. |
| **Falha no LocalStorage** | Baixo | Preferências de tema/idioma não serão salvas entre sessões. O site carrega com defaults (Tema Claro, PT-BR). |
| **Erro em Canvas** | Baixo | Se o dispositivo não suportar Canvas API, o Playground mostrará uma área em branco ou erro de console, mas o restante do site continua funcional. |

---

## 🚀 Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PedroAfonso0102/curriculo.git
    ```
2.  **Abra o projeto:**
    Basta abrir o arquivo `index.html` em seu navegador.
    *   *Recomendação:* Use a extensão "Live Server" no VS Code para hot-reload.

## 📂 Estrutura de Arquivos

*   `index.html`: Estrutura semântica e conteúdo base.
*   `main.js`: Core da aplicação (Router, State).
*   `styles.css`: Estilização global e variáveis.
*   `js/experiments.js`: Lógica matemática/física das simulações.
*   `js/hire_me.js`: Lógica de negócios e formulários.

## 📄 Licença

Uso pessoal e profissional. Código disponível para fins educacionais.
