import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import { SharedLayout } from "./components/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
