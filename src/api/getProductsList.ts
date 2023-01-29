import { fetchFakeProducts } from "./fakeProductsListApi";
import { useAppStore } from "../store/productsStore";

export const getProductsList = () => {
  return fetchFakeProducts().then((response) => {
    useAppStore.getState().setProducts(response.products);
  });
};
