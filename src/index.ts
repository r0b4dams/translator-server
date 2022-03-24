import "dotenv/config";
import db from "./db";
import cors from "cors";
import express from "express";
import routes from "./routes";
import { authenticate } from "./middleware";

const PORT = process.env.PORT || 5000;
const app = express();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(authenticate);
app.use(routes);

app.get("/", (_req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});