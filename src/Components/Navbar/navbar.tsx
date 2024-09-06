import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      {
        <nav className="bg-Navcolor w-screen h-[48px] flex-auto mb-0">
          <div className="pt-[10px] pl-[17px] text-white h-[28px] w-screen font-Head pb-0">
            CRFflood
          </div>
          <div className="pl-[333px] -mt-4">
            <IoReorderThree size={22} color="#ffffff" />
          </div>
        </nav>
      }
    </>
  );
};

export default Navbar;
