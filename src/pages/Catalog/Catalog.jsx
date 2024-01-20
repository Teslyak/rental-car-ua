import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListAdverts } from "../../redux/advertsCatalog/operatoins";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { ButtonLoadMore, UlWrap, Wraper } from "./Catalog.styled";
import { setLoadMoreAdverts } from "../../redux/advertsCatalog/slice";
import {
  selectAdvertsList,
  selectLimit,
  selectPage,
} from "../../redux/advertsCatalog/selectors";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export const Catalog = () => {
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdvertsList);
  const limitPage = useSelector(selectLimit);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getListAdverts({ signal: controller.signal, page }));
    return () => {
      return controller.abort();
    };
  }, [dispatch, page, location]);

  const handleLoadMore = () => {
    const countPage = { page: page + 1 };
    dispatch(setLoadMoreAdverts(countPage));
  };

  const noLoadMore = () => {
    const notify = () => toast("There are no more ads");
    notify();
    return null;
  };

  return (
    <Wraper>
      <UlWrap>
        <AdvertsList />
      </UlWrap>
      {adverts.length === limitPage ? (
        <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
      ) : (
        noLoadMore()
      )}
    </Wraper>
  );
};
