import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="bg-Navcolor w-full h-[48px] flex items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="text-white font-Head text-xl">CRFflood</div>
        <div className="flex items-center" onClick={() => {}}>
          <IoReorderThree className="block " size={22} color="#ffffff" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
