import { Oportunidades } from "../types/Oportunidades";
import { API } from "./api";

export const getOportunidades = async () => {
  try {
    const req = await API.get<Oportunidades>("");

    return req.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
