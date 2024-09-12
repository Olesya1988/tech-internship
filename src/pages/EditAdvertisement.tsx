import { useNavigate } from "react-router-dom";

interface FormProps {
  title: string;
  onChange: any;
  onSubmit: any;
  name: string;
}

export const EditAdvertisement = ({ title, onChange, onSubmit, name }: FormProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <form className={title} onSubmit={onSubmit}>
      <div className="advertisement-view__close" onClick={handleClose}>
        &#10006;
      </div>
      <textarea
        className={`${title}__input`}
        onChange={onChange}
        name="name"
        value={name}
      ></textarea>
      <div className="buttons">
        <button className="button-submit">Сохранить</button>
        <button className="button-cancel" onClick={handleClose}>
          Отменить
        </button>
      </div>
    </form>
  );
};