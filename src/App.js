import {
  Route,
  Routes
} from "react-router-dom";
import ListBikes from './views/listBikes';
import DetailBike from './views/detailBike';

// Se utiliza ReactRouter para dividir las 2 pantallas del enunciado
// ** Se podría hacer sin esto
// ** Se podría separar la lógica del Routes: podríamos armar un array de routes para que esto quede bien simple y se simplifique el código
// ** Se podrían agregar manejos de errores para rutas inexistentes o redirecciones (aunque en algunos casos no sería conveniente para SEO)

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<ListBikes />}
      />
      <Route
        path="/bike/:id"
        element={<DetailBike />}
      />
    </Routes>
  );
}

export default App;
