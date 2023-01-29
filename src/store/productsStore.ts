import { create } from "zustand";
import { IAppStore } from "../types/storeTypes/appStoreTypes";

export const useAppStore = create<IAppStore>()((set) => ({
  products: [],
  selectedLeftBarCategory: undefined,
  searchedValue: "",
  selectedSizeFilters: ["S", "M", "L"],
  selectedGenderFilter: undefined,
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
  switchAsc: () => {
    set((state) => ({ isAsc: !state.isAsc }));
  },
  setSelectedSizeFilters: (value) => {
    set({ selectedSizeFilters: value });
  },
  setSelectedGenderFilter: (value) => {
    set({ selectedGenderFilter: value });
  },
}));
