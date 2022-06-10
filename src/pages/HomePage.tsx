import styled from "styled-components";
import { AppBar } from "../components/AppBar/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { HomeAppBar } from "../components/Home/HomeAppBar";
import { Oportunidades } from "../components/Home/Oportunidades";

const Content = styled.div`
  margin-top: 190px;
`;

export const HomePage = () => {
  return (
    <>
      <AppBar render={<HomeAppBar />} />

      <ContentContainer>
        <Content>
          <h3>Oportunidades</h3>

          <Oportunidades />
        </Content>
      </ContentContainer>
    </>
  );
};
