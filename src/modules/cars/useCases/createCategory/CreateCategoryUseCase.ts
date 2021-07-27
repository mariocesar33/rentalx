import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * Definir o tipo de retorno
 * alterar o retorno de erro
 * acessar o repositório
 */

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Categoria já existe!");
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase }