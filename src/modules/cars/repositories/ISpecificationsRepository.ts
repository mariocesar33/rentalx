import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRetository {
  create({ name, description}: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationsRetository }