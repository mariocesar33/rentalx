import { ISpecificationsRetository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRetository) {

  }

  execute({name, description}: IRequest): void {
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };