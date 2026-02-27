# EDTECH

## Tech Stack

### Frontend
- **React** (JSX, JavaScript, HTML, CSS)

### Backend
- **Django** (Python) 

### Database
- **MySQL**

```bash
# Virtual Environment (If venv is not working, delete it and re setup it)
python -m venv venv 
pip install -r requirements.txt
pip install Django

# Frontend
cd frontend 
npm install 
npm run dev

# Backend
cd backend
python manage.py runserver
```

Backend Installation Commands: 
```
# 1. Navigate to backend folder
cd backend

# 2. Install dependencies
npm install

# 3. Start MySQL (if not running)
# Windows: Start from Services
# Mac: brew services start mysql
# Linux: sudo service mysql start

# 4. Create database
mysql -u root -p
# Then paste the SQL from schema.sql

# 5. Create .env file
cp .env.example .env
# Edit .env with your MySQL credentials

# 6. Start server
npm run dev
```
