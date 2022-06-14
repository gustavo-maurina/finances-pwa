import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBarContainer,
  AppBarGoBackIcon,
  AppBarMiddleDiv,
  DefaultAppBarGrid,
} from "./styles";

interface Props {
  /** Título exibido no centro da AppBar, apenas quando for visualização padrão*/
  title?: string;

  /** Elementos para serem renderizados ao invés da visualização padrão */
  render?: ReactNode;
}

export const AppBar = ({ title, render }: Props) => {
  const navigate = useNavigate();
  // Se não tiver prop render, renderiza AppBar padrão (chevron e title)
  const isDefaultDisplay = render === undefined;

  const goBack = () => navigate(-1);

  return isDefaultDisplay ? (
    <AppBarContainer>
      <DefaultAppBarGrid>
        <button onClick={goBack}>
          <AppBarGoBackIcon />
        </button>
        <AppBarMiddleDiv>{title}</AppBarMiddleDiv>
        <div></div>
      </DefaultAppBarGrid>
    </AppBarContainer>
  ) : (
    <>{render}</>
  );
};
