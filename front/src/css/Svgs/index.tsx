import Styled, { css } from "styled-components";

type SvgProps = {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
};
export const SvgDecorator = Styled.svg`
  ${(props: SvgProps) => css`
    @media screen and (max-width: 320px) {
      position: absolute;
      width: ${props.width ? props.width : 400}px;
      height: ${props.height ? props.height : 432}px;
      left: ${props.left ? props.left : -293}px;
      top: ${props.top ? props.top : 744}px;
    }

    @media screen and (max-width: 768px) {
      position: absolute;
      width: ${props.width ? props.width : 800}px;
      height: ${props.height ? props.height : 832}px;
      left: ${props.left ? props.left : -293}px;
      top: ${props.top ? props.top : 744}px;
    }
    @media screen and (max-width: 1920px) {
      position: absolute;
      width: ${props.width ? props.width : 1200}px;
      height: ${props.height ? props.height : 1232}px;
      left: ${props.left ? props.left : -293}px;
      top: ${props.top ? props.top : 744}px;
    }
  `}
`;
