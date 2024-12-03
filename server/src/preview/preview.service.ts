import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreviewServiceBase } from "./base/preview.service.base";

@Injectable()
export class PreviewService extends PreviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
