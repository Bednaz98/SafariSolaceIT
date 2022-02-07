import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ssContext } from "../developer-styling-tools.tsx/sliderStyler-context";
import ssViewConstruction, { sliderStyler } from "../developer-styling-tools.tsx/ssView";
import Dummy from "./dummy";
import { defaultTheme} from "./styles-by-theme";
import { themeContext } from "./themecontext";

export enum Theme{
    default,
    other
}

/** Keys dude */
export enum key{
    SyncButton,
    MainView,
    NavView,
    UserlistName,
    TitleView,
    MenuButton,
    ListView,
    ModalView
}
//styleclass.getStyle(keys)

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
                case key.TitleView: { return  defaultTheme(keys)} 
                case key.MenuButton: { return  defaultTheme(keys)}
                case key.ListView: { return  defaultTheme(keys)}
                case key.UserlistName: { return  defaultTheme(keys)}
                case key.ModalView: { return defaultTheme(keys)}
                default: { return  defaultTheme(key.MainView)}
            }
        }
    }
}

