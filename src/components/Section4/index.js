import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivTextLeft,
  DivImgRight,
  Text1,
  Subtitle,
  TitleH3,
} from "./Section4";
import pastaImage from "../../assets/globo2.jpg";
import ContactButton from "../../components/ContactButton";

const Section1 = () => {
  return (
    <SectionContainer id="section4">
      <Subtitle>Investimento Acessível e Compromisso com a Qualidade</Subtitle>

      <DivTextImg>
        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
        <DivTextLeft>
          <TitleH3>
            Oferecemos soluções de alta qualidade a um preço acessível,
            superando a concorrência. Garantimos a responsividade e entregamos
            dentro dos prazos estipulados.
          </TitleH3>
          <Text1>
            Preocupado com o custo? Não precisa se preocupar! Oferecemos
            soluções de alta qualidade a um preço acessível que supera a
            concorrência. Nosso compromisso com a excelência nunca é
            comprometido, e a qualidade é a nossa prioridade. Cada projeto é
            desenvolvido com atenção meticulosa aos detalhes, garantindo que seu
            site seja responsivo, envolvente e eficaz em atingir seus objetivos.
            Além disso, cumprimos rigorosamente os prazos estipulados, para que
            você possa lançar seu novo site sem atrasos indesejados.
          </Text1>
        </DivTextLeft>
      </DivTextImg>

      <ContactButton />
    </SectionContainer>
  );
};

export default Section1;
