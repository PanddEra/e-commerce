import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage";
import ProductDetailsPage from "@pages/ProductDetailsPage";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:id",
        element: <ProductDetailsPage />,
    }
]);
