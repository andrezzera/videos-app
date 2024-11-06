import { createContext } from "react";
import { VideoContextProps } from "../types";

export const VideoContext = createContext<VideoContextProps>({} as VideoContextProps);
