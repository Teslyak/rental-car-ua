import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListAdverts } from "../../redux/advertsCatalog/operatoins";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { UlWrap, Wraper } from "./Catalog.styled";

export const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getListAdverts(controller.signal));
    return () => {
      return controller.abort();
    };
  }, [dispatch]);
  return (
    <Wraper>
      <UlWrap>
        <AdvertsList />
      </UlWrap>
    </Wraper>
  );
};
