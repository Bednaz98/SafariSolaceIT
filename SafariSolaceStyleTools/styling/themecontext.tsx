import { createContext, useContext } from "react";
import { Theme } from "./get-style";




/**this interface is used for intellisense for the 'Theme' useContext*/
export interface ThemeContextInterface{
    theme:Theme
    setTheme:Function
}

export const themeContextObject:ThemeContextInterface = {theme:1,setTheme:()=>{}}

/**This is the global 'Theme' context*/
export const themeContext = createContext(themeContextObject)