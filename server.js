// server.js
const express = require('express');
const connectDB = require('./db');
const tasksRouter = require('./routes/task');


const app = express();
const PORT = 5000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/tasks', tasksRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
