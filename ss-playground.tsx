import { useContext, useState } from "react"
import { Button, View } from "react-native"
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView"
import { ssContext } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context"
import { key } from "./SafariSolaceStyleTools/STYLING/style-keys"

export default function SSPlayground() {
   
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction(key.MainView)
    const navView: ssGroupInterface = new ssViewConstruction(key.NavView)
    const sliderGroups = [mainView.getSliders(), navView.getSliders()]

    const [toggleSliders, setToggleSliders] = useState<boolean>()

    function renderSliders(sliderGroups: JSX.Element[]){
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
                <View style={{flexDirection: 'row'}}>
                    {toggleSliders? sliderGroups: null}
                </View>
        </>)
    }

    return (
        <>{renderSliders(sliderGroups)}</>
    )

}