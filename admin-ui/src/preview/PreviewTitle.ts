import { Preview as TPreview } from "../api/preview/Preview";

export const PREVIEW_TITLE_FIELD = "content";

export const PreviewTitle = (record: TPreview): string => {
  return record.content?.toString() || String(record.id);
};
