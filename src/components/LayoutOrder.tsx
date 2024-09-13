import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ListOrder } from "./ListOrder";

export const LayoutOrder = ({ orders}: any) => {
  return (
    <div className="container">
      <Header />
      <main>
        <ListOrder orders={orders} />
        <Outlet />
      </main>
    </div>
  );
};