import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage"));
const NovoEmprestimoValores = lazy(
  () => import("../pages/NovoEmprestimoValoresPage")
);
const NovoEmprestimoPeriodos = lazy(
  () => import("../pages/NovoEmprestimoPeriodoPage")
);
const NovoEmprestimoBanco = lazy(
  () => import("../pages/NovoEmprestimoBancoPage")
);
const Contratos = lazy(() => import("../pages/ContratosPage"));
const Duvidas = lazy(() => import("../pages/DuvidasPage"));
const Conta = lazy(() => import("../pages/ContaPage"));

function AppRoutes() {
  return (
    <Routes>
      {/* INICIO */}
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<Home />} />
      <Route
        path="/inicio/novo-emprestimo/valores"
        element={<NovoEmprestimoValores />}
      />
      <Route
        path="/inicio/novo-emprestimo/periodo"
        element={<NovoEmprestimoPeriodos />}
      />
      <Route
        path="/inicio/novo-emprestimo/banco"
        element={<NovoEmprestimoBanco />}
      />

      {/* CONTRATOS */}
      <Route path="/contratos" element={<Contratos />} />

      {/* DUVIDAS */}
      <Route path="/duvidas" element={<Duvidas />} />

      {/* CONTA */}
      <Route path="/conta" element={<Conta />} />
    </Routes>
  );
}

export default AppRoutes;
