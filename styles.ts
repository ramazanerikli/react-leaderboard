import { styled } from '@stitches/react';

export const SearchBar = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',
  marginTop: '10px'
});

export const Input = styled("input", {
  display: "block",
  marginBottom: "10px",
  width: '100%',
  height: '40px',
  backgroundColor: '#251e40',
  borderRadius: '7px',
  color: 'white',
  borderStyle: 'solid',
  borderColor: 'rgb(61 45 126)',
  borderWidth: '1px',
  outline: 0,

  "&::placeholder": {
    color: 'white',
  },

  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "16px",
        height: "50px",
        paddingLeft: "45px",
        paddingRight: "15px",
      },
    },
  },
});

export const InputIcon = styled("div", {
  position: 'absolute',
  left: '20px',
  top: '16px',
  variants: {
    color: {
      white: {
        color: '#fff',
      },
    },
  },
});
