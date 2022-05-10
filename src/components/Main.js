import styled from "styled-components";
import Van from "../assets/vincent.jpg";
import CampoCorvos from "../assets/campo-com-corvos.jpg";
import NoiteRodano from "../assets/noite-estrelada-rodano.jpg";
import Oquarto from "../assets/o-quarto.jpg";
import TerraçoDoCafe from "../assets/terraço-do-cafe.jpg";
import OsGirassois from "../assets/os-girassois.jpg";
import AgostinaSegatori from "../assets/agostina-segatori.jpg"

const Title = styled.h1`
display: flex;
justify-content: center;
font-family: 'Dancing Script', cursive;
border-bottom: 1px solid black;
margin: auto;
width: 45%;
`

const ImageVan = styled.img`
width: 100%;
height: 100vh;
margin-top: 12vh;
`
const ContainQuadros = styled.div`
margin-top: 5vw;
display: flex;
align-items: center;

`

const ImgCampo = styled.img`
width: 75%;
padding: 1vh;
margin: 10px;
`
const ImgRodano = styled.img`
width: 65%;
margin: 10px;
`
const ImgQuarto = styled.img`
width: 77%;
margin: 10px;
`
const BoxchildrenAgostina = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const ImgAgostina = styled.img`
width: 19vw;
margin: 10px;
`
const ParagrafoAgostina = styled.p`
width: 60%;
text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;
margin-bottom: 5vw;
`
const BoxchildrenTerraco = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const ImgTerraco = styled.img`
width: 16vw;
margin: 10px;
`
const ParagrafoTerraco = styled.p`
width: 55%;
text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;
margin-bottom: 5vw;
`
const BoxchildrenGirassois = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const ImgGirassois = styled.img`
width: 18vw;
margin: 10px;
`
const ParagrafoGirassois = styled.p`
width: 60%;
text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;
margin-bottom: 5vw;
`
const BoxQuadrosTwo = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vw;


`
const BoxPOne = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: ;

margin-left: 30px;
border-radius: 5%;
`
const ParagrafoOne = styled.p`
width:57%;
height: 20vh;
display: flex;
justify-content: center;

text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;

`
const BoxPTwo = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const ParagrafoTwo = styled.p`
width: 65%;

display: flex;
justify-content: center;
text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;
`
const BoxPTheree = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ParagrafoTheree = styled.p`
width: 67%;
display: flex;
justify-content: center;
text-shadow: 0px 0px 0.6px black;
font-family: 'Dancing Script', cursive;
font-size 0.9em;
`


function Main() {
  return (
      <div>
          <ImageVan src={Van} alt="van-gogh"/>
          <Title>Algumas pinturas de Vincent Van Gogh</Title>
          <ContainQuadros>
          <BoxPOne>
            <ImgRodano src={NoiteRodano} alt="Noite-estrelada-ródano"/>
            <ParagrafoOne> 'Noite Estrelada Sobre o Ródano (1888)'. Uma pintura do pintor holandês Vincent van Gogh. O quadro foi pintado após a sua mudança para Arles, no sul da França, nove meses antes de ser hospitalizado e dois anos antes de cometer suicídio.</ParagrafoOne>
            </BoxPOne>
            
            <BoxPTwo>
            <ImgCampo src={CampoCorvos} alt="Campo-com-corvos"/>
            <ParagrafoTwo>Este foi o último quadro pintado por Van Gogh: 'Campo de Trigo com Corvos'. Pintado pouco antes de Van Gogh falecer (no dia 29 de julho de 1890), esta tela foi criada no dia 10 de julho de 1890.</ParagrafoTwo>
            </BoxPTwo>
            
            <BoxPTheree>
            <ImgQuarto src={Oquarto} alt="O-quarto-van-gogh"/>
            <ParagrafoTheree> 'O quarto (1888)'. A pintura acima faz um registro do quarto que Van Gogh alugou em Arles. Na imagem vemos detalhes da vida do pintor como os móveis de madeira e as telas penduradas nas paredes.</ParagrafoTheree>
            </BoxPTheree>
            </ContainQuadros>
            
            <BoxQuadrosTwo>
              <BoxchildrenAgostina>
            <ImgAgostina src={AgostinaSegatori} alt="Agostina-segatori"/>
            <ParagrafoAgostina>No Café: Agostina Segatori em Le Tambourin é uma pintura de 1887 de Vincent van Gogh. A obra representou um marco no desenvolvimento do estilo característico do pós-impressionista. Agostina Segatori era proprietária do Le Tambourin, um café de Paris que o pintor costumava frequentar e que servia de ponto de encontro e de exibição para artistas locais.</ParagrafoAgostina>
            </BoxchildrenAgostina>
            <BoxchildrenTerraco>
            <ImgTerraco src={TerraçoDoCafe} alt="Terraço-do-café"/>
            <ParagrafoTerraco>'Terraço do café à noite (1888)'. O terraço a que a tela se refere encontrava-se na Place du Fórum, em Arles, cidade para onde Van Gogh se mudou a fim de se dedicar à pintura. Segundo registros, o pintor resolveu criar a paisagem do café após acabar de ler um romance de Guy Maupassant.</ParagrafoTerraco>
            </BoxchildrenTerraco>
            <BoxchildrenGirassois>
            <ImgGirassois src={OsGirassois} alt="Os-girassois"/>
            <ParagrafoGirassois>'Os girassóis (1889)' Os Doze girassóis numa jarra é uma pintura do pintor holandês Vincent van Gogh. Após a chegada do pintor ao sul da França, estabelecendo-se em Arles, Van Gogh passou a utilizar efeitos de cores e de luz com mais intensidade.</ParagrafoGirassois>
            </BoxchildrenGirassois>
            </BoxQuadrosTwo>
      </div>
  );
}

export default Main;