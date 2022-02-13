import { useContext } from "react";
import { ssStyleSheet } from "./ss-stylesheet";
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
    return ssStyleSheet(keys,developermode)
}
