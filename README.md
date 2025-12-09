#ChatBug – Real-Time Chat Application

ChatBug is a modern, secure, full-stack real-time chat application built using React, Node.js, Socket.io, and MongoDB. It provides instant messaging, online user tracking, profile management, and seamless communication with a clean UI.

🚀 Features

✔️ Real-time messaging using Socket.io
✔️ Online/offline user status
✔️ Optimistic UI message updates
✔️ Profile picture upload with Cloudinary
✔️ JWT-based authentication
✔️ Protected routes and role-based access
✔️ Sound notification for incoming messages
✔️ Responsive and modern UI design
✔️ Contact list + chat history
✔️ Toast notifications for actions
✔️ Hosted backend and frontend on Railway

🏗️ Tech Stack
Frontend
React.js + Vite
Zustand (state management)
TailwindCSS
Socket.io-client
Axios
Backend
Node.js + Express
MongoDB + Mongoose
Socket.io (websocket server)
JWT Authentication
Cloudinary (image uploads)
Nodemailer / Resend (emails - optional)

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/tanmaypakhira/chatBug.git
cd chatBug

2️⃣ Backend Setup
cd backend
npm install


Rename .env.example to .env and update your values:

PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx


Start backend:
npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

Open browser:
http://localhost:5173

🔁 Real-Time Messaging Flow
Client -> Socket.io -> Server
Server stores message in DB
Server emits `newMessage` to receiver
Receiver UI updates instantly

📂 Project Structure
chatBug/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   └── server.js
└── frontend/
    ├── components/
    ├── pages/
    ├── store/
    ├── lib/
    └── main.jsx

🌐 Deployment

This app is deployed on Railway
Frontend and backend run on the same domain with /api proxy routing.

🛡️ Security Highlights

🔒 HTTP-only Cookies for JWT
🚫 Protected private routes
📡 Secure socket authentication
🛠️ Server-side input validation

🧑‍💻 Author

Tanmay Pakhira
📧 chatbug@resend.dev

🔗 GitHub: https://github.com/tanmaypakhira

⭐ Support the Project

If you like this project, consider giving it a star ⭐ on GitHub!
