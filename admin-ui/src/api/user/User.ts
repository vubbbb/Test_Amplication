import { Preview } from "../preview/Preview";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  previews?: Array<Preview>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
