import Graphstatus from "../../Components/Graph/graphstatus";
import Navbar from "../../Components/Navbar/navbar";
import Statustab from "../../Components/Statustab/statustab";

const Crflood = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Navbar />
        <div className="w-fit  mt-[15px] h-[23px] text-font mr-[202px]">
          <p>ระดับน้ำ : แม่จัน</p>
        </div>
        <Graphstatus />
        <Statustab />
      </div>
    </>
  );
};

export default Crflood;
