import { createContext, useContext } from "react";
import { Theme } from "./styleconfig";



/**this interface is used for intellisense for the 'Theme' useContext*/
export interface ThemeContextInterface{
    theme:Theme
    setTheme:Function
}

export const themeContextObject:ThemeContextInterface = {theme:0, setTheme:()=>{}}

/**This is the global 'Theme' context*/
export const themeContext = createContext(themeContextObject)