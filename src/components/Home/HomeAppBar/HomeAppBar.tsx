import { Bell, ChevronDown } from "react-feather";
import { ChevronWrapper, CustomAppBar, Logo, MiddleDiv } from "./styles";

export const HomeAppBar = () => {
  return (
    <CustomAppBar>
      <div>
        <Logo width={300} height={120} />
      </div>

      <MiddleDiv>
        <h3>Olá, José Carlos</h3>
        <p>Seu crédito disponível é de</p>
        <h1>R$ 5.048,10</h1>
      </MiddleDiv>

      <div>
        <Bell />
      </div>

      <ChevronWrapper>
        <ChevronDown size={32} />
      </ChevronWrapper>
    </CustomAppBar>
  );
};
