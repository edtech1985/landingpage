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
} from "./Section3";
import pastaImage from "../../assets/globo1.jpg";

const Section3 = () => {
  return (
    <SectionContainer id="Section3">
      <Subtitle>Otimização de SEO e Integração com Redes Sociais</Subtitle>

      <DivTextImg>
        <DivTextLeft>
          <TitleH3>
            {" "}
            Nós cuidamos da configuração de SEO para que seu site esteja bem
            posicionado nos mecanismos de busca. Além disso, integramos suas
            redes sociais para uma presença online completa.
          </TitleH3>
          <Text1>
            A visibilidade online é crucial nos dias de hoje, e é por isso que
            nos dedicamos a otimizar cada detalhe. Desde a estrutura do site até
            as palavras-chave estratégicas, nossa equipe cuida de todos os
            aspectos da configuração de SEO. Além disso, integramos suas redes
            sociais diretamente ao seu site, tornando mais fácil do que nunca
            para os clientes se conectarem e compartilharem. Combinar SEO e
            presença nas redes sociais é a chave para conquistar os mecanismos
            de busca e a atenção do público.
          </Text1>
        </DivTextLeft>

        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section3;
