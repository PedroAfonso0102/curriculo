Este documento consolida toda a reestruturação estratégica, técnica e operacional debatida. Ele serve como a "Constituição" do seu negócio a partir de hoje.

Salve este arquivo como `MANUAL_DE_OPERACOES_E_ESTRATEGIA.md`.

***

# MANUAL DE OPERAÇÕES E ESTRATEGIA (PLAYBOOK)
**Versão:** 2.0 (Pivotagem Híbrida)
**Data:** 23/11/2025
**Perfil:** Especialista em Experiência Digital (Dev Frontend + Produtora Visual)

---

## 1. POSICIONAMENTO E IDENTIDADE
Você não vende "código" nem "fotos". Você vende **Ativos Digitais de Alta Performance e Estética**.
* **O Diferencial:** A união rara de *Engenharia de Performance* (Vanilla JS) com *Direção de Arte* (Fotografia/Vídeo).
* **A Promessa:** Sites que carregam instantaneamente (<1s) e visual que converte.
* **O Inimigo:** Templates lentos (WordPress/Wix) e fotos de banco de imagem.
* **Filosofia:** "Estética não é cosmética, é função". Recusa de projetos visualmente pobres.

---

## 2. CATÁLOGO DE PRODUTOS (ESCOPO FECHADO)

### A. High-Ticket (Desenvolvimento Artesanal)
**1. Landing Page "Speed-First"**
* **Stack:** HTML5, CSS3, JS Vanilla. (Zero Frameworks pesados).
* **Valor:** Alta margem/giro rápido.
* **Cliente Ideal:** Investidores de Tráfego Pago (Google/Meta Ads).
* **Argumento de Venda:** "Cada 100ms de atraso custa 1% em vendas. Meu código recupera esse dinheiro."

**2. Storefront Customizado (Frontend E-commerce)**
* **Stack:** JS Vanilla (Interface) + APIs Terceiras (Checkout/Pagamento).
* **Limitação Rígida:** Você coda a vitrine e o carrinho visual. **Não** coda backend de segurança/banco de dados crítico (ainda).
* **Segurança:** Toda transação financeira ocorre em ambiente externo (Stripe/PagSeguro/Shopify Lite).

### B. Mid-Ticket (Implementação)
**3. Setup de Plataforma (Nuvemshop/Shopify)**
* **Escopo:** Configuração visual + CSS Custom + Cadastro de Produtos.
* **Regra de Ouro:** Só aceitar se incluir o **Pacote Visual**. Não entregar site template com foto ruim.

### C. Upsell Obrigatório (O Lucro Real)
**4. Pacote "Visual Asset"**
* **Serviço:** Fotografia de Produto (Still/Ambientada) + Vídeo (Reels/Institucional).
* **Estratégia:** Elimina a dependência do cliente enviar material. Aumenta o Ticket Médio em 40-60%.
* **Logística:** Cobrado à parte ou como "Adicional Premium".

---

## 3. PROTOCOLOS TÉCNICOS E OPERACIONAIS

### A. Validação de Performance (O Teste do "Celular Ruim")
Como não usamos servidor de estresse, a validação é local via Chrome DevTools:
1.  Aba **Performance** -> **Network:** "Fast 3G".
2.  **CPU Throttling:** "6x Slowdown".
3.  **Critério de Aprovação:** O site deve manter 60fps na rolagem e busca instantânea nessas condições. Se travar, o código JS deve ser refatorado (Debounce/Virtualização).

### B. Gestão de Mudanças (O "Code Freeze")
O desenvolvimento Vanilla é rígido. Alterações custam caro.
1.  **Fase 1 (Design):** Figma/Adobe XD. Revisões ilimitadas (dentro do razoável).
2.  **Fase 2 (Aprovação):** Assinatura formal do layout.
3.  **Fase 3 (Código):** **Zero alterações estruturais.** Mudança de layout após início do código gera Orçamento Adicional de Refação.

### C. Segurança Operacional (Dev vs. Estúdio)
* **Hardware:** Separação física. HDs externos para backup de mídia (RAW/4K).
* **Ambiente:** Não codar em set de filmagem. Não editar foto em tela de notebook não calibrada.

---

## 4. GESTÃO DE RISCO E JURÍDICO

### A. Cláusula Anti-Mora (O "Atraso do Cliente")
> *"O prazo de execução (ex: 20 dias) inicia-se contagem **apenas** após o recebimento de 100% do material (briefing, textos, logos) por parte da CONTRATADA. Atrasos na entrega do material pausam o cronograma. Atrasos superiores a 15 dias exigem reagendamento conforme disponibilidade."*

### B. Cláusula de Direitos de Imagem
> *"A obtenção de autorização de uso de imagem de funcionários, modelos ou terceiros é de responsabilidade exclusiva do CONTRATANTE. A CONTRATADA não se responsabiliza por disputas trabalhistas ou civis referentes ao uso de imagem no site."*

### C. Cláusula de Limitação Técnica
> *"O serviço limita-se ao desenvolvimento da interface (Frontend). A integridade, segurança e processamento de pagamentos são de responsabilidade das plataformas terceiras integradas (Gateways)."*

---

## 5. SUPORTE E SLA (NÍVEL DE SERVIÇO)

**Regra dos 20 Minutos:** Jamais atender chamados ou mexer em código crítico imediatamente após chegar de um shooting/viagem (exausto). Risco de erro fatal.

**Matriz de Prioridade:**
| Nível | Definição | Prazo de Resposta |
| :--- | :--- | :--- |
| **Crítico** | Site fora do ar, Checkout travado. Perda de R$. | 4 a 6 horas úteis. |
| **Alto** | Bug visual mobile, erro de texto grave. | 24 horas úteis. |
| **Baixo** | Alteração estética ("Aumentar logo"). | Fila semanal (3-5 dias). |

**Canal Oficial:** Apenas Texto (Email/Ticket). Áudios de WhatsApp não valem como documentação de erro.

---

## 6. ROADMAP DE EVOLUÇÃO (PRÓXIMOS PASSOS)

1.  **Imediato:** Criar o **Boilerplate Vanilla** (Estrutura de pastas padrão) para reduzir tempo de setup inicial.
2.  **Curto Prazo:** Padronizar Contrato com as novas cláusulas.
3.  **Médio Prazo:** Estudo de MySQL/Backend para evoluir de "Storefront" para "Sistemas Web Completos" (aumentar LTV).

---

**Fim do Documento.**
*Este manual deve ser relido antes de iniciar qualquer nova negociação.*

---

**Próximo Passo:**
Como solicitado, vou iniciar a criação do seu **Boilerplate (Estrutura de Código)**. Aguarde a próxima resposta com a estrutura de pastas e arquivos.