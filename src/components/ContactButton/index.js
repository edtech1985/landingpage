import React from "react";
import { StyledContactButton } from "./StyledButton";

const ContactButton = () => {
  return (
    <StyledContactButton
      href="https://api.whatsapp.com/send?phone=5551992002595"
      target="_blank"
      rel="noopener noreferrer"
    >
      QUERO MAIS CONVERSÕES!
    </StyledContactButton>
  );
};

export default ContactButton;
