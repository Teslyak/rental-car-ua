import { Links, Wrap } from "./Header.styled";

export const Header = () => {
  return (
    <Wrap>
      <Links to="/">Home</Links>
      <Links to="catalog">Catalog</Links>
      <Links to="favorites">Favorites</Links>
    </Wrap>
  );
};
