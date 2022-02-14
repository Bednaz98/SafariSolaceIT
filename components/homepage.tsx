import React, { useContext, useEffect } from "react";
import { Dimensions, View } from "react-native";
import { appContext } from "../classes/app-context";
import HttpHandler from "../classes/httphandler";
import LocalHandler from "../classes/local-handler";
import HttpInterface, { localInterface } from "../intrerfaces/employee-api-interface";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";
import PixelSpacer from "../SafariSolaceStyleTools/pixel-spacer";
import GetColor, { borderRadius, Color, margin, paddingRadius } from "../SafariSolaceStyleTools/styleconfig";
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

    return(<View style={{flexDirection:"column"}}>
        <BasicModal openTitle={"settings"} child={<View><SettingsPage/></View>}/>
        <BasicText text={"Main page"} textType={TextType.Title}/> 
        <BasicButton onPress={()=>{httpHandler.syncApp(); console.log("Sync pressed")}} title={"Sync"}/>
        <PixelSpacer width={Dimensions.get("screen").width*.2} height={1}/>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"stretch",padding:paddingRadius(), borderRadius:borderRadius(), margin:margin(), backgroundColor:GetColor(Color.SecondaryColor)}}>
            <PixelSpacer height={Dimensions.get("screen").height*.3} width={1}/>
            <View style={{flexDirection:"column"}}>
                <PixelSpacer width={Dimensions.get("screen").width*.2} height={1}/>
                <UserDisplay/>
            </View> 
        </View>
        <AddEmployee />
        
    </View>)
}