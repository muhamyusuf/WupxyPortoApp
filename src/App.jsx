import React from "react";
import { About, Navbar,Intro, Skill, Project, Footer } from "./components/export_component";

const App = () => {
  return(
  <div className="w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center gap-1">
    <Navbar className="fixed"/>
    <div className="flex w-full justify-center items-center gap-2" id="container1">
      <Intro/>
      <About/>
    </div>
    
    <div className="flex w-full justify-center items-center gap-2" id="container2">
      <Skill/>
      <Project/>
    </div>

    <Footer className="fixed"/>
  </div>
  )
};

export default App;
