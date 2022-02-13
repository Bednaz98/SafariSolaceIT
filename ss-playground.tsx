import { useState } from "react"
import { Button, View } from "react-native"
import { Employee } from "./entities/user"
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView"

export default function SSPlayground() {
    console.log("SSPLAYGROUND CALLED")
    
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction("MainView")
    const navView: ssGroupInterface = new ssViewConstruction("NavView")
    //const navView: ssGroupInterface = new ssViewConstruction(key.NavView)
    const sliderGroups = [mainView.getSliders(), navView.getSliders()]
    //console.log("🚀 ~ file: ss-playground.tsx ~ line 13 ~ SSPlayground ~ sliderGroups", mainView.getStyle())

    const [toggleSliders, setToggleSliders] = useState<boolean>()

    function RenderSliders(sliderGroups: JSX.Element[]){
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
                <View style={{flexDirection: 'row'}}>
                    {toggleSliders? sliderGroups: null}
                </View>
        </>)
    }

    //calling rendersliders as a function instead of a JSX component is crucial to having the sliders update accordingly
    return (
        <>
            <>{RenderSliders(sliderGroups)}</>
        </>
    )

}