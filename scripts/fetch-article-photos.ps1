<#
.SYNOPSIS
  Downloads the Pexels photography used by the article cards and hero images.

.DESCRIPTION
  Pexels images are free for commercial use under the Pexels Licence
  (https://www.pexels.com/license/) and are self-hosted, so the site makes no
  third-party image request at runtime. Each photo is requested straight from
  the Pexels CDN cropped to 1200x675, which keeps card and social images 16:9
  without any local re-encoding.

  The table below is the source of truth for which photo belongs to which
  article. Each id was chosen to match that article's current title, not just
  its topic. Change an id here, re-run the script, then rebuild.

  Run:  powershell -ExecutionPolicy Bypass -File ./scripts/fetch-article-photos.ps1
#>

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$outDir = Join-Path $root 'public\images\photos'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$creditPath = Join-Path $PSScriptRoot 'photo-credits.csv'

# slug => Pexels photo id.
$photos = [ordered]@{
  # Compound Interest: The Engine Behind Long-Term Wealth
  'how-compound-interest-works'           = 30711884  # upward trend made of stacked coins
  # Investing for Beginners: A First-Principles Roadmap
  'beginners-guide-to-investing'           = 36781553  # working the numbers in a notebook
  # Emergency Funds: The Buffer That Turns Crises Into Inconveniences
  'how-to-build-an-emergency-fund'         = 7680465  # clip-top jar with a rolled note
  # Saving on Autopilot: Systems That Beat Willpower
  'smart-ways-to-save-money'               = 7681265  # money app and graphs on the sofa
  # Mutual Funds Explained: Structure, Costs and How to Choose
  'understanding-mutual-funds'             = 7947703  # pie chart showing allocation
  # Credit Scores Decoded: What Lenders Actually Measure
  'what-is-a-credit-score'                 = 7085773  # wallet opened to reveal cards
  # A Monthly Budget That Survives the Month
  'how-to-create-a-monthly-budget'         = 5900184  # cash, planner and calculator
  # How the Stock Market Works: Exchanges, Indices and Risk
  'stock-market-basics-for-beginners'      = 33620019 # the New York Stock Exchange
  # Inflation and Your Money: Real Returns and Purchasing Power
  'how-inflation-affects-your-money'       = 264636   # supermarket prices on the shelf
  # Financial Planning in Your Twenties: The Decade That Compounds
  'financial-planning-for-young-adults'    = 6348140  # planning the decade ahead
  # Credit Cards Done Right: Grace Periods, Interest and Habits
  'how-to-use-credit-cards-responsibly'    = 7755457  # card handed over at the till
  # The True Cost of Credit: Rates, Tenure and Total Repayment
  'understanding-borrowing-and-interest-rates' = 8292880  # reading the rate sheet
  # Tax Fundamentals: Brackets, Deductions and After-Tax Returns
  'tax-basics-everyone-should-know'        = 6863246  # return filed on a laptop
  # Cash Flow for Small Business: Why Profit Isn't Money
  'how-small-businesses-manage-cash-flow'  = 3801422  # till open in a small café
}

function Test-ValidJpeg([string]$path) {
  if (-not (Test-Path $path)) { return $false }
  if ((Get-Item $path).Length -lt 20KB) { return $false }
  $magic = Get-Content -Path $path -Encoding Byte -TotalCount 2 -ErrorAction SilentlyContinue
  return ($magic.Count -eq 2 -and $magic[0] -eq 0xFF -and $magic[1] -eq 0xD8)
}

$credits = @()
foreach ($slug in $photos.Keys) {
  $id = $photos[$slug]
  $out = Join-Path $outDir "$slug.jpg"
  $status = 'ok'
  try {
    $url = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=675"
    Invoke-WebRequest -Uri $url -OutFile $out -TimeoutSec 90 -UserAgent 'FinanceQuizNexa/1.0 (asset fetch)'
    if (-not (Test-ValidJpeg $out)) {
      $status = 'invalid'
      Remove-Item $out -Force
    }
    Write-Host ("{0,-8} {1}  pexels/{2}" -f $status, $slug, $id)
  } catch {
    $status = "error: $($_.Exception.Message)"
    Write-Host ("{0,-8} {1}" -f $status, $slug)
  }
  $credits += [pscustomobject]@{
    slug = $slug; pexels_id = $id; status = $status
    source = "https://www.pexels.com/photo/$id/"; license = 'Pexels Licence'
  }
  Start-Sleep -Seconds 2
}

$credits | Export-Csv -Path $creditPath -NoTypeInformation -Encoding UTF8
Write-Host 'Credits written to scripts\photo-credits.csv'
