import React from "react";
import { ScrollView, View } from "react-native";
import { v4 } from "uuid";
import LocalHandler from "../classes/local-handler";
import LocalEmployee, { Employee } from "../entities/user";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicText from "../SafariSolaceStyleTools/basictext";
import EmployeeInfo from "./employee-info-and-pw-change";




export default function UserDisplay(){
    //getting the local handler to display the users
    const localHandler:LocalHandler = new LocalHandler()

    function Testing(){ console.log("press")}


    function createDisplay():JSX.Element[]{
        //Gets an array of local users
        let localEmployeeArray: LocalEmployee[] = localHandler.getLocalEmployees()

        // returns a default array if no users are found
        if( !(localEmployeeArray.length >1)) {return [<BasicText text={"No Employees found"}/>]}
        // maps each user to a component and returns the array
        return localEmployeeArray.map((e,i)=>{return <EmployeeInfo key={e.serverData.id} employee={e.serverData}/>})
    }


    return(
        <View style={{maxHeight:300}}>
            <ScrollView>
                {createDisplay()}
            </ScrollView>
        </View>)
}
