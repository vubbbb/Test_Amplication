/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Preview } from "./Preview";
import { PreviewCountArgs } from "./PreviewCountArgs";
import { PreviewFindManyArgs } from "./PreviewFindManyArgs";
import { PreviewFindUniqueArgs } from "./PreviewFindUniqueArgs";
import { CreatePreviewArgs } from "./CreatePreviewArgs";
import { UpdatePreviewArgs } from "./UpdatePreviewArgs";
import { DeletePreviewArgs } from "./DeletePreviewArgs";
import { Product } from "../../product/base/Product";
import { User } from "../../user/base/User";
import { PreviewService } from "../preview.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Preview)
export class PreviewResolverBase {
  constructor(
    protected readonly service: PreviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "read",
    possession: "any",
  })
  async _previewsMeta(
    @graphql.Args() args: PreviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Preview])
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "read",
    possession: "any",
  })
  async previews(
    @graphql.Args() args: PreviewFindManyArgs
  ): Promise<Preview[]> {
    return this.service.previews(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Preview, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "read",
    possession: "own",
  })
  async preview(
    @graphql.Args() args: PreviewFindUniqueArgs
  ): Promise<Preview | null> {
    const result = await this.service.preview(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Preview)
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "create",
    possession: "any",
  })
  async createPreview(
    @graphql.Args() args: CreatePreviewArgs
  ): Promise<Preview> {
    return await this.service.createPreview({
      ...args,
      data: {
        ...args.data,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Preview)
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "update",
    possession: "any",
  })
  async updatePreview(
    @graphql.Args() args: UpdatePreviewArgs
  ): Promise<Preview | null> {
    try {
      return await this.service.updatePreview({
        ...args,
        data: {
          ...args.data,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Preview)
  @nestAccessControl.UseRoles({
    resource: "Preview",
    action: "delete",
    possession: "any",
  })
  async deletePreview(
    @graphql.Args() args: DeletePreviewArgs
  ): Promise<Preview | null> {
    try {
      return await this.service.deletePreview(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProduct(@graphql.Parent() parent: Preview): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Preview): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
