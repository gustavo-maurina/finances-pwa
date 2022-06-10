import { withAppBar } from "../components/HOCs/withAppBar";
import { ValoresEmprestimo } from "../components/Home/ValoresEmprestimo";
import { NovoEmprestimoProvider } from "../contexts/NovoEmprestimoProvider";

const NovoEmprestimoPageComponent = () => {
  return (
    <NovoEmprestimoProvider>
      <h3>De quanto você precisa?</h3>
      <ValoresEmprestimo />
    </NovoEmprestimoProvider>
  );
};

export const NovoEmprestimoPage = withAppBar(
  NovoEmprestimoPageComponent,
  "Valores"
);
