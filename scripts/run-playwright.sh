#!/usr/bin/env bash
# Run Playwright with local browser + shared-library workarounds for WSL
# when system packages cannot be installed with sudo.
set -euo pipefail

export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$HOME/.cache/ms-playwright}"

LOCAL_LIBS="/tmp/pw-libs/root/usr/lib/x86_64-linux-gnu"
if [[ -d "$LOCAL_LIBS" ]]; then
  export LD_LIBRARY_PATH="${LOCAL_LIBS}${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
fi

cd "$(dirname "$0")/.."
exec npx playwright test "$@"
