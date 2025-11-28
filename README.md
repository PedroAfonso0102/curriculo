# Currículo & Portfólio Digital - Pedro Afonso Pinheiro de Paula

Bem-vindo ao repositório do meu currículo e portfólio digital. Este projeto é uma aplicação web interativa que combina minha experiência profissional com uma área de experimentação técnica ("Playground") e um catálogo de serviços ("Me Contrate").

## 📋 Visão Geral

Este projeto foi desenvolvido com tecnologias web nativas (Vanilla JavaScript, HTML5 e CSS3) para garantir alta performance, sem dependência de frameworks pesados. Ele serve três propósitos principais:

1.  **Currículo:** Apresentação profissional da minha carreira, habilidades e formação.
2.  **Playground:** Uma área de demonstração técnica com simulações físicas e matemáticas interativas (Fluidos, Gravidade, Pêndulo Duplo, etc.).
3.  **Me Contrate:** Um catálogo de serviços onde clientes podem solicitar orçamentos diretamente via WhatsApp.

🔗 **Acesse online:** [https://pedroafonso.com/curriculo](https://pedroafonso.com/curriculo)

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Estilização com variáveis CSS (Custom Properties) para temas Claro/Escuro e design responsivo (Mobile First).
*   **JavaScript (ES6+):** Lógica de aplicação, roteamento SPA (Single Page Application) simples, simulações em Canvas API e gerenciamento de estado.

## 📂 Estrutura do Projeto

```
.
├── index.html          # Ponto de entrada da aplicação e conteúdo base (PT-BR)
├── main.js             # Lógica principal: Roteamento, Traduções, Temas
├── styles.css          # Estilos globais e componentes
├── js/
│   ├── experiments.js  # Lógica das simulações do Playground (Canvas)
│   └── hire_me.js      # Lógica da seção "Me Contrate" (Catálogo e Formulários)
└── PROTOTIPAGEM.../    # Arquivos de design e protótipos visuais
```

## 🛠️ Configuração e Execução

Como este projeto utiliza apenas tecnologias nativas, não é necessário `npm install` ou processos de build complexos para rodá-lo localmente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PedroAfonso0102/seu-repo.git
    cd seu-repo
    ```

2.  **Execute:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno.
    *   Recomendado: Use uma extensão como "Live Server" no VS Code para desenvolvimento.

## 🌍 Sistema de Traduções (i18n)

O projeto suporta múltiplos idiomas (PT, EN, ES). O sistema de tradução funciona através de um processo de "Dual Update" para garantir SEO e performance:

1.  **HTML Hardcoded (index.html):** O conteúdo em Português é mantido diretamente no HTML para carregamento inicial rápido e indexação por motores de busca.
2.  **Objeto de Traduções (main.js):** O objeto `window.translations` contém as strings para todos os idiomas suportados.
3.  **Atributos de Dados:** Elementos que requerem tradução possuem o atributo `data-i18n="chave_da_traducao"`.

**Como adicionar uma nova tradução:**
1.  Adicione o texto em Português no `index.html` (se for novo conteúdo).
2.  Adicione o atributo `data-i18n="nova_chave"` ao elemento HTML.
3.  No arquivo `main.js`, adicione a chave `nova_chave` e suas traduções dentro do objeto `window.translations` para `pt`, `en` e `es`.

## 🧪 Playground (Experimentos)

A seção Playground (`js/experiments.js`) contém simulações interativas renderizadas em `<canvas>`.

*   **Arquitetura:** Cada experimento é uma função que aceita um ID de canvas e um objeto de opções.
*   **Gerenciamento:** O objeto `Experiments` gerencia o ciclo de vida (início, parada, limpeza) para garantir que loops de animação não consumam recursos em segundo plano.
*   **Temas:** O módulo `ExperimentTheme` sincroniza as cores das simulações com as variáveis CSS do tema atual (Claro/Escuro).

**Como adicionar um novo experimento:**
1.  Crie a função do experimento em `Experiments` no `js/experiments.js`.
2.  Garanta que a função retorne um objeto com método `cleanup()` (para `cancelAnimationFrame` e remoção de listeners).
3.  Adicione a interface de controle no HTML (dentro de `#playground-view`).
4.  Registre a chamada em `main.js` ou na interface de usuário.

## 💼 Seção "Me Contrate"

A lógica desta seção está em `js/hire_me.js`. Ela gerencia:
*   Renderização do catálogo de serviços baseada em `servicesData`.
*   Formulários de qualificação e agendamento.
*   Redirecionamento para WhatsApp com mensagem pré-formatada e traduzida.

## 🤝 Contribuição

Contribuições são bem-vindas!
1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua feature (`git checkout -b feature/NovaFeature`).
3.  Faça o Commit (`git commit -m 'Adiciona NovaFeature'`).
4.  Faça o Push (`git push origin feature/NovaFeature`).
5.  Abra um Pull Request.

## 📄 Licença

Este projeto é de uso pessoal e profissional de Pedro Afonso Pinheiro de Paula. O código fonte está disponível para fins de estudo e referência.

---
**Contato:** pedro.app1@proton.me
