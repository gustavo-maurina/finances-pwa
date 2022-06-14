import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { LoanSimulation } from "../types/LoanSimulation";
import { getValidDateFromString } from "./getValidDateFromString";

export function getSimulationPaymentDate({
  fatEstimatedDate,
  nearEstimatedDate,
}: LoanSimulation): string {
  const dataPagamentoNear = getValidDateFromString(nearEstimatedDate);
  const dataPagamentoFat = getValidDateFromString(fatEstimatedDate);

  return (
    format(dataPagamentoNear, "d 'de' MMMM", { locale: ptBr }) +
    " a " +
    format(dataPagamentoFat, "d 'de' MMMM 'de' y", { locale: ptBr })
  );
}
