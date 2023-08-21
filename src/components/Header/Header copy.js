import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--background1);
  padding: 20px 0;
  text-align: center;
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

export const SectionContainer = styled.section`
  padding: 60px 0;
  text-align: center;
`;
