import { Link } from "react-router-dom";
import { Button, Title, Wrap } from "./Home.styled";
import { useDispatch } from "react-redux";
import {} from "../../redux/advertsCatalog/selectors";
import { setAdverts, setFilters } from "../../redux/advertsCatalog/slice";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters(""));
    dispatch(setAdverts([]));
  }, [dispatch]);

  return (
    <Wrap>
      <Title>
        RENT A QUALIFIED CAR IN LVIV FOR ANY RIDESHARE OR DELIVERY SERVICE
      </Title>
      <Link to="catalog">
        <Button>Find A Car</Button>
      </Link>
    </Wrap>
  );
};
