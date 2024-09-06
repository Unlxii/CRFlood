import { useState } from "react";

const Navstatus = () => {
  const [selected, setSelected] = useState("");

  const handleItemClick = (item: string) => {
    setSelected(item);
  };

  return (
    <div className="w-[118px] h-[21px] border-white rounded-[8px] shadow-Navstatus">
      <div className="flex flex-row gap-1 font-IBM text-[6px] m-[7px] justify-center">
        <ul className="flex justify-items-center justify-center items-center -mt-1">
          <li
            className={`w-[32px] h-[14px] ${
              selected === "DAY"
                ? "text-textnav bg-bgnav flex justify-center rounded-[4px]"
                : ""
            }`}
            onClick={() => handleItemClick("DAY")}
          >
            <div className="flex justify-center mt-[2px]">DAY</div>
          </li>
          <li
            className={`w-[36px] h-[14px] ${
              selected === "MONTH"
                ? "text-textnav bg-bgnav flex justify-center rounded-[4px]"
                : ""
            }`}
            onClick={() => handleItemClick("MONTH")}
          >
            <div className="flex justify-center mt-[2px]">MONTH</div>
          </li>
          <li
            className={`w-[32px] h-[14px] ${
              selected === "YEAR"
                ? "text-textnav bg-bgnav flex justify-center rounded-[4px]"
                : ""
            }`}
            onClick={() => handleItemClick("YEAR")}
          >
            <div className="flex justify-center mt-[2px]">YEAR</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navstatus;
