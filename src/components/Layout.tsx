import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { List } from "./List";
import { useState } from "react";

export const Layout = ({ advertisements, onClick }: any) => {
  const [count, setCount] = useState(10);

  const onCheck = (e: any) => {
    let count: number = e.target.textContent;
    setCount(count);
  };
  // Реализация поиска
  const search = (ev: any) => {
    const value = ev?.target?.value?.trim();
    const searchItems = Array.from(document.querySelectorAll(".advertisement"));
    const searchRegExp = new RegExp(value, "gi");

    if (value === "") {
      searchItems.forEach((el) => {
        el.classList.remove("hidden");
      });
      return;
    }

    searchItems.forEach((el) => {
      const elementText: any = el.querySelector(
        ".advertisement__name"
      )?.textContent;
      const isContainsSearchRequest = searchRegExp.test(elementText);
      if (!isContainsSearchRequest) {
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
      }
    });
  };

  return (
    <div className="container">
      <Header />
      <div className="advertisements__count__title">Показать объявлений</div>
      <div className="advertisements__count" onClick={onCheck}>
        5
      </div>
      <div className="advertisements__count" onClick={onCheck}>
        10
      </div>
      <div className="advertisements__count" onClick={onCheck}>
        20
      </div>
      <div className="advertisements__count" onClick={onCheck}>
        50
      </div>
      <div className="advertisements__count" onClick={onCheck}>
        100
      </div>
      <div>
        <input
          className="advertisement__search"
          type="search"
          onInput={search}
          placeholder="Найти..."
        />
      </div>
      <main>
        <List advertisements={advertisements} onClick={onClick} count={count} />
        <Outlet />
      </main>
    </div>
  );
};
