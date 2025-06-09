/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import { MultiSelect } from "./MultiSelect";
import { useState } from "react";
import { updateFilter } from "../../redux/Slice/filterSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<[number, number]>([1, 100]);

  const handleChange = (name: string, e: any) => {
    dispatch(
      updateFilter({
        [name]: e,
      })
    );
  };

  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
      {dropdownData.map((data, index) => (
        <>
          <div className="w-1/5" key={index}>
            <MultiSelect
              title={data.title}
              Icon={data.icon}
              option={data.options}
            />
          </div>
          <Divider mr={"xs"} size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between text-sm">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          color="bright-sun.4"
          size={"xs"}
          max={100}
          min={1}
          minRange={1}
          value={value}
          onChange={setValue}
          onChangeEnd={(e) => handleChange("Package", e)}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
