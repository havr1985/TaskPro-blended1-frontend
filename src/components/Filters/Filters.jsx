import icons from "../../shared/images/icons.svg";
import { FilterButton, FilterIcon } from "./Filters.styled";

const Filters = () => {
  return (
    <FilterButton>
      <FilterIcon>
        <use href={icons + "#icon-filter"} />
      </FilterIcon>
      Filters
    </FilterButton>
  );
};

export default Filters;
