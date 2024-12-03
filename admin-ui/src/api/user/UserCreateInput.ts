import { PreviewCreateNestedManyWithoutUsersInput } from "./PreviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  previews?: PreviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
