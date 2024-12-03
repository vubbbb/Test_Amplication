import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreviewCreateInput = {
  content?: string | null;
  product?: ProductWhereUniqueInput | null;
  start?: number | null;
  user?: UserWhereUniqueInput | null;
};
