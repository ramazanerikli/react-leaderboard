import { styled } from '@stitches/react';


export const Container = styled("div", {
  margin: "auto",
  width: '100%',
  maxWidth: "72rem",
  paddingLeft: "1.75rem",
  paddingRight: "1.75rem",
  position: "relative",

  "@sm": { paddingLeft: "1rem", paddingRight: "1rem" },

  variants: {
    layout: {
      flex: {
        display: 'flex'
      }
    },
    flex: {
      col: {
        flexDirection: 'column'
      }
    }
  },
})