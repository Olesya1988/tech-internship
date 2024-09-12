import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Advertisment } from "../App";

// export type TListItem = {
//   id: string;
//   name: string,
//     description: string,
//     price: number,
//     createdAt: string,
//     views: number,
//     likes: number,
//     imageUrl: string
// };

// type Advertisment = {
//   /* Уникальный идентификатор. */
//   id: string;
//   /* Название. */
//   name: string;
//   /* Описание. */
//   description?: string;
//   /* Цена. */
//   price: number;
//   /* Дата и время создания. */
//   createdAt: string;
//   /* Количество просмотров. */
//   views: number;
//   /* Количество лайков. */
//   likes: number;
//   /* Ссылка на изображение. */
//   imageUrl?: string;
// };

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
      <div className="advertisement-view__content">{name}</div>
      <div className="advertisement-view__created">{createdAt}</div>
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
