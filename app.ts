import express from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 4040;

app.use(express.json());
app.use(cors());

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
