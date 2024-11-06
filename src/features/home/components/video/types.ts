import { IVideo } from "@/shared/types";

export interface VideoProps extends Pick<IVideo, "id" | "title" | "category" | "thumbnail"> {}
