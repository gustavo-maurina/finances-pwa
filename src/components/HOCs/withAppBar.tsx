import { FunctionComponent } from "react";
import styled from "styled-components";
import { APP_BAR_HEIGHT } from "../../constants/appBarHeight";
import { AppBar } from "../AppBar/AppBar";
import { ContentContainer } from "../ContentContainer";

const PageContent = styled.div`
  margin-top: ${APP_BAR_HEIGHT + 25}PX;
`;

/**
 * @param Component Componente que será renderizado após AppBar
 * @param title Título exibido no centro da AppBar
 */
export const withAppBar = (Component: FunctionComponent, title: string) => {
  const AppBarComponent = (props: any) => {
    return (
      <>
        <AppBar title={title} />
        <PageContent>
          <ContentContainer>
            <Component {...props} />
          </ContentContainer>
        </PageContent>
      </>
    );
  };

  return AppBarComponent;
};
