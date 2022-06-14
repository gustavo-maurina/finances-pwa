import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getLoanSimulation } from "../../../services/getLoanSimulation";
import { GenericServerError } from "../../shared/GenericServerError";
import { CardBancoEmprestimo } from "./CardBancoEmprestimo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

const CardSkeleton = styled(Skeleton)`
  margin-top: 1.5rem;
  height: 240px;
`;

export const BancosEmprestimo = () => {
  const { data, isLoading, isError } = useQuery(
    "loanSimulation",
    getLoanSimulation
  );

  if (isLoading) return <CardSkeleton />;

  if (isError || data === undefined) return <GenericServerError />;

  return (
    <Container>
      <CardBancoEmprestimo simulation={data} />
    </Container>
  );
};
