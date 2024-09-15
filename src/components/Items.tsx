import { Item } from "./Item";
import { Link } from "react-router-dom";
import { OrderItem } from "../App";

interface ListProps {
  advertisements: OrderItem[];
  onClick: any;
}

export const Items = ({ advertisements, onClick }: ListProps) => {
  return (
    <ul className="hidden">
      {advertisements.map((advertisement) => (
        <Item
          advertisement={advertisement}
          key={advertisement.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
