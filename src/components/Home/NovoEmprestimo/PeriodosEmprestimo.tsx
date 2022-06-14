import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNovoEmprestimo } from "../../../contexts/NovoEmprestimoProvider";
import { getLoanInstallments } from "../../../services/getLoanInstallments";
import { MesesEmprestimoInput } from "./MesesEmprestimoInput";
import {
  ContinueButton,
  EmprestimoOptionsContainer,
  OptionCard,
  OptionsGrid,
} from "./styles";

export const PeriodosEmprestimo = () => {
  const { setPeriodoEmprestimo } = useNovoEmprestimo();
  const navigate = useNavigate();
  const [periodo, setPeriodo] = useState<number>();
  const { data, isLoading, isError } = useQuery(
    "periodosEmprestimo",
    getLoanInstallments
  );

  const handlePeriodoSelected = (periodo: number) => setPeriodo(periodo);

  const isValorValid = () => {
    if (
      periodo === undefined ||
      periodo > (data?.max as number) ||
      periodo < (data?.min as number)
    )
      return false;

    return true;
  };

  const handleContinue = () => {
    if (!isValorValid())
      return toast.error(
        `Valor inválido. Por favor, insira um valor entre R$ ${data?.min} e R$ ${data?.max}`
      );

    setPeriodoEmprestimo(periodo);
    navigate("/inicio/novo-emprestimo/banco");
  };

  if (isLoading) return <div>Carregando...</div>;

  if (isError || data === undefined)
    return <div>Oops, encontramos um erro no servidor!</div>;

  return (
    <EmprestimoOptionsContainer>
      <OptionsGrid>
        {data.suggestionInstallments.map((suggestedValue) => (
          <OptionCard
            key={suggestedValue}
            active={periodo === suggestedValue}
            onClick={() => handlePeriodoSelected(suggestedValue)}
          >
            {suggestedValue} meses
          </OptionCard>
        ))}
      </OptionsGrid>

      <MesesEmprestimoInput
        periodo={periodo}
        setPeriodo={setPeriodo}
        max={data?.max || 1_000_000}
        min={data?.min || 0}
      />

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
    </EmprestimoOptionsContainer>
  );
};
