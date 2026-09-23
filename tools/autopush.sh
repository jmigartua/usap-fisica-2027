#!/bin/zsh
# Push to origin/main whenever a new local commit appears.
#   npm run watch:push          (foreground; Ctrl+C stops it)
#   npm run watch:push:bg       (background; log in .autopush.log, pid in .autopush.pid)
#   npm run watch:push:stop
# Polls every INTERVAL seconds (default 15); pushes only when HEAD is ahead of origin/main and
# nothing is mid-rebase/merge. Never fetches or pulls, so it cannot interfere with local work.
set -u
cd "$(dirname "$0")/.." || exit 1
INTERVAL="${INTERVAL:-15}"
LOG=".autopush.log"
echo "$(date '+%F %T') watcher started (pid $$, every ${INTERVAL}s)" | tee -a "$LOG"
last=""
while true; do
  if [[ -f .git/index.lock || -d .git/rebase-merge || -d .git/rebase-apply || -f .git/MERGE_HEAD ]]; then
    sleep "$INTERVAL"; continue
  fi
  head=$(git rev-parse HEAD 2>/dev/null) || { sleep "$INTERVAL"; continue; }
  remote=$(git rev-parse origin/main 2>/dev/null || echo "")
  if [[ "$head" != "$remote" && "$head" != "$last" ]]; then
    ahead=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)
    if (( ahead > 0 )); then
      if git push -q origin main 2>>"$LOG"; then
        echo "$(date '+%F %T') pushed $ahead commit(s): $(git log -1 --format='%h %s')" | tee -a "$LOG"
        last="$head"
      else
        echo "$(date '+%F %T') push failed for $head (see above); retrying in ${INTERVAL}s" | tee -a "$LOG"
      fi
    fi
  fi
  sleep "$INTERVAL"
done
