import {
  TGenders,
  TProduct,
  TProductSizes,
  TProductType,
} from "../fakeApiTypes/productsListApiTypes";

export interface IAppStore {
  products: TProduct[];
  selectedLeftBarCategory: TProductType | undefined;
  selectedSizeFilters: TProductSizes[];
  selectedGenderFilter: TGenders | undefined;
  searchedValue: string;
  isAsc: boolean;

  setProducts: (items: TProduct[]) => void;

  setSelectedLeftBarCategory: (category: TProductType | undefined) => void;

  setSearchedValue: (value: string) => void;
  switchAsc: () => void;
  setSelectedSizeFilters: (sizeFilters: TProductSizes[]) => void;
  setSelectedGenderFilter: (genderFilter?: TGenders) => void;
}
