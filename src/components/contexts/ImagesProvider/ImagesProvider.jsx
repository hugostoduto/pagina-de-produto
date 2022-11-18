import P from "prop-types";
import { ImagesContext } from "./context";
import { useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";

export const ImagesProvider = ({ children }) => {
  const [imagesState, imagesDispatch] = useReducer(reducer, data);

  return (
    <ImagesContext.Provider value={{ imagesState, imagesDispatch }}>
      {children}
    </ImagesContext.Provider>
  );
};

ImagesProvider.prototypes = {
  children: P.node.isRequired,
};
