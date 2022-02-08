import { createContext} from "react";



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