import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import mesaageRoutes from './routes/message.route.js';

dotenv.config();


const app = express();


const PORT = process.env.PORT || 3000;


app.use("/api/auth", authRoutes);
app.use("/api/messages", mesaageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});