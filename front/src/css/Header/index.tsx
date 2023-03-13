import styled, { css } from "styled-components";

type propsHeader = {
  background?: string;
  height?: number;
  shadown?: string;
};

export const HeaderStyle = styled.div`
  ${(props: propsHeader) => css`
    display: flex;
    padding: 10px;
    top: 0;
    position: sticky;
    @media only screen and (max-width: 769px) {
      width: 100%;
      height: 64px;
      background: ${props.background ? props.background : "white"};
      -webkit-box-shadow: 0px 10px 13px -7px ${props.shadown ? props.shadown : "#000000"},
        -50px 13px 14px 26px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px ${props.shadown ? props.shadown : "#000000"},
        -50px 13px 14px 26px rgba(0, 0, 0, 0);
    }
    @media only screen and (min-width: 900px) {
      width: 100%;
      height: 84px;
      background: white;
      -webkit-box-shadow: 0px 10px 13px -7px ${props.shadown ? props.shadown : "#000000"},
        -50px 13px 14px 26px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px ${props.shadown ? props.shadown : "#000000"},
        -50px 13px 14px 26px rgba(0, 0, 0, 0);
    }
  `}
`;
