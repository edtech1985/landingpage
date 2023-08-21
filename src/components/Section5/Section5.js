import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const FooterContainer = styled.footer`
  background-color: var(--background2);
  color: #f2f2f2;
  text-align: center;
`;

export const DivFooter = styled.div`
  padding: 1rem;
`;

export const Text1 = styled.p`
  font-size: 0.8rem;
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;

export const SocialIcons = styled.div`
  margin-bottom: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 10px;
    text-decoration: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  /* Estilos gerais para ícones */
`;

export const LinkedinIcon = styled(Icon).attrs({
  icon: faLinkedin,
})`
  /* Estilos específicos para o ícone do LinkedIn */
`;

export const GithubIcon = styled(Icon).attrs({
  icon: faGithub,
})`
  /* Estilos específicos para o ícone do GitHub */
`;

export const WhatsappIcon = styled(Icon).attrs({
  icon: faWhatsapp,
})`
  /* Estilos específicos para o ícone do WhatsApp */
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
`;
