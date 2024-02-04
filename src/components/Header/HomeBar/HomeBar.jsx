
import { SelectWrapper } from "./HomeBar.styled";

const HomeBar = () => {
  return (
    <>
      <SelectWrapper>
        <p>theme</p>
        <select name="" id="">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="violet">Violet</option>
        </select>
      </SelectWrapper>
    </>
  );
};

export default HomeBar;
