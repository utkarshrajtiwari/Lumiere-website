import React from "react";
import Mainroutes from "./routes/Mainroutes";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <div className=" w-full text-[#DDDDDD] bg-[#000000] ">
      <NavBar />
      <Mainroutes />
    </div>
  );
};

export default App;
