import { GoSearch } from "react-icons/go";
import { IconWrapper, Input, InputContainer } from "./FormSection.module";
import { useState } from "react";

export default function FormSection({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <InputContainer>
      <IconWrapper>
        <GoSearch size="24px" color="#7E7E7E" />
      </IconWrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
    </InputContainer>
  );
}
