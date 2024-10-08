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

export const AddAdvertisement = ({
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
    navigate(-1);
  };
  return (
    <form className={title} onSubmit={onSubmit}>
      <div className={`${title}__close`} onClick={handleClose}>
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
      <h3 className={`${title}__title`}>Введите URL изображения:</h3>
      <input
        type="text"
        name="imageUrl"
        onChange={onChange}
        className={`${title}__input__imageUrl`}
      />
      <div className={`${title}__submit-contaiter`}>
        <button
          className={`${title}__submit button-submit`}
          onClick={handleClose}
        >
          Опубликовать
        </button>
      </div>
    </form>
  );
};
