import { useState, useEffect, useRef, FC } from "react";
import { styled } from '@stitches/react';
import Icon from "./Icon";
import players from "../players";
import { Player } from "../types/Player";

import { SearchBar, Input, InputIcon } from "@/styles";

export const AutoCompleteContainer = styled("div", {
  backgroundColor: 'rgb(37, 30, 64)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgb(61, 45, 126)',
  position: 'absolute',
  minHeight: '60px',
  width: '100%',
  top: '60px',
  height: 'auto',
  maxHeight: '150px',
  overflowY: 'scroll',

  "&::-webkit-scrollbar": {
    width: '1em',
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3);',
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: 'darkgrey',
    outline: '1px solid slategrey'
  },
});

export const AutoCompleteItem = styled("div", {
  padding: '20px',
  cursor: 'pointer',
});

export const AutoCompleteItemButton = styled("div", {
  backgroundColor: 'transparent',
});



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
