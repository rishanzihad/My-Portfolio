import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";




const MainLayOut = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;