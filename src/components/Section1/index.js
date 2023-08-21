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
import { StyledContactButton } from "../../ContactButton/StyledButton";

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

      <StyledContactButton
        href="https://api.whatsapp.com/send?phone=5551992002595"
        target="_blank"
        rel="noopener noreferrer"
      >
        QUERO MAIS CONVERSÕES!
      </StyledContactButton>
    </SectionContainer>
  );
};

export default Section1;
