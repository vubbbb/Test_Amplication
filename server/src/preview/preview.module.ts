import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PreviewModuleBase } from "./base/preview.module.base";
import { PreviewService } from "./preview.service";
import { PreviewController } from "./preview.controller";
import { PreviewResolver } from "./preview.resolver";

@Module({
  imports: [PreviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [PreviewController],
  providers: [PreviewService, PreviewResolver],
  exports: [PreviewService],
})
export class PreviewModule {}
