import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";
import { Advertisment } from "../App";

interface ListProps {
  advertisements: Advertisment[];
  onClick: any;
}

export const List = ({ advertisements, onClick }: ListProps) => {
  return (
    <ul>
      {advertisements.map((advertisement) => (
        <ListItem
          advertisement={advertisement}
          key={advertisement.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
