import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* rotas para páginas. A main sempre fica embaixo com o path "/" */}
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
