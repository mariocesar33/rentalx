import { ICreateSpecificationDTO, ISpecificationsRetository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRetository {
  create({ name, description }: ICreateSpecificationDTO): void {
    throw new Error("Method not implemented.");
  }

}