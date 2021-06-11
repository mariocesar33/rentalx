import { Request, Response } from "express";

class ImportCategoryController {
  hundle(request: Request, response: Response): Response {
    const { file } = request;

    console.log(file);

    return response.send()
  }
}

export { ImportCategoryController };