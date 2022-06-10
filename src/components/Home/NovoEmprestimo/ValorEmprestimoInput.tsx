import { Dispatch, SetStateAction } from "react";
import CurrencyInput from "react-currency-input-field";
import styled from "styled-components";

interface Props {
  max: number;
  min: number;
  setValor: Dispatch<SetStateAction<number | undefined>>;
  valor: number | undefined;
}

const ValorInput = styled(CurrencyInput)`
  all: unset;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #00000064;
  width: 120px;
  padding: 0 10px;
`;

const OutroValorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  label {
    font-weight: bold;
  }
`;

export const ValorEmprestimoInput = ({ setValor, valor, max, min }: Props) => {
  const handleInput = (value: string | undefined) => {
    if (typeof value === "string") {
      if (parseInt(value) > max) return setValor(max);
      setValor(parseInt(value));
    }
    if (typeof value === "undefined") setValor(undefined);
  };

  return (
    <OutroValorContainer>
      <label htmlFor="outroValor">Outro valor</label>
      <ValorInput
        onValueChange={handleInput}
        maxLength={7}
        placeholder="R$ 00,00"
        prefix="R$"
        value={valor}
        allowNegativeValue={false}
        decimalSeparator=","
        groupSeparator="."
      />
    </OutroValorContainer>
  );
};
