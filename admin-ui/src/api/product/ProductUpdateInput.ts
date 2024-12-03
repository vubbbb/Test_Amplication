import { PreviewUpdateManyWithoutProductsInput } from "./PreviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  desciption?: string | null;
  image?: string | null;
  name?: string | null;
  previews?: PreviewUpdateManyWithoutProductsInput;
  price?: number | null;
};
