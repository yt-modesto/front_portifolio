import React, { createContext } from "react";
import { useReducer } from "react";

// Create interfaces, types
interface IEstado {
  links: Array<string>;
}
type Props = {
  children?: JSX.Element;
};
export interface ICoxtextTypeLinks {
  state: IEstado;
  dispatch: React.Dispatch<{ type: string; value: unknown }>;
}

const estadoInicial = {
  //#01 definir o estado Inicial
  links: ["home", "contact"],
};

export const GlobalContextLinks = createContext<ICoxtextTypeLinks | null>(null); //#02 criar um contexto

const reducer = (state: IEstado, action: any) => {
  switch (action.type) {
    case "add":
      // return { ...state, links: action.pauload };
      break;
    case "remove":
      // return { ...state, links: action.pauload };
      break;
  }
  return { ...state };
};

export const ContextLinks = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, estadoInicial); //#03 criar o reducer setando a função e o estado inicial
  return (
    <GlobalContextLinks.Provider value={{ state, dispatch }}>
      {/*  #04 usar o contexto pssando estado e dispatch */}
      {children}
    </GlobalContextLinks.Provider>
  );
};
