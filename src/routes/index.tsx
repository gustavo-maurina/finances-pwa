import { Navigate, Route, Routes } from "react-router-dom";
import { ContaPage } from "../pages/ContaPage";
import { ContratosPage } from "../pages/ContratosPage";
import { DuvidasPage } from "../pages/DuvidasPage";
import { HomePage } from "../pages/HomePage";
import { NovoEmprestimoPage } from "../pages/NovoEmprestimoPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<HomePage />} />
      <Route path="/inicio/novo-emprestimo" element={<NovoEmprestimoPage />} />
      <Route path="/contratos" element={<ContratosPage />} />
      <Route path="/duvidas" element={<DuvidasPage />} />
      <Route path="/conta" element={<ContaPage />} />
    </Routes>
  );
}

export default AppRoutes;
