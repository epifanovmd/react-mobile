import { useContext } from "react";

import { HoldItemContext } from "../HoldItemContext";

export const useHoldItemContext = () => {
  const context = useContext(HoldItemContext);

  if (!context) {
    throw new Error("HoldItemContext is not provided");
  }

  return context;
};
