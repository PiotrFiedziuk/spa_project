import { TProduct, TProductType } from "../fakeApiTypes/productsListApiTypes";

export interface IAppStore {
  products: TProduct[];
  selectedLeftBarCategory: TProductType | undefined;
  searchedValue: string;
  isAsc: boolean;

  setProducts: (items: TProduct[]) => void;

  setSelectedLeftBarCategory: (category: TProductType | undefined) => void;

  setSearchedValue: (value: string) => void;
  setIsAsc: (isAsc: boolean) => void;
}
