/*import React from "react";

const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};
export default Titulo;*/

import styled from "styled-components";

const Titulo = styled.h1`
  color: ${props => props.theme.texto};
  padding: 25px 0;
`;

export default Titulo;