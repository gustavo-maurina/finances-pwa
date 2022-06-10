import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useNovoEmprestimo } from "../../contexts/NovoEmprestimoProvider";
import { theme } from "../../themes/theme";
import { ValorEmprestimoInput } from "./ValorEmprestimoInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ValoresGrid = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ValorCard = styled.div`
  background-color: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 2px 9px -1px rgba(0, 0, 0, 0.088);
  padding: 1rem;
  margin: 0.5rem;
  display: grid;
  place-items: center;
`;

const ContinueButton = styled.button`
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 0.5rem 3rem;
  border-radius: 50rem;
  font-weight: bold;
  background-color: ${theme.accentPink};
  color: white;
`;

const SimularText = styled.a`
  font-size: 0.9rem;
  color: ${theme.accentPink};
  text-decoration: underline;
`;

export const ValoresEmprestimo = () => {
  const { setValorEmprestimo } = useNovoEmprestimo();
  const [valor, setValor] = useState<number>();
  // const { data, isLoading, isError } = useQuery(
  //   "valoresEmprestimo",
  //   getLoanValues
  // );

  const data = {
    min: undefined,
    max: undefined,
  };

  const handleOutroValor = (event: ChangeEvent<HTMLInputElement>) =>
    setValor(parseInt(event.target.value));

  // if (isLoading) return <div>Carregando...</div>;
  // if (isError || data === undefined)
  //   return <div>Oops, encontramos um erro no servidor!</div>;

  return (
    <Container>
      <ValoresGrid>
        <ValorCard>1</ValorCard>
        <ValorCard>1</ValorCard>
        <ValorCard>1</ValorCard>
        <ValorCard>1</ValorCard>
      </ValoresGrid>

      <ValorEmprestimoInput
        valor={valor}
        setValor={setValor}
        max={data?.max || 1400}
        min={data?.min || 0}
      />

      <ContinueButton>Continuar</ContinueButton>
      <SimularText>Simule pela parcela</SimularText>
    </Container>
  );
};
