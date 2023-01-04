import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <svg
          onClick={() => setSideBar(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </RightMenu>
      <BurgerNav show={sideBar}>
        <CloseWrap>
          <svg
            onClick={() => setSideBar(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </CloseWrap>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Powerall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 10px;
  }

  svg {
    height: 20px;
    width: 20px;
    color: black;
    cursor: pointer;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  svg {
    cursor: pointer;
  }

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header;
