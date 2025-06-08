/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import { MultiSelect } from "../FindJobs/MultiSelect";
import { searchFields } from "../../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/Slice/filterSlice";

const FindTalentSearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 50]);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (name: string, e: any) => {
    if (name === "exp") {
      dispatch(
        updateFilter({
          [name]: e,
        })
      );
    } else {
      setName(e.target.value);
      dispatch(
        updateFilter({
          [name]: e.target.value,
        })
      );
    }
  };

  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
      <div className="flex items-center">
        <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
          <IconUserCircle />
        </div>
        <Input
          className="[&_input]:!placeholder-mine-shaft-300"
          variant="unstyled"
          placeholder="Talent Name"
          defaultValue={name}
          onChange={(e) => handleChange("name", e)}
        />
      </div>
      {searchFields.map((data, index) => (
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
          <div>Experience (Years)</div>
          <div>
            {value[0]} - {value[1]}
          </div>
        </div>
        <RangeSlider
          color="bright-sun.4"
          size={"xs"}
          max={50}
          min={1}
          minRange={1}
          value={value}
          onChange={setValue}
          onChangeEnd={(e) => handleChange("exp", e)}
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

export default FindTalentSearchBar;
