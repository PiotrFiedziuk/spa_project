import styled from "styled-components";
import { Input } from "../atoms/Input";
import { useAppStore } from "../../store/productsStore";
import { SortIcon } from "../atoms/SortIcon";

export const FilteringTab = () => {
  const searchedValue = useAppStore((state) => state.searchedValue);

  return (
    <Wrapper>
      <SortIcon />
      <Input
        value={searchedValue}
        setValue={(value) => useAppStore.getState().setSearchedValue(value)}
        placeholder="Wyszukaj..."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 0 24px;
  gap: 10px;
  align-items: center;
`;
