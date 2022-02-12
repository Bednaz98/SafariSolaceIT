import { createContext} from "react";


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

interface stylePropsText{
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

interface styleTextInput extends stylePropsText{
    poop: string
}


//list and scrollview interface?

export interface ssContextInterface{
    mainView: Object
    navView: Object
    textView: Object
    text: Object
    titleText: Object
    syncButton: Object
    modal: Object
   
    setByKey: Function
    setMainView: Function
    setNavView: Function
    setTextView: Function
    setText: Function
    setModal: Function
    setTitleText: Function
    setSyncButton: Function
}

// ssContextInit
export const ssContext = createContext(undefined)