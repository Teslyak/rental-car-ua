import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListAdverts } from "../../redux/advertsCatalog/operatoins";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { ButtonLoadMore, UlWrap, Wraper } from "./Catalog.styled";
import { setLoadMoreAdverts } from "../../redux/advertsCatalog/slice";
import {
  selectAdvertsList,
  selectFilters,
  selectLimit,
  selectPage,
  selectTotalHits,
} from "../../redux/advertsCatalog/selectors";
import { useLocation } from "react-router-dom";
import { Filters } from "../../components/Filters/Filters";

export const Catalog = ({ setIsOpenModal }) => {
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const adverts = useSelector(selectAdvertsList);
  const totalHits = useSelector(selectTotalHits);
  const limitPage = useSelector(selectLimit);
  const dispatch = useDispatch();
  const location = useLocation();

  const maxPage = (totalHits / limitPage) ^ 1;

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
  const isFiltered = adverts.filter((e) => e.make === filters.value);

  return (
    <>
      <Wraper>
        <Filters />
        <UlWrap>
          <AdvertsList
            setIsOpenModal={setIsOpenModal}
            isFiltered={isFiltered}
          />
        </UlWrap>
        {page < maxPage ? (
          <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
        ) : null}
      </Wraper>
    </>
  );
};
