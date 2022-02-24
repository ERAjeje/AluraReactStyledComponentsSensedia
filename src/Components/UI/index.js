import styled from "styled-components";

export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconTheme = styled(Icon)`
  filter: ${props => props.theme.filtro};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${props => props.row ?? 'column'};
  justify-content: space-between;
  background-color: ${props => props.theme.conteudo};
  border-radius: 5px;
  box-shadow: ${props => props.transparent ?? '4px 4px 20px 0px rgba(0, 0, 0, 0.04)'};
  padding: 20px;
  width: ${props => props.width ?? '48%'};
  height: ${props => props.height ?? null};
  overflow-y: hidden;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Button = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${props => props.theme.cor};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Detail = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;

export const Balance = styled.div`
  color: ${props => props.theme.cor};
  margin-top: 10px;
`;

export const BtnTheme = styled.button`
  position: absolute;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const SpanText = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;