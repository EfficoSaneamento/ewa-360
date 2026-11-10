# Gera os pacotes dos apps (Experience Builder local) e atualiza as pastas sabesp/ e interno/ deste site.
# Pré-requisitos: apps publicados no builder local e "npm run build:for-download" rodado em C:\exb\client.
# Uso: powershell -ExecutionPolicy Bypass -File .\atualizar-site.ps1
$ErrorActionPreference = 'Stop'
$site = $PSScriptRoot
$clientId = 'lNYt5AOFsvNkreve'   # aplicativo OAuth "EWA 360 (GitHub Pages)"
$tmp = Join-Path $env:TEMP "ewa360-pacotes"
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory $tmp | Out-Null

Push-Location C:\exb\server
# production: widgets e shared-code saem do build de produção (client\dist-download), não do "npm start" (client\dist)
$envAnterior = $env:NODE_ENV
$env:NODE_ENV = 'production'
try {
  $js = "const d=require('./src/middlewares/dev/apps/app-download');(async()=>{for(const [id,n] of [['1','sabesp'],['0','interno']]){await d.zipApp(id,process.argv[1]+'/'+n+'.zip','$clientId');console.log('pacote',n,'ok')}})().catch(e=>{console.error(e.message);process.exit(1)})"
  node -e $js $tmp
  if ($LASTEXITCODE -ne 0) { throw 'Falha ao gerar os pacotes (os apps estão publicados no builder?)' }
} finally { $env:NODE_ENV = $envAnterior; Pop-Location }

foreach ($n in 'sabesp', 'interno') {
  $dest = Join-Path $site $n
  if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
  Expand-Archive -LiteralPath (Join-Path $tmp "$n.zip") -DestinationPath $dest
  # o pacote às vezes vem com uma pasta raiz: sobe o conteúdo
  $itens = Get-ChildItem $dest
  if ($itens.Count -eq 1 -and $itens[0].PSIsContainer -and -not (Test-Path (Join-Path $dest 'index.html'))) {
    Get-ChildItem $itens[0].FullName -Force | Move-Item -Destination $dest
    Remove-Item $itens[0].FullName -Recurse -Force
  }
  # arquivos do servidor IIS e service worker não servem no GitHub Pages
  Remove-Item (Join-Path $dest 'web.config') -ErrorAction SilentlyContinue
  # sem o código compartilhado os widgets da Effico não carregam
  if (-not (Get-ChildItem (Join-Path $dest 'cdn') -Recurse -Filter pc403.js | Where-Object { $_.FullName -match 'shared-code' })) {
    throw "$n sem widgets/shared-code/pc403.js: rode 'npm run build:for-download' em C:\exb\client e tente de novo"
  }
  Write-Host "$n atualizado: $((Get-ChildItem $dest -Recurse -File).Count) arquivos"
}
Remove-Item $tmp -Recurse -Force
Write-Host 'Pronto. Confira e depois: git add -A; git commit -m "Atualização"; git push'
