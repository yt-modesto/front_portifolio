import styled, { css } from "styled-components";

export const LogoStyled = styled.div`
  ${() => css`
    /* background-image: url("./../../assets/logo.png");
    background-size: cover; */
    background: #da0f0f;
    @media only screen and (max-width: 768px) {
      width: 200px;
      height: 40px;
    }
    @media only screen and (min-width: 1024px) {
      width: 200px;
      height: 60px;
    }
  `}
`;
