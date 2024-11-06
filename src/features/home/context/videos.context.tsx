import { createContext } from "react";
import { VideosContextProps } from "../types";

export const VideosContext = createContext<VideosContextProps>({} as VideosContextProps);
