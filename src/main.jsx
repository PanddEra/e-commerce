import {createRoot} from 'react-dom/client'
import {store} from "@app/Store";
import {routerConfig} from "@app/Router/index.jsx";
import {RouterProvider} from "react-router";
import MainLayout from "@layouts/MainLayout";
import {Provider} from "react-redux";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <MainLayout>
            <RouterProvider router={routerConfig} />
        </MainLayout>
    </Provider>
)
