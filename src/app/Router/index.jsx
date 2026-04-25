import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    }
]);
