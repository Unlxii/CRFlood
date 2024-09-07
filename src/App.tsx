import "./App.css";
import Crflood from "./pages/crflood";

// ขนาด 720px ขึ้นไปจะแสดงเป็น Desktop และ 720px ลงมาจะแสดงเป็น Mobile
// import { useState, useEffect } from "react";

function App() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth > 720);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <>
      <div className=" justify-center justify-items-center bg-main w-screen h-screen">
        <Crflood />
      </div>
    </>
  );
}

export default App;
