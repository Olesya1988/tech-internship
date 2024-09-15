import { ListItemOrder } from "./ListItemOrder";
import { Link } from "react-router-dom";
import { Order } from "../App";

interface ListProps {
  orders: Order[];
  onClick: any;
  orderStatus: number;
  orderSum: number;
}

export const ListOrder = ({
  orders,
  onClick,
  orderStatus,
  orderSum,
}: ListProps) => {
  if (orderStatus === -1) {
    console.log(-1);
  } else {
    orders = orders.filter((el) => el.status === orderStatus);
  }

  if (orderSum === 10) {
    console.log(10);
  } else if (orderSum === 20) {
    orders.sort(function (a, b) {
      return a.total - b.total;
    });
  } else {
    orders.sort(function (a, b) {
      return b.total - a.total;
    });
  }

  return (
    <ul>
      {orders.map((order) => (
        <ListItemOrder order={order} key={order.id} onClick={onClick} />
      ))}
    </ul>
  );
};
