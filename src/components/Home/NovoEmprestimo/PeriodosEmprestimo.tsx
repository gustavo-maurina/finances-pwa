import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNovoEmprestimo } from "../../../contexts/NovoEmprestimoProvider";
import {
  ContinueButton,
  EmprestimoOptionsContainer,
  OptionCard,
  OptionsGrid,
  SimularText,
} from "./styles";

export const PeriodosEmprestimo = () => {
  const { setPeriodoEmprestimo } = useNovoEmprestimo();
  const navigate = useNavigate();
  const [periodo, setPeriodo] = useState<number>();

  const data = {
    min: 500,
    max: 3000,
  };

  const isPeriodoValid = () => {
    if (periodo === undefined || periodo > data?.max || periodo < data?.min)
      return false;

    return true;
  };

  const handleperiodoSelected = (periodo: number) => setPeriodo(periodo);

  const handleContinue = () => {
    if (!isPeriodoValid())
      return alert(
        "periodo inválido. Por favor, insira um periodo entre R$ 500 e R$ 3000."
      );

    setPeriodoEmprestimo(periodo);
    navigate("/inicio/novo-emprestimo/periodo");
  };

  return (
    <EmprestimoOptionsContainer>
      <OptionsGrid>
        <OptionCard
          active={periodo === 3}
          onClick={() => handleperiodoSelected(3)}
        >
          1
        </OptionCard>
        <OptionCard>1</OptionCard>
        <OptionCard>1</OptionCard>
        <OptionCard>1</OptionCard>
      </OptionsGrid>

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
      <SimularText>Simule pela parcela</SimularText>
    </EmprestimoOptionsContainer>
  );
};
