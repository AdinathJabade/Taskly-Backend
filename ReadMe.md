# **Taskly-Backend**

```markdown
- Backend API: [https://Taskly-Backend.onrender.com](https://Taskly-Backend.onrender.com)


# Taskly–Backend

**MyTodo App Backend** handles user authentication and task management for the MyTodo application. It is built with **Node.js, Express, and MongoDB**.

---

## **Features**

- User registration and login with **JWT authentication**
- Add, delete, and retrieve tasks
- Each user sees **only their own tasks**
- Secure APIs for frontend consumption

---

## **Tech Stack**

- Node.js
- Express.js
- MongoDB Atlas
- JWT for authentication
- CORS enabled for frontend connection

---

## **Folder Structure**

Taskly-Backend/
├── server.js # Main server file
├── package.json # Dependencies
├── routes/ # API routes
├── controllers/ # Business logic
├── models/ # Database models
├── .env # Environment variables
└── .gitignore

yaml
Copy code

---

## **Environment Variables (.env)**

PORT=5000
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-secret-key>

yaml
Copy code

---

## **Installation & Usage**

1. Clone the backend repo:
```bash
git clone https://github.com/<AdinathJabade>/Taskly-Backend.git
cd Taskly-Backend
Install dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
npm start
Test the APIs with Postman or connect the frontend.

Deployment
Push the backend repo to GitHub

Deploy on Render (or any Node.js hosting)

Set environment variables on the platform

Example backend API URL: https://Taskly-Backend.onrender.com

CORS should allow frontend origin:

javascript
Copy code
const cors = require("cors");
app.use(cors({ origin: "https://Taskly-Backend.netlify.app" }));
Contributing
Fork the repo

Create a feature branch: git checkout -b feature/YourFeature

Commit changes: git commit -m "Add feature"

Push branch: git push origin feature/YourFeature

Open a pull request

License:
MIT License

Contact:

GitHub: https://github.com/<AdinathJabade>
Email: <adijabade5@gmail.com>