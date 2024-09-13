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
      parent.querySelector('ul')?.classList.toggle('hidden');
    }

  return (
    <li className="order" id={id}> 
        <div className="order__content">
        <div className="order__id">Номер заказа: {id}</div>
          <div className="order__status">Статус: {status}</div>  
          <div className="order__createdAt">Дата и время создания: {createdAt}</div>
          <div className="order__finishedAt">Дата и время завершения: {finishedAt}</div>
          <div className="order__deliveryWay">Способ доставки (Почта, СДЭК...): {deliveryWay}</div>
          <div className="order__total">Сумма заказа: {total}</div>
          <button className="order__button" onClick={showItems}>Показать все товары</button>
          <Items advertisements={items}></Items>
        </div>      
    </li>
  );
};
