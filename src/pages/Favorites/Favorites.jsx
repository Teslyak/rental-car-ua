import { useEffect } from "react";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { UlWrap, Wraper } from "./Favorites.styled";
import { setAdverts, setFilters } from "../../redux/advertsCatalog/slice";
import { useDispatch } from "react-redux";

export const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilters(""));
    dispatch(setAdverts([]));
  }, [dispatch]);

  return (
    <>
      <Wraper>
        <UlWrap>
          <FavoriteList />
        </UlWrap>
      </Wraper>
    </>
  );
};
