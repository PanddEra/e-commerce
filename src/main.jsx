import {createRoot} from 'react-dom/client'
import {store} from "@app/Store/store.js";
import {routerConfig} from "@app/Router/index.js";
import {RouterProvider} from "react-router";
import MainLayout from "@layouts/MainLayout/index.js";
import {Provider} from "react-redux";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <MainLayout>
            <RouterProvider router={routerConfig} />
        </MainLayout>
    </Provider>
)
