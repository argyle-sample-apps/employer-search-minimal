import axios from "axios";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { getAuthHeaders } from "./utils.js";

dotenv.config();

const port = 3000;
const app = express();

app.use(cors());

axios.defaults.baseURL = "https://api-sandbox.argyle.com/v2";
axios.defaults.headers = getAuthHeaders();

app.post("/api/user", (_req, res) => {
  axios
    .post("users")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).json({ message: error.message });
    });
});

app.get("/api/search", (req, res) => {
  const q = req.query.q;
  const url = `employer-search?&limit=8&q=${q}`;

  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).json({ message: error.message });
    });
});

app.listen(port, () => {
  console.log("Server listening on port ", port);
});
