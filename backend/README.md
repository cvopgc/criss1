# Backend

FastAPI backend, développement local uniquement (pas de Docker).

Gestion des dépendances et de l'environnement virtuel via [Poetry](https://python-poetry.org/).

## Installation

```
poetry install
```

## Lancer en dev (avec reload)

```
poetry run uvicorn app.main:app --reload --port 8000
```

- Swagger UI : http://localhost:8000/docs
- Health check : http://localhost:8000/api/health
