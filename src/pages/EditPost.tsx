import { useNavigate } from "react-router-dom";

interface FormProps {
  title: string;
  onChange: any;
  onSubmit: any;
  content: string;
}

export const EditPost = ({ title, onChange, onSubmit, content }: FormProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <form className={title} onSubmit={onSubmit}>
      <div className="post-view__close" onClick={handleClose}>
        &#10006;
      </div>
      <textarea
        className={`${title}__input`}
        onChange={onChange}
        name="content"
        value={content}
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