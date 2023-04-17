import { CloudSun } from "phosphor-react";
import { ButtonBase } from "../CardLocator/styles";
import { TextContainer } from "./styles";
import { Link } from "react-router-dom";


const curiosities = [
  "O clima da Terra já foi muito diferente no passado. Por exemplo, há cerca de 55 milhões de anos, durante o Eoceno, o Ártico era quente o suficiente para abrigar crocodilos e palmeiras.",
  "O fenômeno conhecido como 'El Niño' ocorre a cada poucos anos e pode afetar o clima em todo o mundo. Durante um El Niño, as águas do Pacífico tropical aquecem e podem causar chuvas intensas em algumas regiões e secas em outras.",
  "A camada de ozônio é uma camada protetora de gás na atmosfera que ajuda a proteger a Terra dos raios UV prejudiciais. Danos à camada de ozônio foram causados por produtos químicos como clorofluorocarbonetos (CFCs), mas desde que os CFCs foram proibidos, a camada de ozônio começou a se recuperar.",
  "O clima pode afetar a floração de plantas e árvores. Algumas plantas florescem mais cedo ou mais tarde do que o normal, dependendo das condições climáticas.",
  "A temperatura média global da Terra está aumentando devido às emissões de gases de efeito estufa causadas pelo homem. Desde a década de 1880, a temperatura média global subiu cerca de 1 grau Celsius.",
  "O clima pode afetar a qualidade do ar em muitas cidades. Por exemplo, altas temperaturas e baixa umidade podem levar à formação de smog, uma mistura de poluição do ar e neblina que pode ser prejudicial à saúde.",
  "As tempestades solares podem afetar o clima da Terra, causando auroras e afetando as comunicações via satélite.",
  "A circulação atmosférica global é influenciada pelo aquecimento desigual da Terra, resultando em padrões de vento e clima em diferentes regiões.",
  "O aumento da temperatura dos oceanos pode afetar a vida marinha, como o branqueamento de corais, e afetar as comunidades costeiras que dependem da pesca.",
  "As mudanças climáticas podem aumentar a frequência e a intensidade de eventos climáticos extremos, como tempestades, inundações e secas, afetando comunidades e ecossistemas em todo o mundo."
];

export function Curiosity() {
  const randomIndex = Math.floor(Math.random() * curiosities.length);
  const randomCuriosity = curiosities[randomIndex];

  return (
    <TextContainer>
      <h1>Você Sabia?<CloudSun size={210} /></h1>
      <p>{randomCuriosity}</p>
      <ButtonBase>
        <Link to="/">VOLTAR</Link>
      </ButtonBase>
    </TextContainer>
  
  );
}
