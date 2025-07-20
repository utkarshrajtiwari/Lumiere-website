import React from "react";
import Mainroutes from "./routes/Mainroutes";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-900">
      <NavBar />
      <Mainroutes />
    </div>
  );
};

export default App;
