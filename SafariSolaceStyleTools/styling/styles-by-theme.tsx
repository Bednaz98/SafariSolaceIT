import { useContext } from "react"
import { StyleSheet } from "react-native"
import { ssContext } from "../developer-styling-tools.tsx/sliderStyler-context"
import { sliderStyler } from "../developer-styling-tools.tsx/ssText"
import { styleTweaker } from "../developer-styling-tools.tsx/ssTextInput"
import ssViewConstruction from "../developer-styling-tools.tsx/ssView"
import { key } from "./get-styles-by-theme-context"


export const defaultThemeStyle = StyleSheet.create({
    MenuButton:{
        color: 'blue'
    },
    SyncButton:{},
    MainView:  {backgroundColor: 'purple'},
    NavView:{},
    UserlistName:{},
    TitleView:{},
    ListView:{},
    ModalView: {}
})

/** Get a style by its key.
 * @param keys The UI type that you want to change
 * @param developerMode Setting this to true will use the slyderStyler context instead of the stylesheet
 */
export function defaultTheme(keys: key, developerMode?: boolean){

    if (developerMode){
        const context = useContext(ssContext) ?? null
        let chosenComponent: Object

        switch(keys){
            case key.MainView : {chosenComponent = context.mainView } break
            default : {chosenComponent = context.mainView }
        }       
        return (chosenComponent)
    }
    else{
        return (defaultThemeStyle.MainView)
    }
}