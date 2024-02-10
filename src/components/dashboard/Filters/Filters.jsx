import { useState } from "react";
/* import { useDispatch } from "react-redux"; */
import icons from "../../../shared/images/icons.svg";
import { FilterModal } from "./FilterModal";
import { FilterButton, FilterIcon } from "./Filters.styled";
/* import MainDashboard from "../MainDashboard/MainDashboard"; */
import ScreensPage from "../../../pages/ScreensPage";

const Filters = () => {

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

/*   const openFilterModal = () => {
     setIsFilterModalOpen(true);
  }
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  }; */

    const toggleModalVisibility = () => {
    setIsFilterModalOpen((prevState) => !prevState);
  };
 /*  if (showAll) return <ScreensPage/> */

  return (
    <>
      <FilterButton onClick={() => toggleModalVisibility()}>
        <FilterIcon>
          <use href={icons + "#icon-filter"} />
        </FilterIcon>
        Filters 
      </FilterButton>
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={toggleModalVisibility}
        onShowAll={handleShowAll}
        />
   </>
    );
  };

export default Filters;
