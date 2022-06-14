import { withAppBar } from "../components/HOCs/withAppBar";

const ContaPageComponent = () => {
  return (
    <>
      <h1>ContaPage</h1>
    </>
  );
};

const ContaPage = withAppBar(ContaPageComponent, "Conta");

export default ContaPage;
