import { withAppBar } from "../components/HOCs/withAppBar";

const ContratosPageComponent = () => {
  return (
    <>
      <h1>ContratosPage</h1>
    </>
  );
};

export const ContratosPage = withAppBar(ContratosPageComponent, "Contratos");
