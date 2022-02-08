import {useState } from "react";
import { Button, View } from "react-native";
import RealApp from "./realApp";
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView";
import { ssContext} from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { key } from "./SafariSolaceStyleTools/STYLING/keys";

//the sliderStyler psuedo app
export default function App(){
    
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction(key.MainView)
    const navView: ssGroupInterface = new ssViewConstruction(key.NavView)
    const sliderGroups = [mainView.getSliders(), navView.getSliders()]
    
    function renderSliders(sliderGroups: JSX.Element[]){
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
                <View style={{flexDirection: 'row'}}>
                    {toggleSliders? sliderGroups: null}
                </View>
        </>)
    }

    //states
    const [toggleSliders, setToggleSliders] = useState<boolean>()

    const [mainViewState, setMainView] = useState<Object>()
    const [navViewState, setNavView] = useState<Object>()

    //context initializer
    const ssContextInit = {
        mainView: mainViewState,
        setMainView: setMainView,
        navView: navViewState,
        setNavView: setNavView
    }

    return(
        <ssContext.Provider value = {ssContextInit}>
            {renderSliders(sliderGroups)}
            {<RealApp></RealApp>}
        </ssContext.Provider>
    )
}



