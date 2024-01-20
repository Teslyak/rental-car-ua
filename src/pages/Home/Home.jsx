import { Link } from "react-router-dom";
import { Button, Title, Wrap } from "./Home.styled";

export const Home = () => {
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
