interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRetository {
  create({ name, description}: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationDTO, ISpecificationsRetository }