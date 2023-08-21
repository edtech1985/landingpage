import React, { useState } from "react";
import { HeaderContainer, NavList, NavItem, NavLink } from "./Header";
const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovered={hovered}
    >
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#section1">Sobre Nós</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section2">Landing Pages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section3">SEO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section4">Investimento e Qualidade</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Contato</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
