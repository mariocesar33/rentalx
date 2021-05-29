import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * Definir o tipo de retorno
 * alterar o retorno de erro
 * acessar o repositório
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Categoria já existe!");
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService }