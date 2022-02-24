import React, { useState } from "react";

import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Balance, Box, Button, Detail, Icon, IconTheme, SpanText } from "../UI";

const MarginIcon = styled(Icon)`
  margin-top: "2px";
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box height='255px'>
      <h2>Conta</h2>
      <SpanText>
        Saldo disponível {"   "}
        <span>
          <IconTheme src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail>{"  "}0,00 {"   "}
          </Balance>
        ) : null}
      </SpanText>

      <Button className="btn" onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
