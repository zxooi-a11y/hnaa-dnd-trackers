# HNAA D&D Trackers — Field Codex

A single-page bestiary/encounter tracker for D&D 5e sessions: browse creatures,
build a tracker with HP/conditions/death saves, log encounters, and keep
homebrew monsters and player characters.

Live site: https://zxooi-a11y.github.io/hnaa-dnd-trackers/

## Data & sync

The tracker's state (initiative tracker, activity log, encounter history,
homebrew creatures, player characters) is synced through a small shared row
in a Supabase table (`tracker_state`), so it stays consistent across devices
(desktop, iPad, iPhone) as long as they're online. It also caches to the
browser's `localStorage`, so the page still opens and works offline — it
just won't sync until you're back online.

Access to the Supabase row is currently open (no login), matched to the
anon/publishable key embedded in `index.html`. Don't put anything sensitive
in the tracker.

## Development

It's a single self-contained `index.html` — open it directly in a browser,
or edit and push to `main` to update the live GitHub Pages site.
