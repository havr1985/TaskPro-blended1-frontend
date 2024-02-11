import { useState } from "react";
import icons from "../../../shared/images/icons.svg";
import { FilterModal } from "./FilterModal";
import { FilterButton, FilterIcon } from "./Filters.styled";

const Filters = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleModalVisibility = () => {
    setIsFilterModalOpen((prevState) => !prevState);
  };
  return (
    <>
      <FilterButton onClick={() => toggleModalVisibility()}>
        <FilterIcon>
          <use href={icons + "#icon-filter"} />
        </FilterIcon>
        Filters
      </FilterButton>
      <FilterModal isOpen={isFilterModalOpen} onClose={toggleModalVisibility} />
    </>
  );
};

export default Filters;
