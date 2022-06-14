import { Navigate, Route, Routes } from "react-router-dom";
import { ContaPage } from "../pages/ContaPage";
import { ContratosPage } from "../pages/ContratosPage";
import { DuvidasPage } from "../pages/DuvidasPage";
import { HomePage } from "../pages/HomePage";
import { NovoEmprestimoBancoPage } from "../pages/NovoEmprestimoBancoPage";
import { NovoEmprestimoPeriodoPage } from "../pages/NovoEmprestimoPeriodoPage";
import { NovoEmprestimoValoresPage } from "../pages/NovoEmprestimoValoresPage";

function AppRoutes() {
  return (
    <Routes>
      {/* INICIO */}
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<HomePage />} />
      <Route
        path="/inicio/novo-emprestimo/valores"
        element={<NovoEmprestimoValoresPage />}
      />
      <Route
        path="/inicio/novo-emprestimo/periodo"
        element={<NovoEmprestimoPeriodoPage />}
      />
      <Route
        path="/inicio/novo-emprestimo/banco"
        element={<NovoEmprestimoBancoPage />}
      />

      {/* CONTRATOS */}
      <Route path="/contratos" element={<ContratosPage />} />

      {/* DUVIDAS */}
      <Route path="/duvidas" element={<DuvidasPage />} />

      {/* CONTA */}
      <Route path="/conta" element={<ContaPage />} />
    </Routes>
  );
}

export default AppRoutes;
