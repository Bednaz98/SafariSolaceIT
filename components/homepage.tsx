import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { appContext } from "../classes/app-context";
import HttpHandler from "../classes/httphandler";
import LocalHandler from "../classes/local-handler";
import HttpInterface, { localInterface } from "../intrerfaces/employee-api-interface";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText from "../SafariSolaceStyleTools/basictext";
import AddEmployee from "./add-employee";
import UserDisplay from "./display-users";
import SettingsPage from "./settingsScreen";

export default function HomePage(){

    const httpHandler: HttpInterface = new HttpHandler(false);
    const localHandler: localInterface = new LocalHandler();
    const context = useContext(appContext)

    useEffect(()=>{
        updateDisplay();
    },[])

    async function updateDisplay(){
        const response = await httpHandler.getServerAllEmployees();
        localHandler.syncEmployees(response)
    }

    return(<View>
        <BasicModal openTitle={"settings"} child={<View><SettingsPage/></View>}/>
        <BasicText text={"Main page"}/> 
        <BasicButton onPress={()=>{httpHandler.syncApp(); console.log("Sync pressed")}} title={"Sync"}/>
        <UserDisplay/> 
        <AddEmployee />
        
    </View>)
}