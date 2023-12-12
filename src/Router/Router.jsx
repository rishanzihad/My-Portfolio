;
import MainLayOut from '../MainLayout/MainLAyOut';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Contact from '../Page/Contact/Contact';
import Project from '../Page/Project/Project';


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
      },
      {
        path:'/project',
        element:<Project></Project>
      }
    ]
    },
  ]);

export default router;