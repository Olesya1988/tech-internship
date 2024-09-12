import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export type TListItem = {
  id: string;
  content: string;
  created: string;
};

interface ListItemProps {
  activePost: TListItem;
  onClick: any;
  openEditForm: any;
}

export const Post = ({ activePost, onClick, openEditForm }: ListItemProps) => {
  const { id, content, created } = activePost;

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="post-view" id={id}>
      <div className="post-view__close" onClick={handleClose}>
        &#10006;
      </div>
      <div className="post-view__content">{content}</div>
      <div className="post-view__created">{created}</div>
      <div className="buttons">
        <Link to={`/posts/${id}/edit`}>
          <button
            className="post-view__edit button-submit"
            onClick={openEditForm}
          >
            Изменить
          </button>
        </Link>
        <button
          className="post-view__delete button-cancel"
          onClick={(e) => {
            onClick(e);
            handleClose();
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};