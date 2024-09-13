import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Order } from "../App";
import { Items } from "./Items";

interface ListItemProps {
  order: Order;
}

export const ListItemOrder = ({ order }: ListItemProps) => {
  const { id, status, createdAt, finishedAt, items, deliveryWay, total } =
    order;

  const showItems = (e: any) => {
    const target = e.target;
    const parent = target.closest(".order");
    parent.querySelector("ul")?.classList.toggle("hidden");
  };

  let statusText = "";

  switch (status) {
    case 0:
      statusText = "Создан";
      break;
    case 1:
      statusText = "Оплачен";
      break;
    case 2:
      statusText = "В пути";
      break;
    case 3:
      statusText = "Доставлен в пункт назначения";
      break;
    case 4:
      statusText = "Получен";
      break;
    case 5:
      statusText = "Заархивирован";
      break;
    case 6:
      statusText = "Возвращен";
      break;
  }

  return (
    <li className="order" id={id}>
      <div className="order__content">
        <div className="order__id">Номер заказа: {id}</div>
        <div className="order__status">Статус: {statusText}</div>
        <div className="order__createdAt">
          Дата и время создания: {createdAt}
        </div>
        <div className="order__finishedAt">
          Дата и время завершения: {finishedAt}
        </div>
        <div className="order__deliveryWay">
          Способ доставки (Почта, СДЭК...): {deliveryWay}
        </div>
        <div className="order__total">Сумма заказа: {total}</div>
        <button className="order__button" onClick={showItems}>
          Показать все товары
        </button>
        <Items advertisements={items}></Items>
      </div>
    </li>
  );
};
