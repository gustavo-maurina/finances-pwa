import { withAppBar } from "../components/HOCs/withAppBar";
import { ValoresEmprestimo } from "../components/Home/NovoEmprestimo/ValoresEmprestimo";
import { NovoEmprestimoProvider } from "../contexts/NovoEmprestimoProvider";

const NovoEmprestimoPeriodoPageComponent = () => {
  return (
    <NovoEmprestimoProvider>
      <h3>Em quanto tempo você quer pagar?</h3>
      <ValoresEmprestimo />
    </NovoEmprestimoProvider>
  );
};

export const NovoEmprestimoPeriodoPage = withAppBar(
  NovoEmprestimoPeriodoPageComponent,
  "Período"
);
