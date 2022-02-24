import styled from "styled-components";
import { borderColor } from "../UI/variaveis";

export const Items = styled.div`
    display: flex;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid ${borderColor};
    border-radius: 5px;
    box-shadow: 0.5px 0.5px 0.5px 1px ${borderColor};
    align-items: center;
    justify-content: space-around;
    height: 90px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text {
        font-weight: bold;
    }
`;