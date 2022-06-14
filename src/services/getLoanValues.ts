import { LoanValues } from "../types/LoanValues";
import { API } from "./api";

export const getLoanValues = async () => {
  try {
    const req = await API.get<LoanValues>("/values");
    return req.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
