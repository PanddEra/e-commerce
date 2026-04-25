import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage/index.js";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    }
]);
