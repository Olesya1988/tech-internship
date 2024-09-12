import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { List } from "./List";

export const Layout = ({ posts, onClick }: any) => {
  return (
    <div className="container">
      <Header />
      <main>
        <List posts={posts} onClick={onClick} />
        <Outlet />
      </main>
    </div>
  );
};