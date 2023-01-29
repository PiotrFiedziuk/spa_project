import styled from "styled-components";
import { SingleListItem } from "../atoms/SingleListItem";

interface ILeftBarListMapper {
  items: any[];
}

export const LeftBarListMapper = ({ items }: ILeftBarListMapper) => {
  return (
    <Wrapper>
      <SingleListItem item="undefined" />
      {items.map((item) => {
        return <SingleListItem key={item} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #6f5f5e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  & :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  & :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
