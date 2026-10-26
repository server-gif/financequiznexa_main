<#
.SYNOPSIS
  Renders every shipped brand asset from the single logo master.

.DESCRIPTION
  The FinanceQuizNexa emblem is a raster illustration, so each surface gets its
  own pre-sized PNG instead of one oversized file scaled by the browser. The
  artwork is always placed inside the brand's rounded purple tile (the emblem
  itself has a transparent background, which reads as a loose sticker):

    public/images/brand/financequiznexa-logo.png   192px  header + footer mark, app splash
    public/favicon.png                              48px   browser tab icon
    public/apple-touch-icon.png                    180px   iOS / Android home screen
    scripts/assets/financequiznexa-logo-box-512.png        tile master for the OG card

  apple-touch-icon is drawn full-bleed because iOS applies its own corner mask.

  The flat master lives in scripts\assets\ (never deployed) at 512px, extracted
  from the brand SVG that was supplied for the site — that SVG is a wrapper
  around a bitmap, so there is nothing vector about it to keep.

  Run it again if the artwork or the tile colour changes:

      powershell -ExecutionPolicy Bypass -File ./scripts/make-brand-assets.ps1
#>

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$masterPath = Join-Path $PSScriptRoot 'assets\financequiznexa-logo-512.png'
if (-not (Test-Path $masterPath)) { throw "Missing logo master: $masterPath" }

# Tile palette: brand purple fading to the site's near-black.
$tileTop = [System.Drawing.Color]::FromArgb(91, 33, 182)    # #5B21B6
$tileMid = [System.Drawing.Color]::FromArgb(45, 10, 87)
$tileEnd = [System.Drawing.Color]::FromArgb(15, 2, 26)

$master = New-Object System.Drawing.Bitmap($masterPath)

# Trim to the visible artwork so the tile padding is exact.
$minX = $master.Width; $minY = $master.Height; $maxX = -1; $maxY = -1
for ($y = 0; $y -lt $master.Height; $y += 2) {
  for ($x = 0; $x -lt $master.Width; $x += 2) {
    if ($master.GetPixel($x, $y).A -gt 8) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
$artRect = New-Object System.Drawing.Rectangle($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
$art = $master.Clone($artRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$master.Dispose()

function New-Logo([int]$size, [single]$radiusRatio, [single]$pad) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  if ($radiusRatio -gt 0) {
    $radius = [single]($size * $radiusRatio)
    $d = $radius * 2
    $tile = New-Object System.Drawing.Drawing2D.GraphicsPath
    $tile.AddArc(0, 0, $d, $d, 180, 90) | Out-Null
    $tile.AddArc($size - $d, 0, $d, $d, 270, 90) | Out-Null
    $tile.AddArc($size - $d, $size - $d, $d, $d, 0, 90) | Out-Null
    $tile.AddArc(0, $size - $d, $d, $d, 90, 90) | Out-Null
    $tile.CloseFigure()
  } else {
    $tile = New-Object System.Drawing.Drawing2D.GraphicsPath
    $tile.AddRectangle((New-Object System.Drawing.Rectangle(0, 0, $size, $size)))
  }

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Rectangle(0, 0, $size, $size)), $script:tileTop, $script:tileEnd,
    [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
  $blend = New-Object System.Drawing.Drawing2D.ColorBlend(3)
  $blend.Colors = [System.Drawing.Color[]]@($script:tileTop, $script:tileMid, $script:tileEnd)
  $blend.Positions = [single[]]@(0.0, 0.55, 1.0)
  $brush.InterpolationColors = $blend
  $g.FillPath($brush, $tile)
  $brush.Dispose()

  # Faint top-edge rim keeps the tile off the page background.
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 255, 255, 255), [single]([math]::Max(1, $size * 0.006)))
  $g.DrawPath($pen, $tile)
  $pen.Dispose()
  $tile.Dispose()

  $inner = $size * (1 - 2 * $pad)
  $scale = [math]::Min(($inner / $script:art.Width), ($inner / $script:art.Height))
  $dw = [single]($script:art.Width * $scale)
  $dh = [single]($script:art.Height * $scale)
  $g.DrawImage($script:art, [single](($size - $dw) / 2), [single](($size - $dh) / 2), $dw, $dh)
  $g.Dispose()
  return $bmp
}

function Save-Logo([string]$relative, [int]$size, [single]$radiusRatio, [single]$pad) {
  $outPath = Join-Path $root $relative
  New-Item -ItemType Directory -Force -Path (Split-Path $outPath) | Out-Null
  $bmp = New-Logo $size $radiusRatio $pad
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host ("{0,-48} {1}x{1}  {2} KB" -f $relative, $size, [int]((Get-Item $outPath).Length / 1KB))
}

# Tile master first: scripts/assets/ is not deployed, the OG card script reads it.
Save-Logo 'scripts\assets\financequiznexa-logo-box-512.png' 512 0.15 0.10
Save-Logo 'public\images\brand\financequiznexa-logo.png'    192 0.15 0.10
Save-Logo 'public\favicon.png'                               48 0.15 0.10
Save-Logo 'public\apple-touch-icon.png'                     180 0.00 0.10
$art.Dispose()
