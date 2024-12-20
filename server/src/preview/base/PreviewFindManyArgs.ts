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
import { PreviewWhereInput } from "./PreviewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PreviewOrderByInput } from "./PreviewOrderByInput";

@ArgsType()
class PreviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PreviewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PreviewWhereInput, { nullable: true })
  @Type(() => PreviewWhereInput)
  where?: PreviewWhereInput;

  @ApiProperty({
    required: false,
    type: [PreviewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PreviewOrderByInput], { nullable: true })
  @Type(() => PreviewOrderByInput)
  orderBy?: Array<PreviewOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PreviewFindManyArgs as PreviewFindManyArgs };
