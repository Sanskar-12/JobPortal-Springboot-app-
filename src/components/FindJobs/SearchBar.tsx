import { dropdownData } from "../../Data/JobsData";
import { MultiSelect } from "./MultiSelect";

const SearchBar = () => {
  return (
    <div className="flex">
      {dropdownData.map((data, index) => (
        <div className="w-1/5" key={index}>
          <MultiSelect
            title={data.title}
            Icon={data.icon}
            option={data.options}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
