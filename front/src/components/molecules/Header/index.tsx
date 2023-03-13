import { Logo } from "../../atoms/Logo";
import { Nav } from "../Nav";
import { HeaderStyle } from "./../../../css/Header/index";
export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Logo></Logo>
      <Nav></Nav>
    </HeaderStyle>
  );
};
