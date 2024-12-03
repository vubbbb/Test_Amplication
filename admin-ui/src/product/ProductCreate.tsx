import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PreviewTitle } from "../preview/PreviewTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="desciption" source="desciption" />
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="previews" reference="Preview">
          <SelectArrayInput
            optionText={PreviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
