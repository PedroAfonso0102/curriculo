# Relatório de Manutenção e Padronização

**Data:** 25 de Maio de 2025
**Responsáveis:** Frontend Architect & Code Janitor

## 1. Padronização de Fontes (Frontend Architect)

Foi realizada uma análise e padronização do sistema tipográfico do projeto. O objetivo foi eliminar definições hardcoded e unificar a hierarquia visual através de variáveis CSS.

### Ações Realizadas:
- **Criação de Variáveis Semânticas:**
  - `--font-family-mono`: Define a pilha de fontes monoespaçadas (para o Laboratório).
  - `--font-family-serif`: Define a pilha de fontes serifadas (para o Insight Log).
- **Substituição de Valores Hardcoded:**
  - Removidas definições manuais de 'JetBrains Mono', 'Fira Code', 'New York', 'Times New Roman' em `.lab-aesthetic` e `.log-aesthetic`.
  - Substituído `font-size: 18px` por `var(--font-md)` para manter a consistência da escala modular.

### Estado Atual das Fontes:
- **Sans-serif (Padrão):** Inter (Google Fonts) + System UI.
- **Monospace (Lab):** System Monospace (SF Mono, Menlo, Consolas...).
- **Serif (Log):** System Serif (New York, Times New Roman...).

---

## 2. Análise de Código Morto (Code Janitor)

Foi realizada uma varredura estática no código CSS e JS para identificar classes e funções não utilizadas.

### Itens Seguros para Remoção (CSS):
As seguintes classes foram encontradas no `styles.css` mas não possuem referências no HTML ou nos arquivos JavaScript (nem mesmo via construção dinâmica de strings):

1.  **`.calendar-mock` (e filhos):**
    - `.calendar-header`, `.calendar-grid`, `.day-label`, `.day`, `.time-slots` (exceto `.slots-grid` e `.slot-btn` que parecem ser usados no novo fluxo).
    - *Contexto:* O novo fluxo de agendamento em `js/hire_me.js` usa uma estrutura simplificada (`.date-selector-btn`) e não o calendário completo mockado visualmente.

2.  **`.order-summary` (e filhos):**
    - `.summary-row`, `.summary-total`.
    - *Contexto:* Não há referência a este componente de checkout no código atual.

3.  **`.timeline`:**
    - (Se existir no arquivo final, não foi encontrada referência de uso).

### Itens Mantidos (Falso Positivos Verificados):
- **`.confirmation-view`**: Usado dinamicamente em `js/hire_me.js`.
- **`.fade-in` / `.fade-in-up`**: Usados para animações de entrada via JS.
- **`.nav-brand`**: Usado no `index.html`.
- **`.skill-tags`**: Usado no `index.html`.

### Recomendação:
Recomenda-se a remoção segura dos blocos CSS referentes a `Calendar Mock` e `Checkout/Order Summary` na próxima iteração de limpeza, pois representam código legado de versões anteriores do design.
