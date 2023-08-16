import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import App from "../App";

const router =createBrowserRouter ( [
    {
        path:'/',
        element:<App/>
    }
]);

export default router;