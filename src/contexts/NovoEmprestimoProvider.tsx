import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface NovoEmprestimoValues {
  valorEmprestimo: number | undefined;
  periodoEmprestimo: number | undefined;
  bancoEmprestimo: number | undefined;
  setValorEmprestimo: Dispatch<SetStateAction<number | undefined>>;
  setPeriodoEmprestimo: Dispatch<SetStateAction<number | undefined>>;
  setBancoEmprestimo: Dispatch<SetStateAction<number | undefined>>;
}

const NovoEmprestimoContext = createContext<NovoEmprestimoValues>(
  {} as NovoEmprestimoValues
);

export const NovoEmprestimoProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [valorEmprestimo, setValorEmprestimo] = useState<number>();
  const [periodoEmprestimo, setPeriodoEmprestimo] = useState<number>();
  const [bancoEmprestimo, setBancoEmprestimo] = useState<number>();

  return (
    <NovoEmprestimoContext.Provider
      value={{
        valorEmprestimo,
        periodoEmprestimo,
        bancoEmprestimo,
        setPeriodoEmprestimo,
        setBancoEmprestimo,
        setValorEmprestimo,
      }}
    >
      {children}
    </NovoEmprestimoContext.Provider>
  );
};

export const useNovoEmprestimo = () => useContext(NovoEmprestimoContext);
