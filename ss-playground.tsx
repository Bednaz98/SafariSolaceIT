import { useContext, useEffect, useState } from "react"
import { Button, View } from "react-native"
import EmployeeInfo from "./COMPONENTS/employee-info-and-pw-change"
import { Employee } from "./ENTITIES/user"
import ssViewConstruction, { ssGroupInterface } from "./SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView"
import { key } from "./SafariSolaceStyleTools/STYLING/ss-style-keys"

export default function SSPlayground() {
    console.log("SSPLAYGROUND CALLED")
    //slider groups
    const mainView: ssGroupInterface = new ssViewConstruction(key.MainView)
    const navView: ssGroupInterface = new ssViewConstruction(key.NavView)
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

    //dummy for child
    const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}

    return (
        <>
            <>{RenderSliders(sliderGroups)}</>
        </>
    )

}