import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

import { Toaster } from "react-hot-toast";




const MainLayOut = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Toaster/>
        </div>
    );
};

export default MainLayOut;