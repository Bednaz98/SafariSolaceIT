import {useEffect, useState } from "react";
import EmployeeInfo from "./COMPONENTS/employee-info-and-pw-change";
import { Employee } from "./ENTITIES/user";
import RealApp from "./RealApp";
import { ssContext} from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { key } from "./SafariSolaceStyleTools/STYLING/style-keys";
import SSPlayground from "./ss-playground";

//the sliderStyler psuedo app
export default function App(){
        
    
    //states
    const [mainViewState, setMainView] = useState<Object>()
    const [navViewState, setNavView] = useState<Object>()

    //context initializer
    const ssContextInit = {
        mainView: mainViewState,
        navView: navViewState,
        setMainView: setMainView,
        setNavView: setNavView,
        setByKey: (keys: key, style: Object) => {
            switch(keys){
                case key.MainView : {setMainView(style)} break
                case key.NavView : {setNavView(style)} break
            }
        }
    }
    
    //dummy
    const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}
    
    return(
        <ssContext.Provider value = {ssContextInit}>
            <SSPlayground/>
            {/* {<RealApp></RealApp>} */}
            <EmployeeInfo employee={initUser}></EmployeeInfo>
        </ssContext.Provider>
    )
}



