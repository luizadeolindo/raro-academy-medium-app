import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./components/RequireAuth";
import { ArtigoPage } from "./pages/Artigo";
import { ArtigosPage } from "./pages/Artigos";
import { EditarArquivoPage } from "./pages/EditarArquivo";
import { LoginPage } from "./pages/Login";
import { MeusArtigosPage } from "./pages/MeusArtigos";
import { NotFoundPage } from "./pages/NotFound/intex";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />

    <Route path="/" element={<Layout />}>
      <Route index element={<ArtigosPage />} />
      <Route path="/artigo/:id" element={<ArtigoPage />} />

      <Route element={ <RequireAuth /> }>
        <Route path="/artigos" element={<MeusArtigosPage />} />
        <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
        <Route path="/artigos/novo" element={<EditarArquivoPage />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
