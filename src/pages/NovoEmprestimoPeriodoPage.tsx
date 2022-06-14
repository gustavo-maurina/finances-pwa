import { withAppBar } from "../components/HOCs/withAppBar";
import { PeriodosEmprestimo } from "../components/Home/NovoEmprestimo/PeriodosEmprestimo";
import { NovoEmprestimoProvider } from "../contexts/NovoEmprestimoProvider";

const NovoEmprestimoPeriodoPageComponent = () => {
  return (
    <NovoEmprestimoProvider>
      <h3>Em quanto tempo você quer pagar?</h3>
      <PeriodosEmprestimo />
    </NovoEmprestimoProvider>
  );
};

export const NovoEmprestimoPeriodoPage = withAppBar(
  NovoEmprestimoPeriodoPageComponent,
  "Período"
);
