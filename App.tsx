import {useEffect, useState } from "react";
import EmployeeInfo from "./components/employee-info-and-pw-change";
import { Employee } from "./entities/user";
import RealApp from "./RealApp";
import { ssContext} from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { key, ssKeys, ssKeysInterface } from "./SafariSolaceStyleTools/STYLING/ss-style-keys";
import SSPlayground from "./ss-playground";

//the sliderStyler psuedo app
export default function App(){
        
    
    // // style context states
    // const [mainViewState, setMainView] = useState<Object>()
    // const [navViewState, setNavView] = useState<Object>()
    // const [textState, setText] = useState<Object>()
    // const [titleTextState, setTitleText] = useState<Object>()
    // const [syncButtonState, setSyncButton] = useState<Object>()
    // const [modalState, setModal] = useState<Object>()
    // const [menuButtonState, setMenuButton] = useState<Object>()

    const [styleContextObject, setStyleContextObject] = useState<ssKeysInterface>(ssKeys)

    // //useEffect(()=>{console.log("MAIN VIEW STATE CHANGED IN APP AND IS", mainViewState)}, [mainViewState])
    // useEffect(()=>{console.log("Nav State Changed")}, [navViewState])
    // useEffect(()=>{console.log("Main View State Changed")}, [mainViewState])

    //context initializer
    const ssContextInit = {
        // mainView: mainViewState,
        // navView: navViewState,
        // text: textState,
        // titleText: titleTextState,
        // syncButton: syncButtonState,
        // menuButton: menuButtonState,
        // modal: modalState,
        styleContextObject: styleContextObject,
        setStyleContextObject: setStyleContextObject,
        // setMainView: setMainView,
        // setNavView: setNavView,
        // setSyncButton: setSyncButton,
        // setModal: setModal,
        // setMenuButton: setMenuButton,
        
        // setByKey: (keys: key, style: Object) => {
        //     switch(keys){
        //         case key.MainView : {setMainView(style)} break
        //         case key.NavView : {setNavView(style)} break
        //         case key.Text : { setText(style) } break
        //         case key.Modal : { setModal(style)} break
        //         case key.SyncButton : {setSyncButton(style)} break 
        //         case key.titleText: {setTitleText(style)} break 
        //         case key.MenuButton : {setMenuButton(style)} break
        //         default : {setMainView(style)} break
        //     }
        // }
        setByKey: (keys: string, style: Object) => {
            const styleContextObjectClone = styleContextObject
            styleContextObjectClone[keys] = style
            setStyleContextObject(styleContextObjectClone)
        },
        getByKey: (keys: string, style: Object) => {
            return (styleContextObject[keys])
        }
    }

    const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}

  
    return(
        <ssContext.Provider value = {ssContextInit}>
            <SSPlayground/>
            <EmployeeInfo employee={initUser}></EmployeeInfo>
            {/* {<RealApp></RealApp>} */}
        </ssContext.Provider>
    )
}



