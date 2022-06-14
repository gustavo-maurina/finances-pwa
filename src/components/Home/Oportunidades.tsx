import { HTMLProps } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CARD_SHADOW } from "../../constants/cardShadow";
import { getOportunidades } from "../../services/getOportunidades";
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
  box-shadow: ${CARD_SHADOW};
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
  const { data, isLoading, isError } = useQuery(
    "oportunidades",
    getOportunidades
  );
  const changePage = (page: string) => navigate(page);

  if (isLoading) return <div>Carregando...</div>;
  if (isError || data === undefined)
    return <div>Erro ao carregar informação</div>;

  return (
    <></>
    // <GridOportunidades>
    //   {data}
    //   {
    //     <Card
    //       disabled={!data?.newLoanMaxValue}
    //       onClick={() => changePage("novo-emprestimo/valores")}
    //     >
    //       <img src={require("../../assets/images/newLoan.png")} />
    //       <h3>Novo empréstimo</h3>
    //       <p>Até </p>
    //     </Card>
    //   }

    //   <Card disabled={!data?.portabilityMaxValue}>
    //     <img src={require("../../assets/images/portability.png")} />
    //     <h3>Portabilidade</h3>
    //     <p>Até 2.000,00</p>
    //   </Card>

    //   <Card disabled={!data?.refinMaxValue}>
    //     <img src={require("../../assets/images/refinancing.png")} />
    //     <h3>Refinanciamento</h3>
    //   </Card>

    //   <Card disabled={!data?.creditCardMaxValue}>
    //     <img src={require("../../assets/images/creditCard.png")} />
    //     <h3>Cartão de crédito consignado</h3>
    //   </Card>
    // </GridOportunidades>
  );
};
