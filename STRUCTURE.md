# Análise Estrutural e Proposta de Refatoração

## 1. Análise Atual (Diagnóstico)

O projeto encontra-se em um estado híbrido entre um site estático simples (Production) e uma Single Page Application (SPA) para desenvolvimento (Dev Environment).

### Pontos Críticos Identificados:
1.  **Monólito `index.html`:** O arquivo principal acumula responsabilidades de estrutura, estilo (CSS inline para header) e comportamento (JS inline para tema). Isso dificulta a manutenção e a legibilidade.
2.  **Duplicação de Conteúdo:** As traduções existem tanto no `translations.json` (para build estático) quanto no `main.js` (para a SPA `dev.html`). Isso viola o princípio DRY (Don't Repeat Yourself).
3.  **Mistura de Estilos:** O `styles.css` é robusto, mas o `index.html` contém overrides significativos via `<style>`, criando duas fontes de verdade para o design.
4.  **Arquivos Raiz Poluídos:** A raiz do projeto mistura arquivos de fonte (`index.html`, `styles.css`), arquivos de build (`translate.py`), artefatos (`.png`) e documentação.

## 2. Proposta de Arquitetura (Domain/Feature Based)

A proposta visa separar claramente o **Código Fonte** (`src`) do **Produto Final** (`public` ou raiz).

### Estrutura Proposta

```
/
├── .github/              # CI/CD Workflows
├── assets/               # Recursos Estáticos (Imagens, Fontes)
├── css/                  # Estilos Globais
│   └── styles.css        # (Unificado)
├── js/                   # Lógica e Comportamento
│   ├── core/             # Lógica base (Theme, Utils)
│   ├── features/         # Módulos específicos (Playground, Portfolio)
│   ├── data/             # Dados estáticos (JSONs)
│   └── main.js           # Entry point (SPA)
├── pages/                # Páginas HTML (Source)
│   ├── index.html        # Master Template (PT)
│   └── dev.html          # Dev Environment
├── scripts/              # Ferramentas de Build/Manutenção
│   └── translate.py      # Script de Geração
├── translations.json     # Fonte Única de Verdade para Textos
└── index.html            # (Gerado/Linkado) - Mantido na raiz para GitHub Pages
```

*Nota: Para manter a compatibilidade simples com GitHub Pages sem um build step complexo no CI, manteremos os arquivos gerados (`index-en.html`, etc.) na raiz, mas organizaremos os "sources" lógicos.*

### Refatoração Planejada

1.  **CSS Unificado:** Mover todo CSS inline de `index.html` e `dev.html` para `css/styles.css`.
2.  **JS Modular:**
    *   Extrair `theme.js` para ser usado tanto em Prod quanto Dev.
    *   Manter `main.js` focado na lógica da SPA, removendo dados duplicados se possível (ler de JSON seria ideal, mas requer fetch).
3.  **Limpeza:** Remover arquivos de verificação (`.png`, `.py` de teste) e páginas órfãs.

## 3. Justificativa

*   **Escalabilidade:** Novos idiomas ou páginas não exigirão refatoração do core, apenas adição no JSON e rodar o script.
*   **Desacoplamento:** O design (CSS) não depende da estrutura HTML específica, permitindo redesigns mais seguros.
*   **Manutenibilidade:** Desenvolvedores sabem exatamente onde encontrar estilos (`css/`) e scripts (`js/`), sem caçar tags `<style>` perdidas.
