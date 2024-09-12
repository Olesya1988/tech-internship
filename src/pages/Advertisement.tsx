import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Advertisment } from "../App";

interface ListItemProps {
  activeAdvertisement: Advertisment;
  onClick: any;
  openEditForm: any;
}

export const Advertisement = ({
  activeAdvertisement,
  onClick,
  openEditForm,
}: ListItemProps) => {
  const { id, name, description, price, createdAt, views, likes, imageUrl } =
    activeAdvertisement;

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="advertisement-view" id={id}>
      <div className="advertisement-view__close" onClick={handleClose}>
        &#10006;
      </div>
      <div className="advertisement__name">{name}</div>
      <div className="advertisement__description">{description}</div>
      <div className="advertisement__price">Цена: {price}</div>
      <div className="advertisement__views">Просмотров: {views}</div>
      <div className="advertisement__likes">Лайков: {likes}</div>
      <div className="advertisement__createdAt">Создано: {createdAt}</div>
      <div className="buttons">
        <Link to={`/advertisements/${id}/edit`}>
          <button
            className="advertisement-view__edit button-submit"
            onClick={openEditForm}
          >
            Изменить
          </button>
        </Link>
        <button
          className="advertisement-view__delete button-cancel"
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
