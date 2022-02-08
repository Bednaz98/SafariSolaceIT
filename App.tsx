import {useState } from "react";
import RealApp from "./realApp";
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView";
import { ssContext} from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { key } from "./SafariSolaceStyleTools/STYLING/keys";

//the sliderStyler psuedo app
export default function App(){
    
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction(key.MainView)
    const navView: ssGroupInterface = new ssViewConstruction(key.NavView)

    //states
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
           {<RealApp></RealApp>}
        </ssContext.Provider>
    )
}



