import styled from "styled-components";
import { LogoBranca } from "./logo-branca";

const MenuBar = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 460px) {
    flex-direction: column;
    gap: 20px;
  }

  > svg {
    cursor:pointer;

    @media screen and (max-width: 590px) {
    width: 70px;
  }

    @media screen and (max-width: 460px) {
    width: 90px;
  }
  }
`;

const HeaderMenuUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 38px;

  @media screen and (max-width: 590px) {
    gap: 20px;
    font-size: 14px;
  }
`;

const HeaderMenuLi = styled.li``;

const HeaderMenuLink = styled.a`
  color: white;
  text-decoration: none;
`;

const menuItems = [
  { label: "Sobre Mim", url: "#sobreMim" },
  { label: "Conhecimentos", url: "#conhecimentos" },
  { label: "Projetos", url: "#projetos" },
];

export function Header() {
  return (
    <>
      <MenuBar>
        <LogoBranca />
        <HeaderMenuUl>
          {menuItems.map((item, index) => (
            <HeaderMenuLi key={index}>
              <HeaderMenuLink href={item.url}>{item.label}</HeaderMenuLink>
            </HeaderMenuLi>
          ))}
        </HeaderMenuUl>
      </MenuBar>
    </>
  );
}
