import { NavLink, Wrap } from "./Header.styled";

export const Header = () => {
  return (
    <Wrap>
      <NavLink to="/">Home</NavLink>
      <NavLink to="catalog">Catalog</NavLink>
      <NavLink to="favorites">Favorites</NavLink>
    </Wrap>
  );
};
