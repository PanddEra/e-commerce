import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage";
import ProductDetailsPage from "@pages/ProductDetailsPage";
import CategoryPage from "@pages/CategoryPage/index.js";
import LoginPage from "@pages/LoginPage/index.js";
import CartPage from "@pages/CartPage/index.js";

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
    }, {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
]);
