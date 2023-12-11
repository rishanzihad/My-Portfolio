;
import MainLayOut from '../MainLayout/MainLAyOut';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Contact from '../Page/Contact/Contact';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      }
    ]
    },
  ]);

export default router;