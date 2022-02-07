import { createContext, useContext } from "react";
import { key } from "../styling/get-styles-by-theme-context";



export interface slyderStylerContext{
    mainView: Object
    navView: Object
    setColor(color: string, keys: key)
}

export const ssContextInit : slyderStylerContext = {
    mainView: {color: 'red', backgroundColor: 'blue'},
    navView: {color: 'purple', backgroundColor: 'purple'},
    setColor: (color: string, keys: key)=>{
        switch(keys){
            case key.MainView : {mainView.color = color} break
            default : {}
        }
    }
}

export const ssContext = createContext(ssContextInit)