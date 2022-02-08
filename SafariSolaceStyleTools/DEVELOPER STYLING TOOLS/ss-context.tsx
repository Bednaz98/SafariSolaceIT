import { createContext} from "react";

export interface ssContextInterface{
    mainView: Object
    setMainView: Function
    navView: Object
    setNavView: Function
}

// ssContextInit
export const ssContext = createContext(undefined)