import axios from "axios";

export const httpClient = axios.create({ baseURL: "http://192.168.3.105:3000" });
