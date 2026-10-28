$nodePath = (Get-Command node -ErrorAction Stop).Source
Start-Process -FilePath $nodePath -ArgumentList ('"' + (Join-Path $PSScriptRoot 'server.cjs') + '"') -WindowStyle Hidden
Start-Process 'http://localhost:4174/'
