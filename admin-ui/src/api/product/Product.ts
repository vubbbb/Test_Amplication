import { Preview } from "../preview/Preview";

export type Product = {
  createdAt: Date;
  desciption: string | null;
  id: string;
  image: string | null;
  name: string | null;
  previews?: Array<Preview>;
  price: number | null;
  updatedAt: Date;
};
