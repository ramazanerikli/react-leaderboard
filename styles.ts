import { styled } from '@stitches/react';

/* Search */
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
  maxHeight: '174px',
  overflowY: 'scroll',
  borderRadius: '7px',
});

export const AutoCompleteItem = styled("div", {
  padding: '20px',
  cursor: 'pointer',
});

export const AutoCompleteItemButton = styled("div", {
  backgroundColor: 'transparent',
});


/* Table */ 

export const TableContainer = styled('table', {
  width: '100%',
  thead: {
    backgroundColor: '#1c172b',
    height: '55px',
    color: '#6f6e77',
  },
  tr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    height: '55px',
  },
  th: {
    display: 'flex',
    alignItems: 'center'
  },
  
});

export const Grabbable = styled('div', {
  cursor: 'grab',
});

export const PlayerRow = styled('tr', {
  backgroundColor: '#251e40',
  marginTop: '10px',
  height: '50px',
  borderRadius: '5px',
  borderColor: 'rgb(61 45 126)',
  borderStyle: 'solid',
  borderWidth: '1px',  
  cursor: 'pointer',

  "&:hover": {
    backgroundColor: 'rgb(42 31 86)',
  },
});

export const PlayerRowChild = styled('td', {
});



export const TableRow = styled('tr', {

});

export const TableHeaderCell = styled('th', {

});

/* Home */

export const Title = styled('title', {
  display: 'block',
  fontSize: '2rem',
  color: 'white',
  fontWeight: 'bold',
  margin: '0 auto',
  paddingTop: '70px',
  paddingBottom: '70px',
});

export const Content = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  marginTop: '80px',
});

export const ContentOverlay = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-1',
  backgroundColor: '#2c1159',
  height: '330px',
  width: '100%',
  borderRadius: '51% 49% 49% 51% / 0% 0% 100% 100%',
});

export const Effect = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '50vh',
  top: '80px',
  background: 'repeating-linear-gradient(to right, transparent, transparent 20px, black 20px,black 21px)',
});

export const FlexItem = styled("div", {
  backgroundColor: '#251e40',
  borderRadius: '7px',
  borderStyle: 'solid',
  borderColor: 'rgb(61 45 126)',
  borderWidth: '1px',
  height: '50px',
  paddingLeft: '15px',
  paddingRight: '15px',
  variants: {
    cursor: {
      pointer: {
        cursor: 'pointer'
      }
    },
    display: {
      flex: {
        display: 'flex',
      },
    },
    items: {
      center: {
        alignItems: 'center',
      }
    }
  },
});


export const Row = styled("div", {
  display: 'flex',
  alignItems: 'center',
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row'
      },
    },
    gap: {
      sm: {
        gap: '10px'
      }
    }
  },
});