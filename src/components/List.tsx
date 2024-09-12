import { TListItem, ListItem } from "./ListItem";
import { Link } from "react-router-dom";

interface ListProps {
  posts: TListItem[];
  onClick: any;
}

export const List = ({ posts, onClick }: ListProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem post={post} key={post.id} onClick={onClick} />
      ))}
    </ul>
  );
};