<#
.SYNOPSIS
  Renders public\images\og\og-default.png (1200x675 social preview card).

.DESCRIPTION
  The default Open Graph image is a typographic brand card drawn entirely with GDI+:
  the deep-purple gradient, dot grid, soft light circles and the FinanceQuizNexa
  wordmark in the same palette as the site and the quiz sub-site.

  Run it again whenever the brand name, tagline or palette changes:

      powershell -ExecutionPolicy Bypass -File ./scripts/make-og-default.ps1
#>

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$outFile = Join-Path $root 'public\images\og\og-default.png'

$brandName = 'FinanceQuiz'
$brandTail = 'Nexa'
$tagline = 'Clear, practical money education'
$gold = [System.Drawing.Color]::FromArgb(255, 201, 40)

$w = 1200
$h = 675

$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background: brand gradient + dot grid + soft light circles.
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 0, $w, $h)),
  [System.Drawing.Color]::FromArgb(139, 92, 246),
  [System.Drawing.Color]::FromArgb(26, 8, 42),
  [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
)
$g.FillRectangle($bgBrush, 0, 0, $w, $h)

$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(46, 255, 255, 255))
for ($dy = 0; $dy -lt $h; $dy += 28) {
  for ($dx = 0; $dx -lt $w; $dx += 28) {
    $g.FillEllipse($dotBrush, $dx, $dy, 3.2, 3.2)
  }
}

$g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(20, 255, 255, 255))), 820, -110, 440, 440)
$g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(16, 255, 255, 255))), -120, 340, 520, 520)

# Wordmark: "FinanceQuiz" in white, "Nexa" in the brand gold — joined, no space.
$titleFont = New-Object System.Drawing.Font('Segoe UI', 104, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$nameSize = $g.MeasureString($brandName, $titleFont)
$tailSize = $g.MeasureString($brandTail, $titleFont)
$fullNameSize = $g.MeasureString($brandName + $brandTail, $titleFont)
# MeasureString adds one trailing-space advance; removing it keeps the wordmark joined.
$trailing = $nameSize.Width + $tailSize.Width - $fullNameSize.Width
$titleY = 250
$titleX = ($w - ($fullNameSize.Width - $trailing)) / 2

$g.DrawString($brandName, $titleFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)), [single]$titleX, [single]$titleY)
$g.DrawString($brandTail, $titleFont, (New-Object System.Drawing.SolidBrush($gold)), [single]($titleX + $fullNameSize.Width - $tailSize.Width), [single]$titleY)

# Gold rule + tagline under the wordmark.
$ruleWidth = 96
$ruleY = $titleY + $nameSize.Height + 6
$ruleBrush = New-Object System.Drawing.SolidBrush($gold)
$g.FillRectangle($ruleBrush, [single](($w - $ruleWidth) / 2), [single]$ruleY, [single]$ruleWidth, [single]4)

$tagFont = New-Object System.Drawing.Font('Segoe UI', 34, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$tagBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(214, 222, 208, 240))
$tagSize = $g.MeasureString($tagline, $tagFont)
$g.DrawString($tagline, $tagFont, $tagBrush, [single](($w - $tagSize.Width) / 2 + 8), [single]($ruleY + 34))

$g.Dispose()
$bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Wrote $((Resolve-Path $outFile))" -ForegroundColor Green
