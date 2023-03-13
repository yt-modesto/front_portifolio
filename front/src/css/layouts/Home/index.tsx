import styled, { css } from "styled-components";

export const GridConteiner = styled.div`
  ${() => css`
    @media screen and (max-width: 320px) {
      width: 100%;
      height: 100%;
      background: blue;
    }
  `}
`;
