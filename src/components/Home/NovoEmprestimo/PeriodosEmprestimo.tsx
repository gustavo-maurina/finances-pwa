import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useNovoEmprestimo } from "../../../contexts/NovoEmprestimoProvider";
import {
  ContinueButton,
  EmprestimoOptionsContainer,
  OptionCard,
  OptionsGrid,
} from "./styles";

const MesesInput = styled.div`
  input {
    all: unset;
    font-size: 18px;
    border-bottom: 1px solid #00000064;
    text-align: center;
    width: 5rem;
  }

  label {
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export const PeriodosEmprestimo = () => {
  const { setPeriodoEmprestimo } = useNovoEmprestimo();
  const navigate = useNavigate();
  const [periodo, setPeriodo] = useState<number>();

  const data = {
    min: 500,
    max: 3000,
  };

  const handleperiodoSelected = (periodo: number) => setPeriodo(periodo);

  const handleContinue = () => {
    setPeriodoEmprestimo(periodo);
    navigate("/inicio/novo-emprestimo/banco");
  };

  return (
    <EmprestimoOptionsContainer>
      <OptionsGrid>
        <OptionCard
          active={periodo === 3}
          onClick={() => handleperiodoSelected(3)}
        >
          48 meses
        </OptionCard>
        <OptionCard>60 meses</OptionCard>
        <OptionCard>72 meses</OptionCard>
        <OptionCard>84 meses</OptionCard>
      </OptionsGrid>

      <MesesInput>
        <input id="meses-input" type={"number"} />
        <label htmlFor="meses-input">meses</label>
      </MesesInput>

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
    </EmprestimoOptionsContainer>
  );
};
