import { ListItem } from "./ListItem";
import { Advertisment } from "../App";

interface ListProps {
  advertisements: Advertisment[];
  onClick: any;
  count: number;
}

export const List = ({ advertisements, onClick, count }: ListProps) => {
  advertisements = advertisements.slice(0, count);

  return (
    <>
      <ul>
        {advertisements.map((advertisement) => (
          <ListItem
            advertisement={advertisement}
            key={advertisement.id}
            onClick={onClick}
          />
        ))}
      </ul>
    </>
  );
};
