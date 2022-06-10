import { HTMLProps } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const GridOportunidades = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  grid-template-rows: 1fr 1fr;
`;

// create card with styled components
const Card = styled.div<HTMLProps<HTMLDivElement> & { disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 9px -1px rgba(0, 0, 0, 0.088);
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 50px;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  p {
    color: ${theme.accentPink};
  }
`;

export const Oportunidades = () => {
  const navigate = useNavigate();

  const changePage = (page: string) => navigate(page);

  return (
    <GridOportunidades>
      <Card onClick={() => changePage("novo-emprestimo/valores")}>
        <img src={require("../../assets/images/newLoan.png")} />
        <h3>Novo empréstimo</h3>
        <p>Até 3.058,10</p>
      </Card>

      <Card>
        <img src={require("../../assets/images/portability.png")} />
        <h3>Portabilidade</h3>
        <p>Até 2.000,00</p>
      </Card>

      <Card disabled>
        <img src={require("../../assets/images/refinancing.png")} />
        <h3>Refinanciamento</h3>
      </Card>

      <Card disabled>
        <img src={require("../../assets/images/creditCard.png")} />
        <h3>Cartão de crédito consignado</h3>
      </Card>
    </GridOportunidades>
  );
};
