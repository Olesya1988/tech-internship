import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Order } from "../App";
import { Items } from "./Items";

interface ListItemProps {
  order: Order;
  onClick: any;
}

export const ListItemOrder = ({ order, onClick }: ListItemProps) => {
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

  const urlOrder = "http://localhost:7070/orders";

  const updateDate = async (id: string, finishedAt: string) => {
    //изменение объявления
    const order = {
      id,
      finishedAt,
    };
    await fetch(`${urlOrder}/${id}`, {
      method: "PUT",
      body: JSON.stringify(order),
    });
  };

  const finish = () => {
    let now: string = new Date().toLocaleString();
    updateDate(id, now);
    let el = document.querySelector(".order__finishedAt")?.textContent;
    el = now;
    /* eslint-disable */
    location.reload();
  };

  return (
    <li className="order" id={id}>
      <div className="order__content">
        <div className="order__id">Номер заказа: {id}</div>
        <div className="order__status">Статус: {statusText}</div>
        <div className="order__createdAt">
          Дата и время создания: {createdAt.slice(0, -14)} в{" "}
          {createdAt.slice(11, -5)}
        </div>
        <div className="order__finishedAt">
          Дата и время завершения:{" "}
          {finishedAt ? (
            finishedAt
          ) : (
            <button className="order-finish" onClick={finish}>
              Завершить
            </button>
          )}
        </div>
        <div className="order__deliveryWay">
          Способ доставки (Почта, СДЭК...): {deliveryWay}
        </div>
        <div className="order__total">Сумма заказа: {total}</div>
        <button className="order__button" onClick={showItems}>
          Показать все товары
        </button>
        <Items advertisements={items} onClick={onClick}></Items>
      </div>
    </li>
  );
};
