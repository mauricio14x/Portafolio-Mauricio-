# Script para generar inventario completo de imágenes
$proyectosPath = "d:\universidad\portafolio\public\Proyectos"
$output = "=== INVENTARIO COMPLETO DE IMAGENES ===`n`n"

$proyectos = Get-ChildItem -Path $proyectosPath -Directory

foreach ($proyecto in $proyectos) {
    $output += "PROYECTO: $($proyecto.Name)`n"
    $output += "=" * 50 + "`n"
    
    $categorias = @('Fotos', 'Planimetria', 'Maqueta', 'maquetas', 'Detalles', 'Detalle')
    
    foreach ($cat in $categorias) {
        $catPath = Join-Path $proyecto.FullName $cat
        if (Test-Path $catPath) {
            $archivos = Get-ChildItem -Path $catPath -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp|gif)$' }
            if ($archivos.Count -gt 0) {
                $output += "`n$cat ($($archivos.Count) archivos):`n"
                foreach ($archivo in $archivos) {
                    $output += "  - $($archivo.Name)`n"
                }
            }
        }
    }
    $output += "`n"
}

$output | Out-File "d:\universidad\portafolio\inventario-imagenes.txt" -Encoding UTF8
Write-Host "Inventario generado en: d:\universidad\portafolio\inventario-imagenes.txt"
