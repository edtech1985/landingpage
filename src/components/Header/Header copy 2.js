import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--background1);
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.3s, opacity 0.3s;
  z-index: 1000;
  opacity: ${(props) => (props.hovered ? 1 : 0.8)};

  &:hover {
    opacity: 1;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 15px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;

  &:hover {
    color: var(--second-color);
  }
`;
