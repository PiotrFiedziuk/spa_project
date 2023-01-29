import Select from "react-select";
import { useAppStore } from "../../store/productsStore";
import { TGenders } from "../../types/fakeApiTypes/productsListApiTypes";

const genderFilterOptions = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
  { value: "U", label: "Unisex" },
] as { value: TGenders; label: string }[];

export const GenderFilter = () => {
  const selectedGenderFilter = useAppStore(
    (state) => state.selectedGenderFilter
  );
  const preparedValue = genderFilterOptions.find(
    (item) => item.value === selectedGenderFilter
  );
  return (
    <Select
      isMulti={false}
      value={preparedValue}
      isClearable={true}
      placeholder={"Wybierz płeć"}
      onChange={(item) => {
        useAppStore.getState().setSelectedGenderFilter(item?.value);
      }}
      options={genderFilterOptions}
    />
  );
};
