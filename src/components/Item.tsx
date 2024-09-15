import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderItem } from "../App";

interface ListItemProps {
  advertisement: OrderItem;
  onClick: any;
}

export const Item = ({ advertisement, onClick }: ListItemProps) => {
  const {
    id,
    name,
    description,
    price,
    createdAt,
    views,
    likes,
    imageUrl,
    count,
  } = advertisement;

  return (
    <li className="advertisement" id={id} onClick={onClick}>
      <Link className="advertisement__link" to={`/advertisements/${id}`}>
        <img className="advertisement__img" src={imageUrl} alt="avatar" />
        <div className="advertisement__content">
          <div className="advertisement__name">{name}</div>
          <div className="advertisement__description">{description}</div>
          <div className="advertisement__price">Цена: {price}</div>
          <div className="advertisement__views">Просмотров: {views}</div>
          <div className="advertisement__likes">Лайков: {likes}</div>
          <div className="advertisement__createdAt">
            Создано: {createdAt.slice(0, -14)} в {createdAt.slice(11, -5)}
          </div>
          <div className="advertisement__createdAt">Количество: {count}</div>
        </div>
      </Link>
    </li>
  );
};
