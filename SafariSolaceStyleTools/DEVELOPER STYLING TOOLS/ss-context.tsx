import { createContext} from "react";

export interface ssContextInterface{
    mainView: Object
    setMainView: Function
    navView: Object
    setNavView: Function
    setByKey: Function
}

// ssContextInit
export const ssContext = createContext(undefined)