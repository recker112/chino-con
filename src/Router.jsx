/**
 * React
 */
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * Components
 */
import Fallback from "./components/routers/Fallback";
import ErrorFallback from "./components/routers/ErrorFallback";

/**
 * Chino base
 */
const DefaultLayout = lazy(() => import("./components/routers/DefaultLayout"));
const Home = lazy(() => import("./pages/home/Home"));

const router = createBrowserRouter([
  /* Branch Público */
  {
    path: "/",
    errorElement: <ErrorFallback />,
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: (
          <Home />
        ),
      },
      {
        path: "*",
        element: <Fallback text="Página no encontrada" homeButton />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <Suspense
      fallback={
        <Fallback
          text="Estamos preparando todo para ti..."
          loading
        />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}