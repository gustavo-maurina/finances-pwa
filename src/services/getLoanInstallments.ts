import { LoanInstallMents } from "../types/LoanInstallments";
import { API } from "./api";

export const getLoanInstallments = async () => {
  try {
    const req = await API.get<LoanInstallMents>("/installments");
    return req.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
