import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreviewUpdateInput = {
  content?: string | null;
  product?: ProductWhereUniqueInput | null;
  start?: number | null;
  user?: UserWhereUniqueInput | null;
};
