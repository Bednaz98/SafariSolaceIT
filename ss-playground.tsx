import { useContext, useState } from "react"
import { Button, ScrollView, View } from "react-native"
import ssTextConstruction, { ssGroupInterfaceText } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssText"
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView"
import { ssContext } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context"

export default function SSPlayground() {
    console.log("SSPLAYGROUND CALLED")
    const sscontext = useContext(ssContext)
    
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction("MainView")
    const navView: ssGroupInterface = new ssViewConstruction("NavView")
    const textView1: ssGroupInterfaceText = new ssTextConstruction("Text")

    const sliderGroups = [mainView.getSliders(), navView.getSliders(), textView1.getSliders()]
    //console.log("🚀 ~ file: ss-playground.tsx ~ line 13 ~ SSPlayground ~ sliderGroups", mainView.getStyle())

    const [toggleSliders, setToggleSliders] = useState<boolean>()

    function saveToJSON(){
        console.log(JSON.stringify(sscontext.styleContextObject, null, 2))       
    }

    function RenderSliders(sliderGroups: JSX.Element[]){
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
                <View style={{flexDirection: 'row'}}>
                    {toggleSliders? <ScrollView horizontal={true}>{sliderGroups}</ScrollView>: null}
                </View>
            <Button onPress={saveToJSON} title={"SAVE JSON TO CONSOLE "}></Button>
        </>)
    }

    //calling rendersliders as a function instead of a JSX component is crucial to having the sliders update accordingly
    return (
        <>
            <>{RenderSliders(sliderGroups)}</>
        </>
    )

}