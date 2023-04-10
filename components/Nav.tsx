import { FC } from "react";
import Image from 'next/image'
import { styled } from '@stitches/react';
import Logo from "../public/Logo.png";


import { useTheme } from "next-themes";


import { Container } from "../components/Container";
import Icon from "../components/Icon";


const NavBar = styled('nav', {
  position: 'fixed',
  top: '0',
  zIndex: '10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '80px',
  backgroundColor: '#18151f',
  padding: '10px 15px',
});

const Button = styled("button", {
  cursor: 'pointer',
  backgroundColor: '#1c1c1f',
  color: '#5a595f',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#5a595f',
  borderRadius: '5px',
  paddingTop: '7px',
  paddingBottom: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      sm: {
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '1rem'
      },
      lg: {
        paddingLeft: '30px',
        paddingRight: '30px',
        fontSize: '1.6rem'
      }
    }
  },
});

const Block = styled("div", {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const Nav: FC<{}> = ({}) => {

  const { theme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <NavBar>
      <Container layout="flex">
        <Block>
          <Image src={Logo} width={180} height={30} alt="Panteon Games" />
        </Block>
        <Button onClick={toggleTheme} size={"sm"}>
          {theme === "dark" ? (
              <Icon name="sun" />
          ) : 
          (
              <Icon name="moon" />
          ) }
        </Button>
      </Container>
  </NavBar>
  );
};

export default Nav;
