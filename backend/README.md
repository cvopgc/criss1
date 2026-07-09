# Backend

FastAPI backend, développement local uniquement (pas de Docker).

## Installation

```
python -m venv .venv
.venv\Scripts\activate        # Windows
source .venv/bin/activate     # macOS/Linux
pip install -e .
```

## Lancer en dev (avec reload)

```
uvicorn app.main:app --reload --port 8000
```

- Swagger UI : http://localhost:8000/docs
- Health check : http://localhost:8000/api/health
