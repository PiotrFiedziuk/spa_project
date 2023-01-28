import styled from "styled-components";

interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export const Input = ({ value, setValue, placeholder }: IInput) => {
  return (
    <StyledInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 30px;
  width: 250px;
  transition: ease-in border-color 200ms;

  :hover,
  :focus {
    border-color: black;
  }
`;
