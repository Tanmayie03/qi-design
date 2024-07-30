// import { useState } from 'react'
import "./App.css";
import Border1 from "./pages/Border1";
import Border2 from "./pages/Border2";
import { Eightpg } from "./pages/Eightpg";

import Firstpg from "./pages/Firstpg";
import Fourthpg from "./pages/Fourthpg";
import Secondpg from "./pages/Secondpg";
import Seventhpg from "./pages/Seventhpg";
import Sixth from "./pages/Sixth";
import Thirdpg from "./pages/Thirdpg";
import { Fifthpg } from "./pages/Fifthpg";

function App() {
  return (
    <div
      className="bg-[#FEFFED] h-screen w-screen no-scrollbar  scrollbar-hide overflow-y-scroll
      flex justify-between items-center"
      id="scrollContainer">
      <Border1 />
      <div
        className="flex flex-col gap-12  h-[545px] justify-between no-scrollbar scrollbar-hide overflow-y-scroll w-full
        scroll-smooth border border-[#05668D]  font-montserrat">
        <div className="w-full">
          <Firstpg />
        </div>
        <div className="w-full">
          <Secondpg />
        </div>
        <div className="w-full">
          <Thirdpg />
        </div>
        <div className="w-full">
          <Fourthpg />
        </div>
        <div className="w-full">
          <Fifthpg />
        </div>
        <div className="w-full">
          <Sixth />
        </div>
        <div className="w-full">
          <Seventhpg />
        </div>
        <div className="w-full">
          <Eightpg />
        </div>
      </div>
      <Border2 />
    </div>
  );
}

export default App;
