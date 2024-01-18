import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import { SharedLayout } from "./components/SharedLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
