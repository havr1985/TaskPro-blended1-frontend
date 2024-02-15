import { useState } from "react";
import icons from "../../../shared/images/icons.svg";
import { FilterModal } from "./FilterModal";
import { FilterButton, FilterIcon } from "./Filters.styled";

const Filters = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  /*   const toggleModalVisibility = () => {
    setIsFilterModalOpen((prevState) => !prevState);
  }; */
  return (
    <>
      <FilterButton
        onClick={() => openFilterModal()}
        aria-label="Filters button"
      >
        <FilterIcon>
          <use href={icons + "#icon-filter"} />
        </FilterIcon>
        Filters
      </FilterButton>
      <FilterModal isOpen={isFilterModalOpen} onClose={closeFilterModal} />
    </>
  );
};

export default Filters;
