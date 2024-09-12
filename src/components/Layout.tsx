import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { List } from "./List";

export const Layout = ({ advertisements, onClick }: any) => {
  return (
    <div className="container">
      <Header />
      <main>
        <List advertisements={advertisements} onClick={onClick} />
        <Outlet />
      </main>
    </div>
  );
};