import React from "react";
import { View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText from "../SafariSolaceStyleTools/basictext";
import AddEmployee from "./add-employee";
import UserDisplay from "./display-users";



export default function HomePage(){


    return(<View>
        <BasicModal openTitle={"settings"} child={<></>}/>
        <BasicText text={"Main page"}/> 
        <BasicButton onPress={()=>{}} title={"Sync"}/>
        <UserDisplay/> 
        <AddEmployee />
        
    </View>)
}