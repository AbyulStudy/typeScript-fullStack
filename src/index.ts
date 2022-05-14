import app from "./config/express";

const port = Number(process.env.APP_PORT) || 3001;

app.listen(port, "0.0.0.0", async () => {
  console.log(`Server listening on port : ${port}`);
});
