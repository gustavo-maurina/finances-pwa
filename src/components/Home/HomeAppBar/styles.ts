import styled from "styled-components";
import { theme } from "../../../themes/theme";
import { AppBarContainer } from "../../AppBar/styles";

export const CustomAppBar = styled(AppBarContainer)`
  height: 170px;
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1),
  div:nth-child(3) {
    width: 10%;
    height: 100%;
    text-align: center;
  }
`;

export const MiddleDiv = styled.div`
  overflow: hidden;
  width: 90%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p,
  h1,
  h3 {
    color: ${theme.whiteText};
  }

  h3 {
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }

  h1 {
    color: ${theme.accentPink};
  }
`;

export const Logo = styled.img.attrs({
  src: require("../../../assets/images/t_logo.png"),
  alt: "logo",
})`
  width: auto;
  height: 27.5%;
`;

export const ChevronWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 35px;
  width: 35px;
  display: grid;
  place-items: center;
  background-color: ${theme.accentPink};
  border-radius: 50%;
  transform: translateY(50%) translateX(-50%);
`;
