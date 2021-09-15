import express, { request, response } from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ messages: "Hello World!" });
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("🟢 Server is running!"));
