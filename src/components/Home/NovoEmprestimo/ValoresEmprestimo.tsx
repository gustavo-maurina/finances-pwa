import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNovoEmprestimo } from "../../../contexts/NovoEmprestimoProvider";
import {
  ContinueButton,
  EmprestimoOptionsContainer,
  OptionCard,
  OptionsGrid,
  SimularText,
} from "./styles";
import { ValorEmprestimoInput } from "./ValorEmprestimoInput";

export const ValoresEmprestimo = () => {
  const { setValorEmprestimo } = useNovoEmprestimo();
  const navigate = useNavigate();
  const [valor, setValor] = useState<number>();
  // const { data, isLoading, isError } = useQuery(
  //   "valoresEmprestimo",
  //   getLoanValues
  // );

  const data = {
    min: 500,
    max: 3000,
  };

  // if (isLoading) return <div>Carregando...</div>;
  // if (isError || data === undefined)
  //   return <div>Oops, encontramos um erro no servidor!</div>;

  const isValorValid = () => {
    if (valor === undefined || valor > data?.max || valor < data?.min)
      return false;

    return true;
  };

  const handleValorSelected = (valor: number) => setValor(valor);

  const handleContinue = () => {
    if (!isValorValid())
      return toast.error(
        "Valor inválido. Por favor, insira um valor entre R$ 500 e R$ 3000."
      );

    setValorEmprestimo(valor);
    navigate("/inicio/novo-emprestimo/periodo");
  };

  return (
    <EmprestimoOptionsContainer>
      <OptionsGrid>
        <OptionCard active={valor === 3} onClick={() => handleValorSelected(3)}>
          1
        </OptionCard>
        <OptionCard>1</OptionCard>
        <OptionCard>1</OptionCard>
        <OptionCard>1</OptionCard>
      </OptionsGrid>

      <ValorEmprestimoInput
        valor={valor}
        setValor={setValor}
        max={data?.max || 1_000_000}
        min={data?.min || 0}
      />

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
      <SimularText>Simule pela parcela</SimularText>
    </EmprestimoOptionsContainer>
  );
};
