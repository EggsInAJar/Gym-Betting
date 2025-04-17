# Gym Betting Web Application

A full-stack web application for gym betting using React with Material-UI, Flask, and MongoDB.

## Project Structure

```
gym-betting/
├── frontend/          # React frontend application with Material-UI
├── backend/           # Flask backend server
└── README.md         # Project documentation
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Start the Flask server:
   ```bash
   python app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- Frontend: 
  - React.js
  - Material-UI (MUI) for UI components
  - React Router for frontend routing
  - Axios for API calls
- Backend: 
  - Flask (Python)
  - Flask-CORS for handling CORS
- Database: 
  - MongoDB
  - PyMongo for MongoDB integration 