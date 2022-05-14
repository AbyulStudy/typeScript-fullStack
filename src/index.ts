import app from "./config/express";

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, "0.0.0.0", async () => {
  // @ts-ignore
  const host = server.address().address;
  // @ts-ignore
  const port = server.address().port;
  const protocol = port === 80 ? "http://" : "https://";
  console.log(`Server listening at ${protocol}${host}:${port}`);
});
