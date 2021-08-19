import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {

  hundle(request: Request, response: Response): Response {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    importCategoryUseCase.execute(file);

    return response.send()
  }
}

export { ImportCategoryController };