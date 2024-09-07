import React from "react";

interface StatusBarProps {
  status: { src: string; alt: string };
  station: string;
  Date: string;
  waterLevel: string;
}

interface StatusProps {
  StatusProps: StatusBarProps[];
}

const ObjectTab: React.FC<StatusProps> = ({ StatusProps }) => {
  return (
    <>
      <div className=" w-[303px] h-[32px] shadow-obj rounded">
        {StatusProps.map((statusProp, index) => (
          <div
            key={index}
            className="flex-1  text-font  justify-start justify-items-start text-[6px]"
          >
            {Array.isArray(statusProp.status) &&
              statusProp.status.map((status: string, index: number) => (
                <div key={index}>
                  <img src={status} alt={status} />
                </div>
              ))}
            {statusProp.station}
            {statusProp.Date}
            {statusProp.waterLevel}
          </div>
        ))}
      </div>
    </>
  );
};
export default ObjectTab;
