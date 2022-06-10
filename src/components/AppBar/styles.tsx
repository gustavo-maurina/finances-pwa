import { ChevronLeft } from "react-feather";
import styled from "styled-components";
import { APP_BAR_HEIGHT } from "../../constants/appBarHeight";

export const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${APP_BAR_HEIGHT}px;
  padding: 0 15px;
  color: white;
  background-color: black;
  border-bottom-right-radius: 30px;
  z-index: 10;
`;

export const DefaultAppBarGrid = styled.div`
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const AppBarGoBackIcon = styled(ChevronLeft).attrs({ size: 32 })`
  align-self: center;
`;

export const AppBarMiddleDiv = styled.div`
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;
