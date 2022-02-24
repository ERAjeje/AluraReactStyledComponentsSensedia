import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import SwitcherTheme from "../SwitcherTheme";
import { BtnTheme } from "../UI";


const StyledHeader = styled.nav`
  background-color: ${props => props.theme.cor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${props => props.primary ? "white" : props.theme.cor};
  color: ${props => props.primary ? props.theme.cor : "white"};
`;

const Cabecalho = ({ theme, func }) => {

  const _handleClick = () => {
    func(!theme);
  }

  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho primary={true} href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
      <BtnTheme onClick={_handleClick}>
        <SwitcherTheme theme={theme} />
      </BtnTheme>
    </StyledHeader>
  );
};


export default Cabecalho;
