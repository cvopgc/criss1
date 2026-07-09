# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This repository is currently an **empty scaffold** — no application code, no build tooling, no
package manifests (`package.json`, `requirements.txt`, etc.) exist yet. The placeholder files
under `backend/` and `frontend/` (each named `git-*` and containing only "Bonjour parce que git
ne veut pas de dossier vide") exist solely so git keeps the empty directories tracked; they are not
real modules and should be deleted/replaced once real code is added to that directory rather than
edited.

Intended layout (per `Instructions/create1-architecture`):
- `backend/app/api/` — API layer (Python)
- `backend/app/core/` — core/business logic (Python)
- `backend/app/tests/` — backend tests
- `frontend/src/components/` — frontend components (Node/JS)

Since there is no build, lint, or test tooling configured yet, there are no commands to document.
When the first real backend or frontend code is added (e.g. a `requirements.txt`, `pyproject.toml`,
or `package.json`), update this file with the actual build/lint/test/run commands.

## Secrets

`.env` at the repo root holds credentials (GitHub username/password and a placeholder API key
section) and is correctly excluded via `.gitignore` — do not remove it from `.gitignore` or commit
its contents. Never print or echo the contents of `.env` back into chat or into files that get
committed.

## Remote

The local repo is connected to `https://github.com/cvopgc/criss1.git` (branch `main`).
