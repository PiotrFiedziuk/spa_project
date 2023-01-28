import { mockProducts } from "./mockData";
import { TProductsListApi } from "../types/fakeApiTypes/productsListApiTypes";

export const fetchFakeProducts = (): Promise<TProductsListApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 300);
  });
};
