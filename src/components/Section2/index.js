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
} from "./Section2";
import pastaImage from "../../assets/landingpage.jpg";

const Section1 = () => {
  return (
    <SectionContainer id="section2">
      <Subtitle>O Poder da Landing Page</Subtitle>

      <DivTextImg>
        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
        <DivTextLeft>
          <TitleH3>
            Descubra como uma landing page bem projetada pode impulsionar o seu
            negócio, transformando cliques em clientes fiéis.
          </TitleH3>
          <Text1>
            Você já imaginou como uma landing page bem projetada pode
            impulsionar o seu negócio? Não apenas atraímos cliques, mas também
            transformamos esses visitantes em clientes fiéis. Nossa equipe
            experiente entende a ciência por trás de conversões eficazes.
            Deixe-nos criar uma landing page que conte a história da sua marca,
            estimule o interesse e leve os visitantes a agir. Seja qual for o
            seu objetivo, estamos aqui para ajudar você a alcançá-lo.
          </Text1>
        </DivTextLeft>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section1;
