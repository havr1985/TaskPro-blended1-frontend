import { useState } from "react";
/* import { useDispatch } from "react-redux"; */
import icons from "../../../shared/images/icons.svg";
import { FilterModal } from "./FilterModal";
import { FilterButton, FilterIcon } from "./Filters.styled";

const Filters = () => {
   /*  const dispatch = useDispatch(); */
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    /* const [selectedFilter, setSelectedFilter] = useState(''); */

 /*  const handleFilterSelect = () => {
    onSelectFilter(selectedFilter);
    onClose();
  }; */

  const toggleFilterNodalVissbility = () => {
    setIsFilterModalOpen((prev) => !prev);
  };
  return (
     <FilterButton onClick={() => toggleFilterNodalVissbility()}>
      <FilterIcon>
        <use href={icons + "#icon-filter"} />
      </FilterIcon>
      Filters
        <FilterModal
          modalIsOpen={isFilterModalOpen}
          closeModal={toggleFilterNodalVissbility}
          title={"Filters"}
          maxWidth={"300px"}
      > 
        
    </FilterModal>
    </FilterButton>
   
  );
};

export default Filters;
