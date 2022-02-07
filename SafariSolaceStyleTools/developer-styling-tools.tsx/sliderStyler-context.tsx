import { createContext, useContext } from "react";



export interface slyderStylerContext{
    mainView: Object
    navView: Object
    setMainView: Function
}


export const ssContextInit : slyderStylerContext = {
    mainView: {color: 'red', backgroundColor: 'blue'},
    navView: {color: 'purple', backgroundColor: 'purple'},
    setMainView: ()=>{}
}

export const ssContext = createContext(ssContextInit)