import { create } from "zustand";
import { IAppStore } from "../types/storeTypes/appStoreTypes";

export const useAppStore = create<IAppStore>()((set) => ({
  products: [],
  selectedLeftBarCategory: undefined,
  searchedValue: "",
  isAsc: false,

  setProducts: (items) => {
    set({ products: items });
  },
  setSelectedLeftBarCategory: (category) => {
    set({ selectedLeftBarCategory: category });
  },
  setSearchedValue: (value) => {
    set({ searchedValue: value });
  },
  setIsAsc: (value) => {
    set({ isAsc: value });
  },
}));
