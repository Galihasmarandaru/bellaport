import { createBrowserRouter, useRoutes, type RouteObject } from "react-router";
import AppLayout from "./context/layouts/app-layout";
import DashboardPage from "@/pages/dashboard/page"

const route = (path: string, { ...props }: RouteObject) => ({ path, ...props })

const routes: RouteObject[] = [
    route('/', {
        element: <AppLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <DashboardPage />,
            },
        ]
    }),
]

const browserRoutes = createBrowserRouter(routes)

const AppRoutes = (): React.ReactElement | null => useRoutes(routes)

export { routes, browserRoutes }

export default AppRoutes