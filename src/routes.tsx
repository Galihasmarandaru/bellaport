import { createBrowserRouter, useRoutes, type RouteObject } from "react-router";
import AppLayout from "./context/layouts/app-layout";
import DashboardPage from "@/pages/dashboard/page"
import RecommendationPage from "@/pages/recommendation/page"
import { RecommendationProvider } from "./components/context/recommendation-provider";

const route = (path: string, { ...props }: RouteObject) => ({ path, ...props })

const routes: RouteObject[] = [
    route('/', {
        element:
            <RecommendationProvider>
                <AppLayout />
            </RecommendationProvider>,
        children: [
            {
                index: true,
                path: '/',
                element: <DashboardPage />,
            },
            {
                path: '/recommendation',
                element: <RecommendationPage />,
            },
        ]
    }),
]

const browserRoutes = createBrowserRouter(routes)

const AppRoutes = (): React.ReactElement | null => useRoutes(routes)

export { routes, browserRoutes }

export default AppRoutes