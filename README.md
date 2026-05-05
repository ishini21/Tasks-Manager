# Task Manager Backend

## 📌 Overview

This is the backend API for the Task Manager application built using **Node.js, Express, and MongoDB**.
It provides secure RESTful endpoints for authentication and task management.

---

## 🚀 Features

* 🔐 User Authentication (JWT)
* 📋 Task CRUD Operations
* 🛡️ Security:

  * Input validation
  * Rate limiting
  * Helmet (secure headers)
  * CORS protection
* ⚡ RESTful API Design

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Express Middleware

---

## 📦 Installation (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager-backend.git
cd task-manager-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create `.env`:

```env
PORT=
MONGO_URI=
JWT_SECRET=
FRONTEND_URL=
```

---

### 4️⃣ Run server

```bash
npm run dev
```

---

## 🌐 Live Deployment

* 🔗 Backend (Railway):
  https://tasks-manager-production-5448.up.railway.app

---

## 🔗 API Base URL

```
https://tasks-manager-production-5448.up.railway.app/api
```

---

## 📌 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 📋 Task Routes

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create task   |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

---

## 🔐 Security Implementation

* **JWT Authentication:** Secures protected routes
* **CORS:** Allows only trusted frontend origins
* **Rate Limiting:** Prevents abuse and brute-force attacks
* **Helmet:** Adds secure HTTP headers
* **Input Validation:** Ensures clean request data

---

## 📁 Project Structure

```
src/
 ├── routes/
 ├── controllers/
 ├── models/
 ├── middleware/
```

---

## 📌 Notes

* Sensitive data is not committed
* `.env.example` is provided
* Follows modular architecture

---

## 👩‍💻 Author

Ishini Shavindhya
Software Engineering Undergraduate
