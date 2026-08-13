# FastAPI + React Demo

This workspace contains a small demo app with:

- FastAPI backend serving JSON data on port 8000
- React frontend on port 5173
- Simple CORS setup so the frontend can call the backend

## Run the backend

```bash
cd backend
python3 -m pip install --break-system-packages -r requirements.txt
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## Run the frontend

Open a second terminal:

```bash
cd frontend
. "$HOME/.nvm/nvm.sh"
nvm use 20
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

- http://localhost:5173

The page fetches data from:

- http://localhost:8000/api/health
- http://localhost:8000/api/message
- http://localhost:8000/api/items

## What it does

The React app displays a health status message and a short list of products loaded from the FastAPI API.
