import { createContext, useContext } from "solid-js";

export const DebugContext = createContext<boolean>(false);

export const useDebugContext = () => useContext(DebugContext);
