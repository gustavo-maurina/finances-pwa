import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  max: number;
  min: number;
  setPeriodo: Dispatch<SetStateAction<number | undefined>>;
  periodo: number | undefined;
}

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

export const MesesEmprestimoInput = ({
  setPeriodo,
  periodo,
  max,
  min,
}: Props) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (parseInt(inputValue) > max) return setPeriodo(max);
    if (!inputValue) return setPeriodo(undefined);

    setPeriodo(parseInt(inputValue));
  };

  return (
    <MesesInput>
      <input
        onInput={handleInput}
        id="meses-input"
        type={"number"}
        value={periodo}
      />
      <label htmlFor="meses-input">meses</label>
    </MesesInput>
  );
};
