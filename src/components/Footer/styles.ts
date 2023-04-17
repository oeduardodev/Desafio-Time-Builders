import styled from "styled-components";

export const Rodape = styled.footer`
width: 100%;

padding: 2rem;
    bottom: 0;
text-align: center;
    background-color: ${(props) => props.theme['azul-300']};
    a{    
        color: ${(props) => props.theme['azul-700']};
        text-decoration: none;
    }
`