import { useState, useEffect, useRef, FC } from "react";
import { styled } from '@stitches/react';
import Icon from "./Icon";
import players from "../players";
import { Player } from "../types/Player";

import { SearchBar, Input, InputIcon, AutoCompleteContainer, AutoCompleteItem, AutoCompleteItemButton } from "@/styles";


const Search: FC<{
  data: any
}> = ({data}) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const [search, setSearch] = useState({
    text: "",
    suggestions: []
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((v: Player) => regex.test(v.playerName));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: Player) => {
    setIsComponentVisible(false);

    setSearch({
      text: value.playerName,
      suggestions: []
    });
  };

  const { suggestions } = search;


  return (
    <SearchBar>
      <InputIcon><Icon name="search" /></InputIcon>
      <Input 
          type="text" 
          placeholder='Search' 
          autoComplete="off"
          size="lg"
          value={search.text}
          onChange={handleChange}
        >
      </Input>

      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer>
          {suggestions.map((item: Player) => (
            <AutoCompleteItem key={item.playerName}>
              <AutoCompleteItemButton
                key={item.playerName}
                onClick={() => suggestionSelected(item)}
              >
                {item.playerName}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}

  </SearchBar>
  );
};

export default Search;
