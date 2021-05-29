import { Category } from "../model/Category";
import { ICategoriesRepository } from "./IcategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create(name: string, description: string): void {
    console.log(name, description);
  }
 
}

export { PostgresCategoriesRepository }