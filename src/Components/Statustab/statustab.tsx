import ObjectTab from "../objectTab/objecttab";

const Statustab = () => {
  return (
    <>
      <div className="w-[304px] h-[166px]  pt-[16px]">
        <div className="flex flex-row  justify-center w-full border-b border-gray-200 justify-items-center m-auto">
          <ul className="flex justify-items-center justify-center items-center w-full font-IBM">
            <li className="flex-1 ml-2 -mb-1 h-[14px] text-font  justify-start justify-items-start text-[6px]">
              <span>Status</span>
            </li>
            <li className="flex-1  ml-6 h-[14px] -mb-1 pr-[90px] text-font text-[6px]">
              <span>Station</span>
            </li>
            <li className="flex-1 ml-1 -mb-1 h-[14px] text-font text-[6px]">
              <span>Update time</span>
            </li>
            <li className="flex-1 ml-1 -mb-1 h-[14px] text-font  justify-end justify-items-end text-[6px]">
              <span>Water Level</span>
            </li>
          </ul>
        </div>
        <div className=" mt-4">
          <ObjectTab
            StatusProps={[
              {
                status: {
                  src: "alart.png",
                  alt: "alert",
                },
                station: "Chiang Mai",
                Date: "2021-09-29 14:00",
                waterLevel: "1.00",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Statustab;
