import styled from "styled-components";


const Contain = styled.div`
height: 48vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background: rgb(0,139,139);
border-top: 1px solid black;
`

const LogoFooter = styled.img`
width: 9%;
height: 24vh;
border-radius: 50%;
border: solid black;
box-shadow: 0px 6px 7px black;

&:hover{
    cursor:pointer;
    border: solid rgb(28,28,28);
}
`
const ListOne = styled.ul`
position: relative;
bottom: 66px;
font-weight: bolder;
color: black;

`
const LiOne = styled.li`
border-top: 2.4px solid black;
margin: 0 0 15px 0;

&:hover{
    cursor: pointer;
    color: rgb(28,28,28);
    font-weight: bolder;
}
`
const LiTwo = styled.li`
border-top: 2.4px solid black;
width: 15vh;
position: relative;
top: 15px;

&:hover{
    cursor: pointer;
    color: rgb(28,28,28);
    font-weight: bolder;
}
`
const ListTwo =  styled.ul`
font-size: 14px;
border-top: 2px solid black;
width: 22vh;
margin: 0 0 15px 0;
color: black;
padding-top: 6px;
height: 30vh;
`

const ListThree = styled.ul`
font-size: 14px;
border-top: 2px solid black;
width: 19vh;
margin: 0 0 15px 0;
color: black;
padding-top: 6px;
height: 30vh;
`
const ListaOne = styled.li`
width: 21vh;
height: 3.5vh;

&:hover{
    cursor: pointer;
    color: rgb(28,28,28);
    font-weight: bolder;
}
`
const ListFour = styled.ul`
font-size: 14px;
border-top: 2px solid black;
width: 18vh;
margin: 0 0 15px 0;
color: black;
padding-top: 6px;
height: 30vh;
`

function Footer() {
  return (
      <Contain>
          <LogoFooter src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCHb4ZO9jZa6Ct07m0eSYi2Tq1tgd1jpfSA&usqp=CAU" alt="logo"/>
          <ListOne>
          <LiOne>Especial</LiOne>
          <LiTwo>Coleções</LiTwo>
          </ListOne>
          
          <ListTwo>
          <ListaOne>Empreendedorismo</ListaOne>
          <ListaOne>Criatividade</ListaOne>
          <ListaOne>Diversidade</ListaOne>
          <ListaOne>Decoração</ListaOne>
          <ListaOne>Design</ListaOne>
          <ListaOne>Estilo</ListaOne>
          <ListaOne>Arte</ListaOne>
          </ListTwo>
          
          <ListThree>
          <ListaOne>Sustentabilidade</ListaOne>
          <ListaOne>Tecnologia</ListaOne>
          <ListaOne>Fotografia</ListaOne>
          <ListaOne>Inspiração</ListaOne>
          <ListaOne>Inovação</ListaOne>
          <ListaOne>Viagem</ListaOne>
          <ListaOne>Futuro</ListaOne>
          </ListThree>
          
          <ListFour>
          <ListaOne>Envie uma dica</ListaOne>
          <ListaOne>Contato</ListaOne>
          <ListaOne>Anuncie</ListaOne>
          <ListaOne>Sobre</ListaOne>
          <ListaOne>Solicitação de remoção de imagem</ListaOne>
          </ListFour>
      </Contain>
  );
}

export default Footer;