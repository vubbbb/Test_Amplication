import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PreviewTitle } from "../preview/PreviewTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
