<div align="center">

# 📋 TaskFlow

**A full-stack project management application built with the MERN stack**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-4F46E5?style=for-the-badge&logo=vercel)](https://taskflow-frontend.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://https://github.com/Athira-16/taskflow)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

---

## 📌 Overview

**TaskFlow** is a full-stack project management web application that enables teams to create, assign, and track tasks in real time. Built entirely from scratch using the **MERN stack** (MongoDB, Express.js, React, Node.js), TaskFlow demonstrates end-to-end development — from REST API design and database modelling to responsive UI and cloud deployment.

The app was designed to solve a real productivity gap: giving individuals and small teams a lightweight, intuitive tool to manage work without the overhead of enterprise software.

> 🚀 **Live:** [taskflow.vercel.app](https://athira-portfolio-site.vercel.app) &nbsp;|&nbsp; 📂 **Repo:** [github.com/athirarajagopalan](https://github.com/athira-16/taskflow)

---

## ✨ Features

### 🗂️ Task & Project Management
- Create, edit, and delete tasks with title, description, priority, and due date
- Organise tasks into **projects/boards** with visual status tracking
- Drag-and-drop or one-click status updates: `To Do → In Progress → Done`

### 👤 User Authentication
- Secure **JWT-based authentication** (register, login, logout)
- Password hashing with **bcrypt**
- Protected routes — only authenticated users can access their data

### 📊 Dashboard & Filtering
- Personalised dashboard showing task summary and progress at a glance
- Filter and sort tasks by **priority**, **status**, or **due date**
- Real-time updates — changes reflect immediately without page reload

### 📱 Responsive UI
- Clean, mobile-first design that works on all screen sizes
- Built with **React** functional components and hooks (`useState`, `useEffect`, `useContext`)

### ☁️ Cloud Deployment
- Frontend deployed on **Vercel**
- Backend deployed via **Node.js** with a production-ready environment
- Database hosted on **MongoDB Atlas**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, JavaScript (ES6+), CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **Deployment** | Vercel (frontend), MongoDB Atlas (DB) |
| **Tools** | Git, npm, REST APIs, Postman |

---

## 🏗️ Architecture

```
taskflow/
├── client/                   # React frontend
│   ├── public/
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level page components
│       ├── context/          # Global state (AuthContext, TaskContext)
│       
│
├── server/                   # Node.js + Express backend
│   ├── controllers/          # Route handler logic
│   ├── models/               # Mongoose schemas (User, Task, Project)
│   ├── routes/               # API route definitions
│   ├── middleware/           # Auth middleware, error handlers
│   └── config/               # DB connection, environment config
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/) v8+
- [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/athira-16/taskflow.git
cd taskflow
```

---

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

The API will run at `http://localhost:5000`

---

### 3. Set Up the Frontend

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the React app:

```bash
npm start
```

The app will open at `http://localhost:3000`

---

## 🔌 API Endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Fetch all tasks for authenticated user |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | Fetch all user projects |
| `POST` | `/api/projects` | Create a new project |
| `PUT` | `/api/projects/:id` | Update a project |
| `DELETE` | `/api/projects/:id` | Delete a project |

> All task and project routes require a valid **JWT token** in the `Authorization: Bearer <token>` header.

---

## 📸 Screenshots

> _Add screenshots here once available_

| Dashboard | Task Board | Task Detail |
|---|---|---|
| ![Dashboard](./screenshots/dashboard.png) | ![Board](./screenshots/board.png) | ![Detail](./screenshots/detail.png) |

---

## 🌐 Live Demo

🔗 **[View Live App →](https://athira-portfolio-site.vercel.app)**

Use these test credentials to explore the app without registering:

```
Email:    demo@taskflow.com
Password: Demo@1234
```

---

## 🧑‍💻 Author

**Athira Rajagopalan**  
Full Stack Developer | Perth, WA, Australia

[![Portfolio](https://img.shields.io/badge/Portfolio-athira--portfolio--site.vercel.app-4F46E5?style=flat-square)](https://athira-portfolio-site.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/athirarajagopalan)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/athira-16)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>
