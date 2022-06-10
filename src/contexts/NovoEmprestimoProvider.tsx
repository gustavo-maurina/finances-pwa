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
  prazoEmMeses: number | undefined;
  banco: number | undefined;
  setValorEmprestimo: Dispatch<SetStateAction<number | undefined>>;
  setPrazoEmMeses: Dispatch<SetStateAction<number | undefined>>;
  setBanco: Dispatch<SetStateAction<number | undefined>>;
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
  const [prazoEmMeses, setPrazoEmMeses] = useState<number>();
  const [banco, setBanco] = useState<number>();

  return (
    <NovoEmprestimoContext.Provider
      value={{
        valorEmprestimo,
        prazoEmMeses,
        banco,
        setBanco,
        setPrazoEmMeses,
        setValorEmprestimo,
      }}
    >
      {children}
    </NovoEmprestimoContext.Provider>
  );
};

export const useNovoEmprestimo = () => useContext(NovoEmprestimoContext);
