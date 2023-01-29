import styled from "styled-components";
import { Input } from "../atoms/Input";
import { useAppStore } from "../../store/productsStore";
import { SortIcon } from "../atoms/SortIcon";
import { SizeFilter } from "../atoms/SizeFilter";
import { GenderFilter } from "../atoms/GenderFilter";

export const FilteringTab = () => {
  const searchedValue = useAppStore((state) => state.searchedValue);

  return (
    <Wrapper>
      <Input
        value={searchedValue}
        setValue={(value) => useAppStore.getState().setSearchedValue(value)}
        placeholder="Wyszukaj..."
      />
      <SizeFilter />
      <IconWithGenderFilterWrapper>
        <SortIcon />
        <GenderFilter />
      </IconWithGenderFilterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 24px 0 24px;
  gap: 10px;
  align-items: center;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

const IconWithGenderFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
