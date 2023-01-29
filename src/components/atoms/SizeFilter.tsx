import Select from "react-select";
import { useAppStore } from "../../store/productsStore";
import { TProductSizes } from "../../types/fakeApiTypes/productsListApiTypes";

const sizeFilterOptions = [
  { value: "M", label: "M" },
  { value: "S", label: "S" },
  { value: "L", label: "L" },
] as { value: TProductSizes; label: string }[];

export const SizeFilter = () => {
  const selectedSizeFilters = useAppStore((state) => state.selectedSizeFilters);
  const preparedValues = sizeFilterOptions.filter((item) =>
    selectedSizeFilters.includes(item.value)
  );
  return (
    <Select
      isMulti={true}
      value={preparedValues}
      isClearable={false}
      placeholder={"Wybierz rozmiary"}
      onChange={(items) => {
        useAppStore
          .getState()
          .setSelectedSizeFilters(items.map((item) => item.value));
      }}
      options={sizeFilterOptions}
    />
  );
};
