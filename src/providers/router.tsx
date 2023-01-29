import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../pages/AppLayout";
import { ProductList } from "../components/organisms/ProductList";
import { getProductsList } from "../api/getProductsList";
import { ProductPage } from "../components/organisms/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      await getProductsList();
      return true;
    },

    element: <AppLayout />,
    children: [
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "product/:productSlug",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="products" />,
  },
  {
    element: <Navigate to="products" />,
    index: true,
  },
]);
