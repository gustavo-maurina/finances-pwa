import { withAppBar } from "../components/HOCs/withAppBar";
import { BancosEmprestimo } from "../components/Home/NovoEmprestimo/BancosEmprestimo";
import { NovoEmprestimoProvider } from "../contexts/NovoEmprestimoProvider";

const NovoEmprestimoBancoPageComponent = () => {
  return (
    <NovoEmprestimoProvider>
      <h3>Escolha um banco.</h3>
      <BancosEmprestimo />
    </NovoEmprestimoProvider>
  );
};

export const NovoEmprestimoBancoPage = withAppBar(
  NovoEmprestimoBancoPageComponent,
  "Opções"
);
