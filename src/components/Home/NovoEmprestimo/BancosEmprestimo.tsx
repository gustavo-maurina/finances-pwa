import { useQuery } from "react-query";
import styled from "styled-components";
import { getLoanSimulation } from "../../../services/getLoanSimulation";
import { CardBancoEmprestimo } from "./CardBancoEmprestimo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

export const BancosEmprestimo = () => {
  const { data, isLoading, isError } = useQuery(
    "loanSimulation",
    getLoanSimulation
  );

  if (isLoading) return <div>Carregando...</div>;
  if (isError || data === undefined)
    return <div>Oops, encontramos um erro no servidor!</div>;

  return (
    <Container>
      <CardBancoEmprestimo simulation={data} />
    </Container>
  );
};
