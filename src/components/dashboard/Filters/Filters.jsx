import { useState } from "react";
/* import { useDispatch } from "react-redux"; */
import icons from "../../../shared/images/icons.svg";
import { FilterModal } from "./FilterModal";
import { FilterButton, FilterIcon } from "./Filters.styled";

const Filters = () => {
  /*  const dispatch = useDispatch(); */
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);


/*   const openFilterModal = () => {
     setIsFilterModalOpen(true);
  }
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  }; */

    const toggleModalVisibility = () => {
    setIsFilterModalOpen((prevState) => !prevState);
  };
    return (
      <FilterButton onClick={() => toggleModalVisibility()}>
        <FilterIcon>
          <use href={icons + "#icon-filter"} />
        </FilterIcon>
        Filters
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={toggleModalVisibility}
        />
        
      </FilterButton>
   
    );
  };

export default Filters;
