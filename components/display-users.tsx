import React from "react";
import { ScrollView, View } from "react-native";
import { v4 } from "uuid";
import LocalHandler from "../classes/local-handler";
import LocalEmployee, { Employee } from "../entitites/user";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";




export default function UserDisplay(){
    //getting the local handler to display the users
    const localHandler:LocalHandler = new LocalHandler()

    function Testing(){ console.log("press")}


    function createDisplay():JSX.Element[]{
        //Gets an array of local users
        let localEmployeeArray: LocalEmployee[] =  []//localHandler.getLocalEmployees()
        //temp user for testing
        const fakeLocalEmployee:LocalEmployee={ServerDAta: undefined,status:0}
        for(let i = 0; i < 40; i++){
            localEmployeeArray.push( fakeLocalEmployee)
        }
        // returns a default array if no users are found
        if( !(localEmployeeArray.length >1)) {return [<></>]}
        // maps each user to a component and returns the array
        return localEmployeeArray.map((e,i)=>{return <BasicButton onPress={Testing} title={i} key={v4()}/>})
    }


    return(
        <View style={{maxHeight:300}}>
            <ScrollView>
                {createDisplay()}
            </ScrollView>
        </View>)
}