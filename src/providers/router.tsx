import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../pages/AppLayout";
import { ProductList } from "../components/organisms/ProductList";
import { getProductsList } from "../api/getProductsList";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      getProductsList();
      return true;
      //This should use rect router useLoaderData, but I'm using 'zustand' to manage store.
    },
    element: <AppLayout />,
    children: [
      {
        path: "products",
        element: <ProductList />,
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
