import styled from "styled-components";
import { CardBancoEmprestimo } from "./CardBancoEmprestimo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

export const BancosEmprestimo = () => {
  return (
    <Container>
      <CardBancoEmprestimo />
    </Container>
  );
};
