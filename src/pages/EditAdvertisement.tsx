import { useNavigate } from "react-router-dom";

interface FormProps {
  title: string;
  onChange: any;
  onSubmit: any;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

export const EditAdvertisement = ({
  title,
  onChange,
  onSubmit,
  name,
  description,
  price,
  imageUrl,
}: FormProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <form className={title} onSubmit={onSubmit}>
      <div className="advertisement-view__close" onClick={handleClose}>
        &#10006;
      </div>
      <h3 className={`${title}__title`}>Наименование товара</h3>
      <textarea
        className={`${title}__input`}
        onChange={onChange}
        name="name"
        value={name}
      ></textarea>
      <h3 className={`${title}__title`}>Описание товара</h3>
      <textarea
        className={`${title}__input__description`}
        onChange={onChange}
        name="description"
        value={description}
      ></textarea>
      <h3 className={`${title}__title`}>Цена товара</h3>
      <input
        className={`${title}__input__price`}
        onChange={onChange}
        name="price"
        value={price}
      />
      <h3 className={`${title}__title`}>Загрузить изображение:</h3>
      <input
        type="text"
        onChange={onChange}
        name="imageUrl"
        className={`${title}__input__imageUrl`}
        placeholder="URL изображения"
      />
      <div className="buttons">
        <button className="button-submit">Сохранить</button>
        <button className="button-cancel" onClick={handleClose}>
          Отменить
        </button>
      </div>
    </form>
  );
};
