import Graphstatus from "../../Components/Graph/graphstatus";
import Navbar from "../../Components/Navbar/navbar";
import Stations from "../../Components/Stations/stations";

const Crflood = () => {
  return (
    <>
      <div className=" justify-center">
        <Navbar />
        <div className=" ml-[37px] mt-[15px] w-fit h-[23px] text-font">
          <p>ระดับน้ำ : แม่จัน</p>
        </div>
        <Graphstatus />
        <Stations />
      </div>
    </>
  );
};

export default Crflood;
