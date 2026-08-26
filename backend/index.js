const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "StudyBuddy backend is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});