import {createRoot} from 'react-dom/client'
import Provider from "@app/Provider/index.js";
import {store} from "@app/Store/store.js";
import {routerConfig} from "@app/Router/index.js";
import {RouterProvider} from "react-router";
import MainLayout from "@layouts/MainLayout/index.js";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <MainLayout>
            <RouterProvider router={routerConfig} />
        </MainLayout>
    </Provider>)
