import { LoanSimulation } from "../types/LoanSimulation";
import { API } from "./api";

export const getLoanSimulation = async () => {
  try {
    const req = await API.get<LoanSimulation>("/simulation");
    return req.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
