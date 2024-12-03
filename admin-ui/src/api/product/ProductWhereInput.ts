import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PreviewListRelationFilter } from "../preview/PreviewListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  desciption?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  previews?: PreviewListRelationFilter;
  price?: FloatNullableFilter;
};
