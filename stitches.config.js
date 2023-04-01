import { createStitches } from "@stitches/react";

export const { 
  styled, 
  getCssText, 
  createTheme, 
  globalCss 
} = createStitches({ 
  theme: {
    /* ... other tokens */
    colors: {
      text: "white",
      background: "#18151f",
    }
  }
 });

// define the dark theme using the de-constructed function
export const lightTheme = createTheme({ 
  colors: { 
    text: "black",
    background: "white",
  } 
});

const GlobalStyles = globalCss({
  body: {
    //we can call the color token values with the
    //$ prefix in a string
    background: "$background",
    color: "$text"
  },
})

GlobalStyles();