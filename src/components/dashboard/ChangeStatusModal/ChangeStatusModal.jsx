import icons from "../../../shared/images/icons.svg";
import { Icon } from "../Card/Card.styled";
import { ShowAllBtn, ModalFilter } from "./ChangeStatusModal.styled";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import { useSelector } from "react-redux";

export const ChangeStatusModal = ({
  isOpen,
  onClose,
  onSelectStatus,
  cardId,
  owner,
}) => {
  const { column: columns } = useSelector(selectCurrentDashboard);

  if (!isOpen) return null;

  const handleStatus = (columnId) => {
    onClose();
    onSelectStatus(columnId, cardId, owner);
  };

  return (
    <ModalFilter>
      {columns === undefined ? (
        <></>
      ) : (
        columns.map(({ _id: id, title }) => {
          return (
            <ShowAllBtn key={id} onClick={() => handleStatus(id)}>
              {title}
              <Icon>
                <use href={icons + "#icon-arrow-circle-broken-right"} />
              </Icon>
            </ShowAllBtn>
          );
        })
      )}
    </ModalFilter>
  );
};
