import { PreviewUpdateManyWithoutUsersInput } from "./PreviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  previews?: PreviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
