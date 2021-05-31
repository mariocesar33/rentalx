import { ISpecificationsRetository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRetository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Especificação já existe!");
    }
    
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };