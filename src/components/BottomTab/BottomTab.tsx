import { HTMLProps, ReactNode } from "react";
import { FileText, HelpCircle, Home, User } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  padding: 15px 30px;
  background-color: ${theme.lightColor};
`;

const NavOption = styled.div<HTMLProps<HTMLDivElement> & { active: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  font-size: 0.85rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.active && theme.accentPink};

  span {
    color: ${(props) => props.active && theme.accentPink};
    margin: 0;
    padding: 0;
  }
`;

type RoutesType = { icon: ReactNode; label: string; name: string };
const ROUTES: RoutesType[] = [
  { icon: <Home />, label: "Início", name: "inicio" },
  { icon: <FileText />, label: "Contratos", name: "contratos" },
  { icon: <HelpCircle />, label: "Dúvidas", name: "duvidas" },
  { icon: <User />, label: "Conta", name: "conta" },
];

export const BottomTab = () => {
  const location = useLocation();

  const isRouteActive = (routeName: string): boolean =>
    location.pathname.split("/")[1] === routeName;

  return (
    <Container>
      {ROUTES.map(({ label, icon, name }: RoutesType) => {
        const isActive = isRouteActive(name);

        return (
          <Link key={name} to={"/" + name} style={{ textDecoration: "none" }}>
            <NavOption active={isActive}>
              <span>{icon}</span>
              <span>{label}</span>
            </NavOption>
          </Link>
        );
      })}
    </Container>
  );
};
