import { ChevronRight, HelpCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CARD_SHADOW } from "../../../constants/cardShadow";
import { theme } from "../../../themes/theme";
import { LoanSimulation } from "../../../types/LoanSimulation";
import { getSimulationPaymentDate } from "../../../utils/getSimulationPaymentDate";
import { Separator } from "../../shared/Separator";

const CardBanco = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: ${CARD_SHADOW};
  background-color: #fff;
  border-radius: 0.7rem;
  height: 240px;
  width: 100%;
`;

const LeftPinkBar = styled.div`
  position: absolute;
  left: 0;
  width: 7px;
  height: 100%;
  background-color: ${theme.accentPink};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  align-items: center;
  font-size: 0.9rem;
`;

const TopSection = styled.div`
  height: 55%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
`;

const LeftHalf = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 70%;
  border-right: 1px solid #c1c1c1;
  margin-right: 0.5rem;

  .logo-wrapper {
    display: flex;
    align-items: center;
    margin-right: 0.8rem;
    justify-content: center;
    border: 1px solid #c1c1c1;
    border-radius: 0.5rem;
    width: 75px;
    height: 75px;
    padding: 0.5rem;

    img {
      width: 100%;
    }
  }

  p:first-child {
    margin-top: 0.25rem;
    font-weight: bold;
    line-height: 1rem;
  }

  p:nth-child(2) {
    font-weight: bold;
    color: ${theme.accentPink};
    font-size: 1.3rem;
  }
`;

const RightHalf = styled.div`
  p:last-child {
    font-weight: bold;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  padding: 0.5rem;
  padding-left: 1rem;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  p:nth-child(2) {
    margin-top: 2px;
    font-weight: bold;
  }

  div:last-child {
    margin-left: auto;
    p {
      color: ${theme.accentPink};
      font-size: 1rem;
    }
  }
`;

export const CardBancoEmprestimo = ({
  simulation,
}: {
  simulation: LoanSimulation;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success("Empréstimo confirmado!");
    navigate("/inicio");
  };
  return (
    <CardBanco onClick={handleClick}>
      <LeftPinkBar />

      <Content>
        <TopSection>
          <LeftHalf>
            <div className="logo-wrapper">
              <img src={require("../../../assets/images/t_logo.png")} alt="" />
            </div>
            <div>
              <p>{simulation.numberOfInstallments} parcelas de</p>
              <p>R$ {simulation.installmentValue}</p>
              <p>Total de R$ {simulation.contractValue}</p>
            </div>
          </LeftHalf>

          <RightHalf>
            <p>com taxa de</p>
            <p>{simulation.rate * 100}% a.m.</p>
          </RightHalf>
        </TopSection>

        <Separator />

        <BottomSection>
          <div>
            <p>
              Previsão de pagamento
              <HelpCircle color={theme.accentPink} size={18} />
            </p>
            <p>{getSimulationPaymentDate(simulation)}</p>
          </div>

          <div>
            <p>
              Contratar
              <ChevronRight size={18} />
            </p>
          </div>
        </BottomSection>
      </Content>
    </CardBanco>
  );
};
