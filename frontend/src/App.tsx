import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./modules/store/Home/page/Home";
import MainLayout from "./app/layouts/MainLayout";
import LoginLayout from "./app/layouts/LoginLayout";
import SimpleLayout from "./app/layouts/SimpleLayout";
import Categorias from "./modules/store/Categories/page/categorias";
import Productos from "./modules/store/Products/page/productos";
import Promociones from "./modules/store/promotions/page/promociones";
import Reseñas from "./modules/store/comments/page/reseñas";
import About from "./modules/store/about/page/About";
import Login from "./modules/user/login/page/Login";
import Dashboard from "./modules/admin/dashboard/page/dashboard";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/Categorias"
          element={
            <SimpleLayout>
              <Categorias />
            </SimpleLayout>
          }
        />
        <Route
          path="/Productos"
          element={
            <SimpleLayout>
              <Productos />
            </SimpleLayout>
          }
        />
        <Route
          path="/Promociones"
          element={
            <SimpleLayout>
              <Promociones />
            </SimpleLayout>
          }
        />
        <Route
          path="/Reseñas"
          element={
            <SimpleLayout>
              <Reseñas />
            </SimpleLayout>
          }
        />
        <Route
          path="/about"
          element={
            <SimpleLayout>
              <About />
            </SimpleLayout>
          }
        />
        <Route
          path="/login"
          element={
            <LoginLayout>
              <Login />
            </LoginLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SimpleLayout>
              <Dashboard />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
