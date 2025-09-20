import express from "express";

const app = express();

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

export { app };
