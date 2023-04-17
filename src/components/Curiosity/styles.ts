import styled from "styled-components";

export const TextContainer = styled.div`
    background-color:${(props) => props.theme['branco-100']};
    color: ${(props) => props.theme['azul-700']};
    width: 35rem;
    box-shadow: 8px 8px 15px ${(props) => props.theme['azul-300']};

    margin: 0 auto 10rem ;
    margin-top:2rem ;

    border-radius: 15px;

    align-items: center;
    align-content: center;
    flex-direction:column;

    display:flex;

   &{
    padding: 5rem;
   }

   h1{
    font-size: 5rem;
    line-height: 4.3rem;
    letter-spacing: -0.2rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
   }

   p{
    width: 28rem;
    font-size: 1.1rem;
    text-align:left;
      margin-bottom: 3rem;
   }

   @media (max-width: 600px) {
   width: 19rem;
        &{
    padding: 2rem;
   }
   p{
    width: 16rem;
   }

   h1{
    font-size: 4rem;
    line-height: 3.4rem;
    width: 16rem;
  }
   }


 `