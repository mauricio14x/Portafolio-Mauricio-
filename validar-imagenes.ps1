# Script de validación de rutas de imágenes
$portfolioPath = "d:\universidad\portafolio\src\data\portfolio.ts"
$publicPath = "d:\universidad\portafolio\public"

Write-Host "=== VALIDACION DE RUTAS DE IMAGENES ===" -ForegroundColor Cyan
Write-Host ""

# Leer portfolio.ts
$content = Get-Content $portfolioPath -Raw

# Extraer todas las rutas de imágenes
$imagePattern = "'/Proyectos/[^']+'"
$matches = [regex]::Matches($content, $imagePattern)

$totalImages = 0
$missingImages = 0
$foundImages = 0

foreach ($match in $matches) {
    $totalImages++
    $rutaRelativa = $match.Value.Trim("'")
    $rutaCompleta = Join-Path $publicPath $rutaRelativa.Replace('/', '\')
    
    if (Test-Path $rutaCompleta) {
        $foundImages++
        # Write-Host "[OK] $rutaRelativa" -ForegroundColor Green
    } else {
        $missingImages++
        Write-Host "[FALTA] $rutaRelativa" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== RESUMEN ===" -ForegroundColor Cyan
Write-Host "Total de imágenes en portfolio.ts: $totalImages"
Write-Host "Imágenes encontradas: $foundImages" -ForegroundColor Green
Write-Host "Imágenes faltantes: $missingImages" -ForegroundColor Red

if ($missingImages -eq 0) {
    Write-Host "`nTODAS LAS IMAGENES EXISTEN!" -ForegroundColor Green
} else {
    Write-Host "`nHay $missingImages imágenes que no existen en el sistema de archivos" -ForegroundColor Yellow
}
