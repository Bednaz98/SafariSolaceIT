import { useContext, useState } from "react"
import { Button, View } from "react-native"
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView"
import { ssContext } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context"
import ssStyles from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ssStyles.json" //parsed json

export default function SSPlayground() {
    console.log("SSPLAYGROUND CALLED")
    const sscontext = useContext(ssContext)
    
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction("MainView")
    const navView: ssGroupInterface = new ssViewConstruction("NavView")
    //const navView: ssGroupInterface = new ssViewConstruction(key.NavView)
    const sliderGroups = [mainView.getSliders(), navView.getSliders()]
    //console.log("🚀 ~ file: ss-playground.tsx ~ line 13 ~ SSPlayground ~ sliderGroups", mainView.getStyle())

    const [toggleSliders, setToggleSliders] = useState<boolean>()

    function saveToJSON(){

        // fs.writeFile(filepath, JSON.stringify(sscontext.styleContextObject), function writeJSON(err) {
        //     if (err) return console.log(err);
        //     console.log(ssStyles);
        //     console.log('writing to ' + filepath);
        // });
        
        //update the json using the context state
        //for (const uiStyle in ssStyles){console.log(uiStyle)}
        console.log(JSON.stringify(sscontext.styleContextObject, null, 2))
        //console.log(sscontext.styleContextObject.MainView)
        //console.log(JSON.stringify(ssStyles))
        
    }

    function RenderSliders(sliderGroups: JSX.Element[]){
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
                <View style={{flexDirection: 'row'}}>
                    {toggleSliders? sliderGroups: null}
                </View>
            <Button onPress={saveToJSON} title={"SAVE TO JSON"}></Button>
        </>)
    }

    //calling rendersliders as a function instead of a JSX component is crucial to having the sliders update accordingly
    return (
        <>
            <>{RenderSliders(sliderGroups)}</>
        </>
    )

}