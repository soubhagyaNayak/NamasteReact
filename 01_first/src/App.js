import React from "react";
import Header from "./components/Header";
import  ReactDOM  from "react-dom/client";
import Body from "./components/Body";

const AppLayout =()=>{
   return(  <div className="app">
          <Header/>
          <Body/>
    </div>
   );
};
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
