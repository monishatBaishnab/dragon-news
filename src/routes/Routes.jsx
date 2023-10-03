import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Login from "../pages/Login/Login";
import Regester from "../pages/Regester/Regester";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/newsDetails/:newsId',
                element: <NewsDetails />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/regester',
                element: <Regester />
            }
        ]
    }
]);

export default Routes;