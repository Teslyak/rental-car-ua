import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import { SharedLayout } from "./components/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/advertsCatalog/selectors";

function App() {
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : null}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
