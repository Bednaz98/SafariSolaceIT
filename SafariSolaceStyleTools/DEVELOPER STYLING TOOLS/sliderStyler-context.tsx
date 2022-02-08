import { createContext, useContext } from "react";
import { key } from "../STYLING/get-styles-by-theme-context";



export interface slyderStylerContext{
    mainView: Object
    setMainView: Function
}

const ssContextInit : slyderStylerContext = {
    mainView: {color: 'red', backgroundColor: 'green'},
    setMainView: ()=>{}
}



//creates a new context every time it is called
export const ssContext = createContext(ssContextInit)