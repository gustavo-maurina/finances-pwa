import { Frown } from "react-feather";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  width: 100%;
  transform: translateY(-50%) translateX(-50%);
`;

export const GenericServerError = () => {
  return (
    <Container>
      <Frown size={64} />
      <h3>Ocorreu um erro no servidor! </h3>
      <p>Tente novamente e se o problema persistir, entre em contato.</p>
    </Container>
  );
};
