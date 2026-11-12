# EWA 360 · PC 403

Site do EWA 360 (Experience Builder), publicado pelo GitHub Pages em
https://efficosaneamento.github.io/ewa-360/

| Pasta | App | Páginas |
|---|---|---|
| `sabesp/` | PC 403 - MODELAGEM SABESP 1 (app 1) | Visão geral · Database · Concepções · Indicadores |
| `interno/` | PC 403 - MODELAGEM SABESP (app 0) | as anteriores + Produtividade · Timesheet · Editar |

## Segurança
- **Este repositório não contém dados.** Tem só o código do site (HTML/JS gerados pelo Experience Builder).
- Todos os dados ficam em itens **privados** do ArcGIS Online (efficoutilities), compartilhados com a
  organização e com o grupo SABESP Consult. Sem login, as páginas abrem vazias.
- O login usa o aplicativo OAuth **"EWA 360 (GitHub Pages)"** (clientId público por natureza, só aceita
  redirecionamento para `efficosaneamento.github.io`).
- Não coloque aqui planilhas, exportações, tokens ou senhas.

## Como atualizar
1. No Experience Builder local (`C:\exb`), ajuste o app e clique em **Publicar**.
2. Gere o build de produção: `npm run build:for-download` em `C:\exb\client`.
3. Gere os pacotes e substitua as pastas `sabesp/` e `interno/` (script `atualizar-site.ps1`).
4. `git add -A && git commit -m "Atualização" && git push`.

Código-fonte dos widgets: `C:\exb\client\your-extensions\widgets` (effico-executive, timesheet-pc403,
previsto-realizado-pc403, produtividade-pc403, shared-code/pc403.ts).
