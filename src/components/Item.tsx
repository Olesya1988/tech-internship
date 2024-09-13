import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderItem } from "../App";

interface ListItemProps {
  advertisement: OrderItem;
}

export const Item = ({ advertisement }: ListItemProps) => {
  const { id, name, description, price, createdAt, views, likes, imageUrl, count } =
    advertisement;
    console.log(advertisement);

  return (
    <li className="advertisement" id={id} >      
        <img
          className="advertisement__img"
          src="https://i.pravatar.cc/300"
          alt="avatar"
        />
        <div className="advertisement__content">
          <div className="advertisement__name">{name}</div>
          <div className="advertisement__description">{description}</div>
          <div className="advertisement__price">Цена: {price}</div>
          <div className="advertisement__views">Просмотров: {views}</div>
          <div className="advertisement__likes">Лайков: {likes}</div>
          <div className="advertisement__createdAt">Создано: {createdAt}</div>
          <div className="advertisement__createdAt">Количество: {count}</div>
        </div>
    </li>
  );
};
