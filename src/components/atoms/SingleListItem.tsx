import styled from "styled-components";
import { useAppStore } from "../../store/productsStore";
import { TProductType } from "../../types/fakeApiTypes/productsListApiTypes";

type TCustomProductType = TProductType | "undefined";

interface ISingleListItem {
  item: TCustomProductType;
}

const ID_TO_TEXT = {
  BLOUSE: "Bluzy",
  PANTS: "Spodnie",
  undefined: "Wszystko",
} as Record<TCustomProductType, string>;

export const SingleListItem = ({ item }: ISingleListItem) => {
  const selectedItem = useAppStore((state) => state.selectedLeftBarCategory);

  const handleClick = (item: TCustomProductType) => {
    const setter = useAppStore.getState().setSelectedLeftBarCategory;
    if (item === "undefined") setter(undefined);
    else setter(item);
  };

  return (
    <Wrapper
      selected={(selectedItem ?? "undefined") === item}
      onClick={() => handleClick(item)}
    >
      {ID_TO_TEXT[item]}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  padding: 12px;
  user-select: none;
  background-color: ${({ selected }) => selected && "#cfe1fc"};
  cursor: pointer;

  :hover {
    background-color: #cfe1fc;
  }
`;
