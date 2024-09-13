import { ListItemOrder } from "./ListItemOrder";
import { Link } from "react-router-dom";
import { Order } from "../App";

interface ListProps {
orders: Order[];
  
}

export const ListOrder = ({ orders}: ListProps) => {
  return (
    <ul>
      {orders.map((order) => (
        <ListItemOrder
        order={order}
          key={order.id}
      
        />
      ))}
    </ul>
  );
};
