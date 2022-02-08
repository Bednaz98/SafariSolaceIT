import { useContext } from "react"
import { StyleSheet } from "react-native"
import { ssContext} from "../DEVELOPER STYLING TOOLS/ss-context"
import { key } from "./style-keys"


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

        //use context
        const context = useContext(ssContext) ?? null

        console.log("🚀 ~ file: styles.tsx ~ line 31 ~ defaultTheme ~ context", context)

        switch(keys){
            case key.MainView : {var chosenComponent = context.mainView } break
            default : {chosenComponent = context.mainView }
        }       
        return (chosenComponent)
    }
    else{ return (defaultThemeStyle.MainView) }
}