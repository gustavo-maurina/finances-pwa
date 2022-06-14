import { withAppBar } from "../components/HOCs/withAppBar";
import { ValoresEmprestimo } from "../components/Home/NovoEmprestimo/ValoresEmprestimo";
import { NovoEmprestimoProvider } from "../contexts/NovoEmprestimoProvider";

const NovoEmprestimoValoresPageComponent = () => {
  return (
    <NovoEmprestimoProvider>
      <h3>De quanto você precisa?</h3>
      <ValoresEmprestimo />
    </NovoEmprestimoProvider>
  );
};

const NovoEmprestimoValoresPage = withAppBar(
  NovoEmprestimoValoresPageComponent,
  "Valores"
);

export default NovoEmprestimoValoresPage;
