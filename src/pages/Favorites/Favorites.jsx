import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { UlWrap, Wraper } from "./Favorites.styled";

export const Favorites = () => {
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
