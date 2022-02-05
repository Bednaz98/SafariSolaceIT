import React from "react";
import { View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText from "../SafariSolaceStyleTools/basictext";
import AddEmployee from "./add-employee";
import UserDisplay from "./display-users";
import SettingsPage from "./settingsScreen";

export default function HomePage(){


    return(<View>
        <BasicModal openTitle={"settings"} child={<View><SettingsPage/></View>}/>
        <BasicText text={"Main page"}/> 
        <BasicButton onPress={()=>{}} title={"Sync"}/>
        <UserDisplay/> 
        <AddEmployee />
        
    </View>)
}