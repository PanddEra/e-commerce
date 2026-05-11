import {createRoot} from 'react-dom/client'
import {store} from "@app/Store";
import {routerConfig} from "@app/Router/index.jsx";
import {RouterProvider} from "react-router";
import MainLayout from "@layouts/MainLayout";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import {theme} from "@app/Theme";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MainLayout>
                <RouterProvider router={routerConfig} />
            </MainLayout>
        </ThemeProvider>
    </Provider>
)
