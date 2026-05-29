const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "https://taskflow-rho-three.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
