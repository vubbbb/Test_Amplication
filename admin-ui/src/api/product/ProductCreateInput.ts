import { PreviewCreateNestedManyWithoutProductsInput } from "./PreviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  desciption?: string | null;
  image?: string | null;
  name?: string | null;
  previews?: PreviewCreateNestedManyWithoutProductsInput;
  price?: number | null;
};
