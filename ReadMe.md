# 📚 Book Management App - Backend

This is the backend for the Book Management App, built using **Node.js**, **Express**, and **MongoDB** with **Mongoose**. It handles all book-related operations (CRUD) and integrates with a pre-built authentication system for user management and authorization.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **TypeScript**
- **Multer** (for image uploads)
- **JWT Authentication** (integrated via pre-built auth middleware)

---

## 📁 Project Structure

```
BOOK_BACKEND/
├── dist/                    # Compiled JS output
├── node_modules/
├── src/
│   ├── controllers/         # Auth and Book logic (create, update, delete, etc.)
│   ├── middleware/          # Auth, Error, Route, Upload middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express route handlers
│   ├── utils/               # Multer config, helpers
│   └── index.ts             # Main app entry point
├── uploads/                 # Uploaded book images (served statically)
├── .env                     # Environment variables (HIDDEN)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md                # This file
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/priyavart5/book_backend.git
cd book_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb+srv://priyavart5:Enter%40512002@pvcluster.tg4e7.mongodb.net/book_assessment?retryWrites=true&w=majority&appName=pvCluster
JWT_SECRET=32e7d32559939f1d47d088894e192500f59458c26c2e66cc931c12cd20fda83d
```

### 4. Run the server

For development (with hot-reload):

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

---

## 📤 Image Uploads

Uploaded images are stored in the `/uploads` directory and served statically at:

```
http://localhost:5000/uploads/<image-name>
```

Make sure this directory exists, or it will be auto-created on upload.

---

## 🔐 Authentication

Authentication is handled via a pre-built middleware using JWT. Ensure you attach the token to API requests using the `Authorization: Bearer <token>` header.

---

## 📚 API Endpoints

| Method | Endpoint             | Description                | Auth |
|--------|----------------------|----------------------------|------|
| GET    | `/api/books`         | Fetch all user books       | ✅   |
| POST   | `/api/books`         | Add a new book (with image)| ✅   |
| PUT    | `/api/books/:id`     | Update book details        | ✅   |
| DELETE | `/api/books/:id`     | Delete a book              | ✅   |
| PATCH  | `/api/books/:id`     | Toggle favourite           | ✅   |

---

## 🛠️ Book Object Schema

```ts
{
  _id: string,
  image: string,
  title: string,
  author: string,
  description: string,
  user: string,       // Reference to User
  favourite: boolean,
  createdAt: string,
  updatedAt: string
}
```

---

## 🧪 Testing

Use Postman or your frontend to interact with the API. Ensure your JWT token is attached in headers.

---

## 🙌 Acknowledgements

- Built by Priyavart Vashisht.

---
