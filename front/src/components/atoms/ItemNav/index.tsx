import { Link } from "react-router-dom";
export interface IItemNavProps {
  text: string;
  pathTo: string;
}
export const ItemNav = (props: IItemNavProps) => {
  return <Link to={props.pathTo}>{props.text}</Link>;
};
