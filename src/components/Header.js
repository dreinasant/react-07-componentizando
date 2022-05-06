import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import IconPerfil from "../assets/icon-entrar.png";
import IconCoracao from "../assets/icon-coração.png";

const GlobalStyle = createGlobalStyle`
body{
    background: ;
}
`

const Box = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
position: fixed;
z-index: 1;
width: 100%;
height: 13vh;
background: rgb(0,139,139);
`
const Title = styled.h1`
font-size: 1em;
`

const Logo = styled.img`
width: 4%;
border-radius: 50%;
display: flex;
align-items: center;

&:hover{
    cursor:pointer;
    width: 4.1%;
}
`
const ListItem = styled.li`
  padding-right: 3vw;
  color: black;
  font-size: 0.5em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: rgb(115 180 265);
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  list-style: none;
`
const Intro = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const IconEntrar = styled.img`
width: 1.5%;
position: absolute;
left: 143vh;
`

const BoxButton = styled.button`
width: 5vh;
font-size: 0.9em;
color:black;
background: transparent;
font-family:sans-serif;
color: black;
border: white;

&:hover{
cursor: pointer;
color: rgb(115 180 265);
}
`
const BoxDesire = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const ImgHeart = styled.img`
width: 1.5%;
position: absolute;
right: 21vw;

`
const ButtonDesire = styled.button`
width: 5vh;
font-size: 0.9em;
color:black;
background: transparent;
font-family:Verdana, Geneva, Tahoma, sans-serif;
color: black;
border: white;

&:hover{
cursor: pointer;
color: rgb(115 180 265);
}
`
const ImgCart = styled.img`
width: 1.5%;
position: absolute;
right: 9.8vw;

&:hover{
    cursor:pointer;
}
`
const IntroCart = styled.div`
display: flex;
justify-content: center;
align-items: center;

&:hover{
    cursor: pointer;
    color: red;
    }
`
const BoxNumber = styled.div`
background: black;
width: 3.7vh;
height: 3.7vh;
border-radius: 50%;
position: absolute;
right: 8vw;
`
const ParagrafoNumber = styled.p`
color: white;
position: absolute;
right: 8.5vw;
`

function Header() {
  return (
      <Box>
          <GlobalStyle/>
          <Title></Title>
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCHb4ZO9jZa6Ct07m0eSYi2Tq1tgd1jpfSA&usqp=CAU" alt="logo"/>
    <List>
      <ListItem>Inicio</ListItem>
      <ListItem>Sobre</ListItem>
      <ListItem>Galeria</ListItem>
      <ListItem>Contato</ListItem>
    </List>

    <Intro>
          <IconEntrar src={IconPerfil} alt="icon-entar"/>
          <BoxButton>Entrar</BoxButton>
    </Intro>
    <BoxDesire>
        <ImgHeart src={IconCoracao} alt="imagem-coração"/>
        <ButtonDesire>Desejos</ButtonDesire>
    </BoxDesire>
    <IntroCart>
        <ImgCart src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="imagem-carrinho"/>
        <BoxNumber />
        <ParagrafoNumber>0</ParagrafoNumber>
    </IntroCart>
    </Box>
  );
}

export default Header;
