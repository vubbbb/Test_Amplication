import { PreviewWhereInput } from "./PreviewWhereInput";
import { PreviewOrderByInput } from "./PreviewOrderByInput";

export type PreviewFindManyArgs = {
  where?: PreviewWhereInput;
  orderBy?: Array<PreviewOrderByInput>;
  skip?: number;
  take?: number;
};
