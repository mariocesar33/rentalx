import { Category } from "../model/Category";

// DTO (Data Transfer Object)
interface ICreatecategoryDTO {
  name: string,
  description: string,
}

class CategoriesRepository {
  private categories: Category[];

  constructor () {
    this.categories = [];
  }

  create({ name, description}: ICreatecategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository }