const Stations = () => {
  return (
    <>
      <div className=" w-[304px] h-[166px] ml-[36px] pt-[16px]">
        <div className="flex flex-row gap-2 font-IBM text-[6px] m-[7px] justify-center">
          <ul className="flex justify-items-center justify-center items-center -mt-1">
            <li className="w-[32px] h-[14px] text-textnav bg-bgnav flex justify-center rounded-[4px]">
              <div className="flex justify-center mt-[2px] size-[6px] ">
                status
              </div>
            </li>
            <li className="w-[32px] h-[14px] text-textnav bg-bgnav flex justify-center rounded-[4px]">
              <div className="flex justify-center mt-[2px] size-[6px] ">
                station
              </div>
            </li>
            <li className="w-[32px] h-[14px] text-textnav bg-bgnav flex justify-center rounded-[4px]">
              <div className="flex justify-center mt-[2px] size-[6px] ">
                Update time
              </div>
            </li>
            <li className="w-[32px] h-[14px] text-textnav bg-bgnav flex justify-center rounded-[4px]">
              <div className="flex justify-center mt-[2px] size-[6px]">
                Water Level
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Stations;
