;
import MainLayOut from '../MainLayout/MainLAyOut';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
    },
  ]);

export default router;