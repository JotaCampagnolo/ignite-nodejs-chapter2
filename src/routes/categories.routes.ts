import { request, response, Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
