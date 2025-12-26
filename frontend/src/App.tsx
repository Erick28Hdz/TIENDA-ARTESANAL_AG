import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/store/Home/page/Home";
import MainLayout from "./app/layouts/MainLayout";
import SimpleLayout from "./app/layouts/SimpleLayout";
import Categorias from "./modules/store/Categories/page/categorias";
import Productos from "./modules/store/Products/page/productos";
import Promociones from "./modules/store/promotions/page/promociones";
import Reseñas from "./modules/store/comments/page/reseñas";
const App = () => {
  return (
    <Router>
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
              < Categorias />
            </SimpleLayout>
          }
        />
        <Route
          path="/Productos"
          element={
            <SimpleLayout>
              < Productos/>
            </SimpleLayout>
          }
        />
        <Route
          path="/Promociones"
          element={
            <SimpleLayout>
              < Promociones/>
            </SimpleLayout>
          }
        />
        <Route
          path="/Reseñas"
          element={
              <SimpleLayout>
                < Reseñas/>
              </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
