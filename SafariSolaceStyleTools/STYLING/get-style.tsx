import { useContext } from "react";
import { ssStyleSheet } from "./ss-stylesheet";
import { coolTheme, defaultThemeStyle } from "./stylesheet";
import { themeContext } from "./themecontext";

export enum Theme{
    default,
    other,
    theme2
}

/** Get the style based off of a ID key. The styles can represent an ID (like a 'syncButton' style), or a UI type (like a 'Text' style)
 * @param keys The key representing the type of style desired, based off of the ss-style-keys
 */
export default function GetStyle(keys: string){
    //console.log("GET STYLES CALLED")

    const developermode: boolean = false

    if (developermode){
        return ssStyleSheet(keys)
    }
    else{
        const themes = useContext(themeContext)
        switch (themes.theme){
            case (Theme.theme2) : return coolTheme[keys]
            default: return defaultThemeStyle[keys]
        }
    }
}
