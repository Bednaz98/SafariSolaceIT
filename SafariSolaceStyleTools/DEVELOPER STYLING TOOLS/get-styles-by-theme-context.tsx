import { useContext } from "react";
import { key } from "../STYLING/style-keys";
import { defaultTheme } from "../STYLING/styles";
import { themeContext } from "../STYLING/themecontext";

export enum Theme{
    default,
    other
}

/** Get the style based off of a ID key. The styles can represent an ID (like a 'syncButton' style), or a UI type (like a 'Text' style)
 * @param keys The enumeration key representing the type of style desired
 */
export default function GetStyle(keys: key){

    const context = useContext(themeContext);

    switch(context.theme){
        default:{
            switch(keys){
                case key.MainView: {return defaultTheme(keys, true)} 
                case key.NavView: { return  defaultTheme(keys)} 
                case key.MenuButton: { return  defaultTheme(keys)}
                case key.Modal: { return defaultTheme(keys)}
                default: { return  defaultTheme(key.MainView)}
            }
        }
    }
}

