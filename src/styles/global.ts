
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
     margin:0;
     padding:0;
     box-sizing:border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['azul-100']};
    }

    body{
        background:${(props) => props.theme['azul-400']};;
        color: ${(props) => props.theme['branco-100']};
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button{
        font-family:'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    body::-webkit-scrollbar {
        width: 12px;         
}

    body::-webkit-scrollbar-track {
        background:${(props) => props.theme['azul-400']}; 
 
}

    body::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['azul-700']};;  ;  
        border-radius: 20px;      
        border:3px solid ${(props) => props.theme['azul-400']}; 
    }

`
