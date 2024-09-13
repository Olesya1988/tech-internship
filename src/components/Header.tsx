import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/orders">
        <button className="header__button button-submit">Заказы</button>
      </NavLink>
      <NavLink to="/new">
        <button className="header__button button-submit add">+</button>
      </NavLink>
      <NavLink to="/">
        <button className="header__button button-submit">Объявления</button>
      </NavLink>
    </header>
  );
};
