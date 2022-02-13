import { useContext } from "react"
import { StyleSheet } from "react-native"
import { ssContext, ssContextInterface} from "../DEVELOPER STYLING TOOLS/ss-context"
import { key, ssKeys, ssKeysInterface } from "./ss-style-keys"
import { defaultThemeStyle } from "./stylesheet"


/** Get a style by its key.
 * @param keys The UI type that you want to change
 * @param developerMode Setting this to true will use the slyderStyler context instead of the regular stylesheet
 */
// export function ssStyleSheet(keys: key, developerMode?: boolean){

//     if (developerMode){

//         //use context
//         const context: ssContextInterface = useContext(ssContext)
//         switch(keys){
//             case key.MainView : {return context.mainView } 
//             case key.NavView : { return context.navView } 
//             case key.Text : { return context.text } 
//             case key.Modal : { return context.modal } 
//             case key.SyncButton : { return context.syncButton } 
//             case key.titleText: { return context.titleText } 
//             //case key.MenuButton : { return context.M } 
//             //case key.MainView : { return context.mainView } 
//             //case key.MainView : { return context.mainView } 
//             default : {console.log('default style selected'); return context.mainView }
//         }       
//     }
//     else{ var chosenComponent
//         switch(keys){
//             case key.MainView : {return defaultThemeStyle.MainView } 
//             case key.NavView : { return defaultThemeStyle.NavView } 
//             case key.Text : { return defaultThemeStyle.Text } 
//             case key.Modal : { return defaultThemeStyle.Modal } 
//             case key.SyncButton : { return defaultThemeStyle.SyncButton} 
//             case key.titleText: { return defaultThemeStyle.TitleText } 
//             case key.MenuButton : { return defaultThemeStyle.MenuButton } 
//             //case key.MainView : { return defaultThemeStyle.NavView } 
//             //case key.MainView : { return defaultThemeStyle.NavView } 
//             default : {return defaultThemeStyle.NavView }
//         }       
//         return (chosenComponent)}
// }
 //return style from context by key
export function ssStyleSheet(keys: string, developerMode?: boolean){
    
   
    if (developerMode){

        // //get keys object
        // const keys = ssKeys


        //use context
        const context: ssContextInterface = useContext(ssContext)
        const derp = context.getByKey(keys)
           
    }
    else{}
      
}