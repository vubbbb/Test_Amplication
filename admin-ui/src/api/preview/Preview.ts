import { Product } from "../product/Product";
import { User } from "../user/User";

export type Preview = {
  content: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  start: number | null;
  updatedAt: Date;
  user?: User | null;
};
