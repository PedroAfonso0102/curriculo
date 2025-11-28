# Relatório de Auditoria Heurística

**Produto/Serviço:** Pedro Afonso - Currículo Interativo & Portfolio  
**Data da Auditoria:** 18/06/2024  
**Auditor:** Jules (AI Assistant)  
**Dispositivo/Versão:** Análise baseada em Código (HTML/CSS/JS) e Simulação de Renderização

---

## Legenda de Severidade
Para classificar a gravidade dos problemas encontrados, utilizamos a seguinte escala (baseada em Jakob Nielsen):

*   **0 - Sem problema:** Não acredito que seja um problema de usabilidade.
*   **1 - Problema cosmético:** Não precisa ser corrigido, a menos que haja recursos extras disponíveis.
*   **2 - Problema menor:** Correção com baixa prioridade.
*   **3 - Problema maior:** Importante corrigir, deve receber alta prioridade.
*   **4 - Catástrofe de usabilidade:** Imperativo corrigir antes do lançamento.

---

## 1. Resumo Executivo
O site do currículo apresenta uma base sólida de desenvolvimento, com uma estrutura de código limpa e modular. A interface utiliza um sistema de design consistente (cores semânticas, tipografia "Inter") e boas práticas modernas como Dark Mode automático e navegação SPA (Single Page Application).

**Pontos Fortes:**
*   **Performance:** Uso de Vanilla JS e CSS otimizado garante carregamento rápido.
*   **Interatividade:** A seção "Playground" e as transições de visualização enriquecem a experiência.
*   **Localização:** Suporte robusto a 3 idiomas (PT, EN, ES) com persistência de estado.

**Áreas de Atenção:**
*   **Acessibilidade:** Faltam atributos `aria-label` e textos alternativos em alguns ícones e botões interativos, o que compromete a navegação por leitores de tela.
*   **Feedback de Sistema:** Em formulários (Hire Me) e interações complexas (Playground), o feedback visual de ações (loading, sucesso, erro) é por vezes sutil ou dependente de alertas nativos do navegador (`alert()`), o que interrompe o fluxo.
*   **Navegação Mobile:** Embora exista um menu mobile, a densidade de informações em telas pequenas (especialmente na tabela de skills e controles do playground) pode ser problemática.

*   **Pontuação Geral:** 8.5/10 (Bom, com ajustes finos necessários)
*   **Principais Riscos:** Acessibilidade (H1/H4) e Feedback de Erro em Formulários (H9).

---

## 2. Análise das 10 Heurísticas de Nielsen

### H1: Visibilidade do Status do Sistema
*O sistema deve sempre manter os usuários informados sobre o que está acontecendo.*

*   **Observações:**
    *   **Positivo:** O botão de idioma e tema mostra claramente o estado ativo. A navegação destaca a aba atual.
    *   **Negativo:** Ao enviar o formulário "Me Contrate", o feedback é um redirecionamento imediato para o WhatsApp. Se o bloqueador de pop-ups estiver ativo, o usuário pode achar que nada aconteceu. A confirmação local (`renderConfirmation`) aparece *após* a tentativa de abrir a nova aba, o que é bom, mas o redirecionamento "silencioso" pode confundir.
*   **Gravidade (0-4):** [ 2 ]
*   **Evidência:**
    > *Código `hire_me.js`: `window.open(...)` é chamado diretamente no submit. Falta um indicador visual de "Processando..." antes da ação.*

---

### H2: Compatibilidade entre o Sistema e o Mundo Real
*O sistema deve falar a linguagem do usuário, com palavras, frases e conceitos familiares.*

*   **Observações:**
    *   **Positivo:** Termos como "Currículo", "Playground", "Me Contrate" são claros. Ícones (telefone, email, github) são universais.
    *   **Negativo:** Na seção "Playground", os controles técnicos ("Viscosidade", "Difusão", "Amortecimento") são termos de física que podem ser opacos para recrutadores não-técnicos, embora adequados para o contexto de "demonstração técnica".
*   **Gravidade (0-4):** [ 1 ]
*   **Evidência:**
    > *Labels como `params.k` (Rigidez) ou `damping` em `experiments.js` são traduzidos, mas o conceito em si é abstrato.*

---

### H3: Controle e Liberdade do Usuário
*Usuários frequentemente escolhem funções por engano e precisam de uma "saída de emergência".*

*   **Observações:**
    *   **Positivo:** Botões de "Voltar" (`← Voltar`) estão presentes e bem posicionados ao entrar em detalhes de um serviço ou experimento.
    *   **Negativo:** Não há suporte explícito ao botão "Voltar" do navegador (History API). Se o usuário navegar para "Playground" > "Experimento X" e clicar em "Voltar" no navegador, ele pode sair do site em vez de voltar ao menu anterior, pois é uma SPA sem roteamento na URL.
*   **Gravidade (0-4):** [ 3 ]
*   **Evidência:**
    > *Função `switchView` e `openExperiment` apenas alteram `display: none/block` sem `history.pushState`.*

---

### H4: Consistência e Padrões
*Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa.*

*   **Observações:**
    *   **Positivo:** O Design System (variáveis CSS) garante cores e tipografia consistentes.
    *   **Negativo:** Os cards de "Serviços" usam gradientes como fundo de capa, enquanto os itens do "Playground" são ícones minimalistas em grade. Essa diferença visual é intencional, mas cria dois "padrões" de cards clicáveis na mesma interface.
*   **Gravidade (0-4):** [ 1 ]
*   **Evidência:**
    > *`service-card` vs `app-item` no CSS possuem estruturas e comportamentos de hover levemente diferentes.*

---

### H5: Prevenção de Erros
*Melhor do que boas mensagens de erro é um design cuidadoso que evita que problemas ocorram.*

*   **Observações:**
    *   **Positivo:** Inputs de formulário usam tipos corretos (`type="url"`, `type="text"`).
    *   **Negativo:** O formulário de agendamento permite selecionar datas, mas não bloqueia visualmente finais de semana na renderização inicial (apenas via lógica JS `getNextBusinessDays`), prevenindo o erro na raiz, o que é bom. Porém, o campo "Orçamento" é texto livre, permitindo input inválido (letras em vez de números) que será enviado "sujo" para o WhatsApp.
*   **Gravidade (0-4):** [ 2 ]
*   **Evidência:**
    > *Input `name="budget"` é `type="text"`. Poderia ser `type="number"` ou ter máscara de moeda.*

---

### H6: Reconhecimento em vez de Memorização
*Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis.*

*   **Observações:**
    *   **Positivo:** O menu de navegação é fixo (Sticky), mantendo as opções sempre visíveis.
    *   **Negativo:** Ao entrar em um Experimento, o menu principal permanece, mas o contexto de onde você veio ("Playground") é perdido visualmente se não houver breadcrumbs (apenas o botão "Voltar").
*   **Gravidade (0-4):** [ 1 ]
*   **Evidência:**
    > *Header do experimento substitui o dashboard, exigindo que o usuário lembre que está dentro da aba "Experiments" do Playground.*

---

### H7: Flexibilidade e Eficiência de Uso
*Aceleradores — não vistos pelo usuário novato — podem muitas vezes acelerar a interação para o usuário experiente.*

*   **Observações:**
    *   **Positivo:** A troca de idiomas é instantânea e não recarrega a página.
    *   **Negativo:** Falta de atalhos de teclado (ex: `ESC` para fechar modais/experimentos ou setas para navegar na galeria).
*   **Gravidade (0-4):** [ 1 ]
*   **Evidência:**
    > *Nenhum listener de `keydown` encontrado em `main.js` ou `experiments.js` para acessibilidade de teclado.*

---

### H8: Estética e Design Minimalista
*Os diálogos não devem conter informações irrelevantes ou raramente necessárias.*

*   **Observações:**
    *   **Positivo:** Layout muito limpo, uso excelente de espaço em branco (`--space-3xl`), tipografia legível e hierarquia clara (H1 > H2 > H3). A paleta de cores neutra com acentos em azul funciona bem.
    *   **Negativo:** Em telas mobile, o padding lateral pode consumir muito espaço útil, comprimindo o conteúdo de texto.
*   **Gravidade (0-4):** [ 0 ]
*   **Evidência:**
    > *Design System em `styles.css` prioriza `background-color: var(--bg-surface)` e sombras suaves.*

---

### H9: Ajudar os Usuários a Reconhecer, Diagnosticar e Recuperar-se de Erros
*As mensagens de erro devem ser expressas em linguagem simples.*

*   **Observações:**
    *   **Negativo:** O uso de `alert('Por favor, digite seu nome...')` em `hire_me.js` é uma prática datada e intrusiva. Interrompe a navegação e tem visual de "erro de sistema".
*   **Gravidade (0-4):** [ 3 ]
*   **Evidência:**
    > *Linha ~290 em `js/hire_me.js`: `alert('Por favor, digite seu nome antes de continuar.');`*

---

### H10: Ajuda e Documentação
*Embora seja melhor se o sistema puder ser usado sem documentação, pode ser necessário fornecer ajuda.*

*   **Observações:**
    *   **Positivo:** O currículo em si é auto-explicativo. A seção "Hire Me" explica detalhadamente o que está incluso em cada serviço.
    *   **Negativo:** Falta uma seção de FAQ ou um "Sobre este site" mais detalhado para explicar a natureza técnica das demonstrações no Playground.
*   **Gravidade (0-4):** [ 1 ]
*   **Evidência:**
    > *Listas de "O que está incluso" nos serviços são um ótimo exemplo de H10 aplicado.*

---

## 3. Matriz de Priorização (Esforço x Impacto)

| ID do Problema | Descrição Resumida | Esforço (Baixo/Médio/Alto) | Impacto (Baixo/Médio/Alto) | Prioridade Sugerida |
| :--- | :--- | :--- | :--- | :--- |
| **#01 (H3)** | Falta de suporte ao botão "Voltar" (History API) | Médio | Alto | **Imediata** |
| **#02 (H9)** | Uso de `alert()` para validação de formulário | Baixo | Médio | **Imediata** |
| **#03 (H1)** | Feedback visual de redirecionamento WhatsApp | Baixo | Médio | **Curto Prazo** |
| **#04 (H7)** | Navegação por teclado (ESC para fechar) | Baixo | Baixo | **Backlog** |
| **#05 (H5)** | Máscara/Tipo de input no campo Orçamento | Baixo | Baixo | **Backlog** |

---

## 4. Recomendações de Quick Wins
*Melhorias de baixo esforço e alto impacto que podem ser implementadas rapidamente.*

- [ ] **Ação 1 (H9):** Substituir o `alert()` no `hire_me.js` por uma validação HTML5 nativa (`reportValidity()`) ou uma mensagem de erro inline em vermelho abaixo do input.
- [ ] **Ação 2 (H1):** Adicionar um spinner ou texto "Redirecionando..." no botão de envio do formulário antes de abrir a janela do WhatsApp.
- [ ] **Ação 3 (H5):** Alterar o input de orçamento para `<input type="number">` ou adicionar placeholder com formato esperado.
- [ ] **Ação 4 (H7):** Adicionar um listener global para a tecla `Escape` que aciona a função `closeExperiment()` ou `renderCatalog()` quando aplicável.
