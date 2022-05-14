import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.get("/", (req, res) => {
  res.send("hi");
});

export default app;
