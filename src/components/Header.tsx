import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <button className="header__button button-submit">
        <NavLink to="/new">Создать пост</NavLink>
      </button>
    </header>
  );
};