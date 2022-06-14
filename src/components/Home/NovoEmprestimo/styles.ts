import { HTMLProps } from "react";
import styled from "styled-components";
import { CARD_SHADOW } from "../../../constants/cardShadow";
import { theme } from "../../../themes/theme";

export const EmprestimoOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionsGrid = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const OptionCard = styled.button<
  HTMLProps<HTMLButtonElement> & { active?: boolean }
>`
  border: 2px solid
    ${(props) => (props.active ? theme.accentPink : "transparent")};
  background-color: #fff;
  border-radius: 0.7rem;
  box-shadow: ${CARD_SHADOW};
  padding: 1rem;
  margin: 0.5rem;
  display: grid;
  place-items: center;
`;

export const ContinueButton = styled.button`
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 0.5rem 3rem;
  border-radius: 50rem;
  font-weight: bold;
  background-color: ${theme.accentPink};
  color: white;
`;

export const SimularText = styled.a`
  font-size: 0.9rem;
  color: ${theme.accentPink};
  text-decoration: underline;
`;
