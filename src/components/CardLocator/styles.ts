import styled from "styled-components";

export const CardContainer = styled.div`
    background-color:${(props) => props.theme['branco-100']};
    color: ${(props) => props.theme['azul-700']};
    width: 25rem;
    box-shadow: 8px 8px 15px ${(props) => props.theme['azul-300']};

    margin: 1rem 1rem 3rem 1rem;
    border-radius: 15px;

    align-items: center;
    align-content: center;
    flex-direction:column;

    display:flex;

    h2{
        font-weight: 200;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }  
    p{
        padding: 1rem;
    }
    @media (max-width: 425px) {

        width: 18rem;
        h2{
           font-size :1rem ;
        }
    }
`


export const ClimaticList = styled.ul`
        list-style: none;
        font-size: 1rem;
        color: ${(props) => props.theme['azul-700']};
 
        width: 23rem;
        border: none;
        outline: none;
  

        border-radius: 10px;

        align-items: center;
        align-content: center;
        display: flex;
        flex-direction: column;

        margin-bottom: 1rem;

        li{
            vertical-align: middle;
            display: flex;
            align-items: center;
        }


       div li{
        align-items: center;
        display: inline-flex;

        margin:1rem
    }

    @media (max-width: 425px) {
        width: 15rem;
        display: table-column;

        li{
            justify-content: center;
        }
        div li{
            display: flex;
            justify-content: center;
        }
    }
    
`
export const Temperature = styled.li`
    font-size: 8rem;   
    font-weight: 300;

    @media (max-width: 385px) {
     font-size: 5rem;
    }
`

export const ButtonBase = styled.div`

    color: ${(props) => props.theme['branco-100']};
    background-color: ${(props) => props.theme['azul-700']};
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.2rem;

    width: 12rem;
    padding: 0.7rem;
    margin: 1.2rem 0rem 1.2rem 0rem;
    align-items: center;
    text-align: center;
    text-decoration: none;

    border:none ;
    border-radius: 80px;
    outline: none;

    a{
        color: ${(props) => props.theme['branco-100']};
        text-decoration: none;
    }
`