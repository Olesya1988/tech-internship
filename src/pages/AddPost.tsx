import { useNavigate } from "react-router-dom";

interface FormProps {
  title: string;
  onChange: any;
  onSubmit: any;
  content: string;
}

export const AddPost = ({ title, onChange, onSubmit, content }: FormProps) => {
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
        name="content"
        value={content}
      ></textarea>
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