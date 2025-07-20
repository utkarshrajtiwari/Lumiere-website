import React from "react";
import Mainroutes from "./routes/Mainroutes";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <div className=" w-full text-[#DDDDDD]">
      <NavBar />
      <Mainroutes />
    </div>
  );
};

export default App;
