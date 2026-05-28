import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage";
import ProductDetailsPage from "@pages/ProductDetailsPage";
import CategoryPage from "@pages/CategoryPage/index.js";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:id",
        element: <ProductDetailsPage />,
    },
    {
        path: "/category",
        element: <CategoryPage />,
    }
]);
