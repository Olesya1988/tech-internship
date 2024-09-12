import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type TListItem = {
  id: string;
  content: string;
  created: string;
};

interface ListItemProps {
  post: TListItem;
  onClick: any;
}

export const ListItem = ({ post, onClick }: ListItemProps) => {
  const { id, content, created } = post;

  return (
    <li className="post" id={id} onClick={onClick}>
      <Link className="post__link" to={`/posts/${id}`}>
        <img
          className="post__img"
          src="https://i.pravatar.cc/300"
          alt="avatar"
        />
        <div className="post__content">
          <div className="post__text">{content}</div>
          <div className="post__created">{created}</div>
        </div>
      </Link>
    </li>
  );
};