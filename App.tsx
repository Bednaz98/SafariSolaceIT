import {useEffect, useState } from "react";
import EmployeeInfo from "./components/employee-info-and-pw-change";
import { Employee } from "./entities/user";
import { ssContext, ssContextInterface} from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { ssKeys, ssKeysInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-style-keys";
import SSPlayground from "./ss-playground";

//the sliderStyler psuedo app
export default function App(){

    const [styleContextObject, setStyleContextObject] = useState<ssKeysInterface>(ssKeys)

    useEffect(()=>{console.log("styleContext Object updated")}, [styleContextObject])

    //context initializer
    const ssContextInit: ssContextInterface = {
        styleContextObject: styleContextObject,
        setStyleContextObject: setStyleContextObject,
        setByKey: (keys: string, style: Object) => {
            let styleContextObjectClone = styleContextObject
            styleContextObjectClone[keys] = style
            //console.log("styleContext state is", styleContextObject )
            //console.log("styleContext setter called, The style being updated is", styleContextObjectClone[keys] )
            setStyleContextObject({...styleContextObjectClone}) //very important to include {...}, wont rerender otherwise
        },
        getByKey: (keys: string, style: Object) => {
            //console.log("styleContext getter called, The style being asked for is", styleContextObject[keys] )
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



