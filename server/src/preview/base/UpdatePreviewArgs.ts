/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PreviewWhereUniqueInput } from "./PreviewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PreviewUpdateInput } from "./PreviewUpdateInput";

@ArgsType()
class UpdatePreviewArgs {
  @ApiProperty({
    required: true,
    type: () => PreviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PreviewWhereUniqueInput)
  @Field(() => PreviewWhereUniqueInput, { nullable: false })
  where!: PreviewWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PreviewUpdateInput,
  })
  @ValidateNested()
  @Type(() => PreviewUpdateInput)
  @Field(() => PreviewUpdateInput, { nullable: false })
  data!: PreviewUpdateInput;
}

export { UpdatePreviewArgs as UpdatePreviewArgs };
