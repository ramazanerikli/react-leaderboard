import { useState, useEffect, useRef, FC } from "react";
import { styled } from '@stitches/react';
import Icon from "./Icon";
import players from "../players";


import { SearchBar, Input, InputIcon } from "@/styles";



const Search: FC<{
  data: any
}> = ({data}) => {


  const [searchedValue, setSearchedValue] = useState('');
  const inputSearchRef = useRef<HTMLInputElement>;

  const handleChange = (e: any) => {
    setSearchedValue(e.target.value)
  }




  return (
    <SearchBar>
    <InputIcon><Icon name="search" /></InputIcon>
    <Input 
      type="text" 
      placeholder='Search' 
      size="lg"
      value={searchedValue}
      onChange={handleChange}
    >
    </Input>
  </SearchBar>
  );
};

export default Search;
