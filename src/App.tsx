import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LayoutOrder } from "./components/LayoutOrder";
import { AddAdvertisement } from "./pages/AddAdvertisement";
import { Advertisement } from "./pages/Advertisement";
import { EditAdvertisement } from "./pages/EditAdvertisement";
import "./App.css";
import { Items } from "./components/Items";

export type Advertisment = {
  /* Уникальный идентификатор. */
  id: string;
  /* Название. */
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Дата и время создания. */
  createdAt: string;
  /* Количество просмотров. */
  views: number;
  /* Количество лайков. */
  likes: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

export const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
} as const;

export type OrderItem = Advertisment & { count: number };

export type Order = {
  /* Уникальный идентификатор. */
  id: string;
  /* Статус. */
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  /* Дата и время создания. */
  createdAt: string;
  /* Дата и время завершения. */
  finishedAt?: string;
  /* Товары в заказе. */
  items: Array<OrderItem>;
  /* Способ доставки(Почта, СДЭК...) */
  deliveryWay: string;
  /* Сумма заказа */
  total: number;
};

type Image = {
  /* Уникальный идентификатор. */
  id: number;
  /* Ссылка. */
  url: string;
  /* Название. */
  name: string;
};
export default function App() {
  // Раздел с объявлениями
  const [advertisements, setAdvertisements] = useState<Advertisment[]>([]);

  const [form, setForm] = useState({
    // форма ввода
    name: "",
    description: "",
    price: 0,
    createdAt: "",
    views: 0,
    likes: 0,
    imageUrl: "",
  });

  const [formEdit, setFormEdit] = useState({
    // форма редактирования
    name: "",
    description: "",
    price: 0,
    createdAt: "",
    views: 0,
    likes: 0,
    imageUrl: "",
  });

  const [activeAdvertisement, setActiveAdvertisement] = useState({
    // выбранное объявление
    id: "",
    name: "",
    description: "",
    price: 0,
    createdAt: "",
    views: 0,
    likes: 0,
    imageUrl: "",
  });

  const url = "http://localhost:7070/advertisements";

  const getAllAdvertisements = async () => {
    // получение всех объявлений
    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();
    setAdvertisements(result); // отправка объявлений в state
  };

  const createAdvertisement = async (
    name: string,
    description: string,
    price: number,
    imageUrl: string
  ) => {
    const advertisement = {
      name,
      description,
      price,
      imageUrl,
    };
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(advertisement),
    });
    getAllAdvertisements();
  };

  const deleteAdvertisement = async (id: string) => {
    // удаление объявления по id
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    getAllAdvertisements();
  };

  const readAdvertisement = async (id: string) => {
    // получение объявления по заданному id
    const response = await fetch(`${url}/${id}`, {
      method: "GET",
    });
    const result = await response.json();
    setActiveAdvertisement(result.advertisement); //отправка активного объявления в state
  };

  const updateAdvertisement = async (
    id: string,
    name: string,
    description: string,
    price: number,
    createdAt: string,
    views: number,
    likes: number,
    imageUrl: string
  ) => {
    //изменение объявления
    const advertisement = {
      id,
      name,
      description,
      price,
      createdAt,
      views,
      likes,
      imageUrl,
    };
    await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(advertisement),
    });
    getAllAdvertisements();
  };

  const loadData = () => {
    // загрузка всех объявлений и заказов
    getAllAdvertisements();
    getAllOrders();
  };

  useEffect(loadData, []); // первая загрузка всех объявлений

  const onAddAdvertisementHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // отправляем текст из input ввода в state формы
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitAdvertisementHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    // отправляем текст из state формы в запрос на новое объявление
    e.preventDefault();
    createAdvertisement(form.name, form.description, form.price, form.imageUrl);
    setForm({
      name: "",
      description: "",
      price: 0,
      createdAt: "",
      views: 0,
      likes: 0,
      imageUrl: "",
    });
  };

  const onDeleteAdvertisementHandler = (e: any) => {
    // событие удаления объявления по id
    e.preventDefault();
    const target = e.target;
    deleteAdvertisement(target.closest(".advertisement-view").id);
  };

  const onUpdateAdvertisementHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // отправляем текст из input редактирования в state формы редактирования
    const { name, value } = e.target;
    setFormEdit((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  const onSubmitUpdateAdvertisementHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    // отправляем текст из state формы редактирования на сервер
    e.preventDefault();
    updateAdvertisement(
      activeAdvertisement.id,
      formEdit.name,
      formEdit.description,
      formEdit.price,
      formEdit.createdAt,
      formEdit.views,
      formEdit.likes,
      formEdit.imageUrl
    );
    setFormEdit({
      name: "",
      description: "",
      price: 0,
      createdAt: "",
      views: 0,
      likes: 0,
      imageUrl: "",
    });
    handleClose();
  };

  const onReadAdvertisementHandler = (e: any) => {
    // событие получения объявления по id
    e.preventDefault();
    const target = e.target;
    readAdvertisement(target.closest("li").id);
  };

  // При открытии формы редактирования
  const openEditForm = () => {
    setFormEdit({
      name: activeAdvertisement.name,
      description: activeAdvertisement.description,
      price: activeAdvertisement.price,
      createdAt: activeAdvertisement.createdAt,
      views: activeAdvertisement.views,
      likes: activeAdvertisement.likes,
      imageUrl: activeAdvertisement.imageUrl,
    });
  };

  // Раздел с заказами

  const [orders, setOrders] = useState<Order[]>([]);

  const urlOrder = "http://localhost:7070/orders";

  const getAllOrders = async () => {
    // получение всех заказов
    const response = await fetch(urlOrder, {
      method: "GET",
    });
    const result = await response.json();
    setOrders(result); // отправка заказов в state
  };

  return (
    <>
      <Routes>
        <Route path="/orders" element={<LayoutOrder orders={orders} />} />
        <Route
          path="/new"
          element={
            <AddAdvertisement
              title="add-advertisement"
              onChange={onAddAdvertisementHandler}
              onSubmit={onSubmitAdvertisementHandler}
              name={form.name}
              description={form.description}
              price={form.price}
              imageUrl={form.imageUrl}
            />
          }
        />
        <Route
          path="/advertisements/:id"
          element={
            <Advertisement
              activeAdvertisement={activeAdvertisement}
              onClick={onDeleteAdvertisementHandler}
              openEditForm={openEditForm}
            />
          }
        />
        <Route
          path="/advertisements/:id/edit"
          element={
            <EditAdvertisement
              title="edit-advertisement"
              onChange={onUpdateAdvertisementHandler}
              onSubmit={onSubmitUpdateAdvertisementHandler}
              name={formEdit.name}
              description={formEdit.description}
              price={formEdit.price}
              imageUrl={formEdit.imageUrl}
            />
          }
        />
        <Route
          path="/"
          element={
            <Layout
              advertisements={advertisements}
              onClick={onReadAdvertisementHandler}
            />
          }
        />
      </Routes>
    </>
  );
}
