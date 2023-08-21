import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivTextLeft,
  DivImgRight,
  Text1,
  Title,
  Subtitle,
} from "./Section1";
import pastaImage from "../../assets/equipe.jpg";
import ContactButton from "../../components/ContactButton";

const Section1 = () => {
  return (
    <SectionContainer id="section1">
      <Title>edtech1985</Title>

      <DivTextImg>
        <DivTextLeft>
          <Subtitle>Sobre Nós</Subtitle>
          <Text1>
            Bem-vindo à edtech1985 - Criação de Websites, onde transformamos
            ideias em realidade digital. Somos especialistas em criação de
            websites institucionais e landing pages que cativam e convertem.
            Combinando design elegante e funcionalidade avançada, ajudamos você
            a se destacar online. Quer saber mais sobre nossos serviços? Clique
            no link abaixo para iniciar uma conversa pelo WhatsApp e solicitar
            uma cotação personalizada.
          </Text1>
        </DivTextLeft>

        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
      </DivTextImg>

      <ContactButton />
    </SectionContainer>
  );
};

export default Section1;
