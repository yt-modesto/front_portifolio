import { useContext } from "react";
import {
  GlobalContextLinks,
  ICoxtextTypeLinks,
} from "../../../contexts/ContextLinks";
import { ItemNav } from "../../atoms/ItemNav";

export const Nav: React.FC = () => {
  const context = useContext<ICoxtextTypeLinks | null>(GlobalContextLinks);
  console.log(context?.state.links);
  return (
    <>
      <ol>
        <ItemNav text={"----------"} pathTo="/" />
        <ItemNav text={`${context?.state.links[0]}`} pathTo="/" />
        <ItemNav text={`${context?.state.links[1]}`} pathTo="/" />
        <ItemNav text="qwdqw" pathTo="/" />
        <ItemNav text="qwdqw" pathTo="/" />
      </ol>
    </>
  );
};
