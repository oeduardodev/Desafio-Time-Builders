import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  

    h1{
        font-size: 4rem;
        letter-spacing: -0.25rem;
    }
    h2{
        font-size: 1.5rem;
        font-weight: 400;
    }
    @media (max-width: 375px) {

    h2{
        font-size: 1rem;
        font-weight: 400;
    }
    }

`
