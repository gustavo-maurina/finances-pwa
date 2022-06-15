import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNovoEmprestimo } from "../../../contexts/NovoEmprestimoProvider";
import { getLoanValues } from "../../../services/getLoanValues";
import { GenericServerError } from "../../shared/GenericServerError";
import { EmprestimoOptionsSkeleton } from "./EmprestimoOptionsSkeleton";
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
  const { data, isLoading, isError } = useQuery(
    "valoresEmprestimo",
    getLoanValues
  );

  const isValorValid = () => {
    if (
      valor === undefined ||
      valor > (data?.max as number) ||
      valor < (data?.min as number)
    )
      return false;

    return true;
  };

  const handleValorSelected = (valor: number) => setValor(valor);

  const handleContinue = () => {
    if (!isValorValid())
      return toast.error(
        `Valor inválido. Por favor, insira um valor entre R$ ${data?.min} e R$ ${data?.max}`
      );

    setValorEmprestimo(valor);
    navigate("/inicio/novo-emprestimo/periodo");
  };

  if (isLoading) return <EmprestimoOptionsSkeleton />;

  if (isError || data === undefined) return <GenericServerError />;

  return (
    <EmprestimoOptionsContainer>
      <OptionsGrid>
        {data.suggestionValues.map((value) => (
          <OptionCard
            key={value}
            active={valor === value}
            onClick={() => handleValorSelected(value)}
          >
            R$ {value}
          </OptionCard>
        ))}
      </OptionsGrid>

      <ValorEmprestimoInput
        valor={valor}
        setValor={setValor}
        max={data?.max || 1_000_000}
      />

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
      <SimularText>Simule pela parcela</SimularText>
    </EmprestimoOptionsContainer>
  );
};
