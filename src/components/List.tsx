import { TListItem, ListItem } from "./ListItem";
import { Link } from "react-router-dom";

interface ListProps {
  advertisements: TListItem[];
  onClick: any;
}

export const List = ({ advertisements, onClick }: ListProps) => {
  return (
    <ul>
      {advertisements.map((advertisement) => (
        <ListItem advertisement={advertisement} key={advertisement.id} onClick={onClick} />
      ))}
    </ul>
  );
};