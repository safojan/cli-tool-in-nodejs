import http from "node:http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3500;

const server = http
  .createServer((req, res) => {})
  .listen(PORT, () => {
    console.log(`lisning to ${PORT}`);
  });
