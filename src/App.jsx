import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import { SharedLayout } from "./components/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/advertsCatalog/selectors";
import { Loader } from "./components/Loader/Loader";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      {isLoading ? <Loader /> : null}

      <Routes basename="/rental-car-ua/">
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="catalog"
            element={<Catalog setIsOpenModal={setIsOpenModal} />}
          />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {isOpenModal ? <Modal onClose={() => setIsOpenModal(false)} /> : null}
      <Toaster />
    </>
  );
}

export default App;
