import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type TListItem = {
  id: string;
  name: string;
  createdAt: string;
};

interface ListItemProps {
  advertisement: TListItem;
  onClick: any;
}

export const ListItem = ({ advertisement, onClick }: ListItemProps) => {
  const { id, name, createdAt } = advertisement;

  return (
    <li className="advertisement" id={id} onClick={onClick}>
      <Link className="advertisement__link" to={`/advertisements/${id}`}>
        <img
          className="advertisement__img"
          src="https://i.pravatar.cc/300"
          alt="avatar"
        />
        <div className="advertisement__content">
          <div className="advertisement__text">{name}</div>
          <div className="advertisement__created">{createdAt}</div>
        </div>
      </Link>
    </li>
  );
};