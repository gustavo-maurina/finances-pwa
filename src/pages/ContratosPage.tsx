import { withAppBar } from "../components/HOCs/withAppBar";

const ContratosPageComponent = () => {
  return (
    <>
      <h1>ContratosPage</h1>
    </>
  );
};

const ContratosPage = withAppBar(ContratosPageComponent, "Contratos");

export default ContratosPage;
