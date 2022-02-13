import { useContext } from "react";
import { ssStyleSheet } from "../STYLING/ss-stylesheet";
import { themeContext } from "../STYLING/themecontext";

export enum Theme{
    default,
    other
}

/** Get the style based off of a ID key. The styles can represent an ID (like a 'syncButton' style), or a UI type (like a 'Text' style)
 * @param keys The enumeration key representing the type of style desired
 */
// export default function GetStyle(keys: key){
//     //console.log("GET STYLES CALLED")

//     const context = useContext(themeContext);
//     const developermode: boolean = true
//     switch(context.theme){
//         default:{
//             // switch(keys){

//             //     case key.MainView : {return ssStyleSheet(keys, developermode) } 
//             //     case key.NavView : { return ssStyleSheet(keys, developermode) } 
//             //     case key.Text : { return ssStyleSheet(keys, developermode)} 
//             //     case key.Modal : { return ssStyleSheet(keys, developermode)} 
//             //     case key.SyncButton : { return ssStyleSheet(keys, developermode) } 
//             //     case key.titleText: { return ssStyleSheet(keys, developermode) } 
//             //     case key.MenuButton : { return ssStyleSheet(keys, developermode) } 
//             //     case key.MainView : { return ssStyleSheet(keys, developermode) } 
//             //     case key.MainView : { return ssStyleSheet(keys, developermode) } 
//             //     default : {return ssStyleSheet(keys, developermode) }
                 
//             // }
//             return ssStyleSheet(keys,developermode)
//         }
//     }
// }


export default function GetStyle(keys: string){
    //console.log("GET STYLES CALLED")

    const context = useContext(themeContext);
    const developermode: boolean = true
    switch(context.theme){
        default:{
            
            return ssStyleSheet(keys,developermode)
        }
    }
}
