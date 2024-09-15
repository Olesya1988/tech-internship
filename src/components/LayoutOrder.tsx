import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ListOrder } from "./ListOrder";
import { useState } from "react";

export const LayoutOrder = ({ orders, onClick }: any) => {
  const [orderStatus, setOrderStatus] = useState(-1);
  const checkStatus = (e: any) => {
    let status = Number(e.target.value);
    setOrderStatus(status);
  };

  const [orderSum, setOrderSum] = useState(10);
  const checkSum = (e: any) => {
    let sum = Number(e.target.value);
    setOrderSum(sum);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <div className="filters">
          <div className="filter">
            <span className="order__status__title">Выберите статус заказа</span>
            <select className="order__status__content" onClick={checkStatus}>
              <option value="-1">Все статусы</option>
              <option value="0">Создан</option>
              <option value="4">Получен</option>
            </select>
          </div>
          <div className="filter">
            <span className="order__sum__title">
              Сортировать по сумме заказа
            </span>
            <select className="order__sum__content" onClick={checkSum}>
              <option value="10">Без сортировки</option>
              <option value="20">По возрастанию</option>
              <option value="30">По убыванию</option>
            </select>
          </div>
        </div>
        <ListOrder
          orders={orders}
          onClick={onClick}
          orderStatus={orderStatus}
          orderSum={orderSum}
        />
        <Outlet />
      </main>
    </div>
  );
};
