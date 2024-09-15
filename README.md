# Тестовое задание для стажёра Frontend

Для реализации поставленной задачи был создан отдельный сервер, расположенный в репозитории: https://github.com/Olesya1988/tech-internship__backend

### Установка сервера:
npm i

### Запуск сервера:
npm run start

Сервер запускается на http://localhost:7070

К сожалению, с json-сервером возникли технические трудности, поэтому решение реализовано таким образом.


## Решение frontend-части задания, расположенное в данном репозитории

### Установка:

npm i --save-dev @types/react @types/react-dom @types/uuid moment react-router-dom typescript uuid

### Запуск:
npm run start

Страница запускается на http://localhost:3000

#### 1. Приложение состоит из:
- Панели навигации
- Страницы всех объявлений
- Страницы объявления
- Страницы заказов


#### Панель навигации:
- Вкладка “Объявления” - реализован переход на страницу объявлений
- Вкладка “Заказы” - реализован переход на страницу заказов

<image src="/src/IMG/Панель навигации.jpg" alt="Панель навигации">


#### На странице всех объявлений:
- Отображается список всех объявлений продавца

<image src="/src/IMG/Все объявления.jpg" alt="Все объявления">

- Реализована пагинация показа объявлений
- Реализован выбор количества объявлений для показа на странице (по умолчанию должно быть 10)

<image src="/src/IMG/Пагинация объявлений.jpg" alt="Пагинация объявлений">

- Реализован поиск по названию объявления

<image src="/src/IMG/Поиск объявления.jpg" alt="Поиск объявления">

- Можно перейти на страницу объявления (по клику на карточку)
- В карточке объявления есть следующая информация о нем:
1. Картинка
2. Название;
3. Стоимость;
4. Количество просмотров;
5. Количество лайков;

<image src="/src/IMG/Объявление.jpg" alt="Объявление">

- Есть возможность создавать новые объявления (Модальное окно с input):

<image src="/src/IMG/Кнопка добавления объявления.jpg" alt="Кнопка добавления объявления">

1. Картинка (текстовое поле для ввода URL);
2. Название (текстовое поле);
3. Описание (текстовое поле)
4. Стоимость (числовое поле);

<image src="/src/IMG/Добавление объявления.jpg" alt="Добавление объявления">


#### На странице объявления:
- Есть возможность просмотра объявления

<image src="/src/IMG/Объявление.jpg" alt="Объявление">

- В редактировании объявления есть возможность:
1. Менять картинку;
2. Менять название;
3. Менять цену;
4. Менять описание.

<image src="/src/IMG/Редактирование объявления.jpg" alt="Редактирование объявления">


#### На странице заказов:
- Отображается список заказов с фильтрами по статусу

<image src="/src/IMG/Фильтр статуса заказа.jpg" alt="Фильтр статуса заказа">

- Возможно сделать сортировку по сумме заказа

<image src="/src/IMG/Сортировка по стоимости заказа.jpg" alt="Сортировка по стоимости заказа">

- На карточке заказа изображена следующая информация:
1. Количество товаров;
2. Возможность завершения заказа;

<image src="/src/IMG/Кнопка завершить заказ.jpg" alt="Кнопка завершить заказ">

3. Стоимость заказа;
4. Дата создания заказа;
5. Статус (текстом);
6. Номер заказа;

<image src="/src/IMG/Заказы.jpg" alt="Заказы">

7. Кнопка “Показать все товары”, показывающая все товары в данном заказе (можно отображать их в этой же карточке или сделать модальное окно)

<image src="/src/IMG/Кнопка показа заказов.jpg" alt="Кнопка показа заказов">

8. При клике на товар в заказе есть возможность перейти в объявление продавца по этому товару

<image src="/src/IMG/Переход на страницу объявление из заказа.jpg" alt="Переход на страницу объявление из заказа">