import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PreviewService } from "./preview.service";
import { PreviewControllerBase } from "./base/preview.controller.base";

@swagger.ApiTags("previews")
@common.Controller("previews")
export class PreviewController extends PreviewControllerBase {
  constructor(
    protected readonly service: PreviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
