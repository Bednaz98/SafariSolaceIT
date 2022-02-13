import { createContext} from "react";
import { ssKeysInterface } from "./ss-style-keys";

export interface ssContextInterface{  
    styleContextObject: ssKeysInterface
    setStyleContextObject: Function
    setByKey: Function
    getByKey: Function
}

// ssContextInit
export const ssContext = createContext(undefined)



interface stylePropsView{
    backgroundColor: string
    borderColor: string
    borderRadius: number
    borderWidth: number
    opacity: number
    height: number
    width: number
    paddingVertical: number
    paddingHorizontal: number
    justifyContent: string
    alignContent: string
    alignItems: string 
    alignSelf: string
}

export interface stylePropsText{
    color: string //could use background color?
    fontFamily: string
    fontSize: number
    letterSpacing: number
    lineHeight: number
    textAlign: string
    opacity: number
    textShadowColor: string
    textShadowOffset: object //{width, height}
    textShadowRadius: number
}
