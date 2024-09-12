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

export const AddAdvertisement = ({ title, onChange, onSubmit, name, description, price, imageUrl }: FormProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <form className={title} onSubmit={onSubmit}>
      <div className={`${title}__close`} onClick={handleClose}>
        &#10006;
      </div>
      <textarea
        className={`${title}__input`}
        placeholder="Введите текст..."
        onChange={onChange}
        name="name"
        value={name}
      ></textarea>
      <textarea
        className={`${title}__input__description`}
        placeholder="Введите текст..."
        onChange={onChange}
        name="description"
        value={description}
      ></textarea>
      <textarea
        className={`${title}__input__price`}
        placeholder="Введите текст..."
        onChange={onChange}
        name="price"
        value={price}
      ></textarea>
      <input type="file" name="imageUrl" className={`${title}__input__imageUrl`}/>
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