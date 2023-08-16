import { createBrowserRouter } from "react-router-dom";
// import Home from "../page/home";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const router =createBrowserRouter ( [
    {
        path:'/',
        element:<App/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
      path:'*',
      element:<NotFound/>   
    }
]);

export default router;