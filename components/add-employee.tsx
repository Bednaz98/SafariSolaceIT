import React, { useContext, useState } from "react";
import {Dimensions, Switch, View} from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";
import BasicModal from "../SafariSolaceStyleTools/basicmodal"
import LocalHandler from "../classes/local-handler";
import { Employee } from "../entities/user";
import { appContext } from "../classes/app-context";
import PixelSpacer from "../SafariSolaceStyleTools/pixel-spacer";


export default function AddEmployee(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isManager, setIsManager] = useState(false);

    const contextStates = useContext(appContext);
    const localHandler = new LocalHandler();

    function submit(){
        if(!fname || !lname || !username || !password){
            alert("All fields must be filled out...")
        } else {
            const newEmployee: Employee = {id: contextStates.employeeList.length, fname: fname, lname: lname, isManager: isManager, username: username, password: password};
            localHandler.createEmployee(newEmployee);
            alert("User added");
            setFname("");
            setLname("");
            setUsername("");
            setPassword("");
            console.log(contextStates.employeeList);
        }
    }

    function addDisplay(){
        return(<>
        <PixelSpacer width={Dimensions.get("screen").width*.2} height={1}/>
        <BasicText text="First Name" textType={TextType.Header}/>
        <BasicInputText value={fname} onChangeText={t => setFname(t)} placeholder="John"/>
        <BasicText text="Last Name" textType={TextType.Header}/>
        <BasicInputText value={lname} onChangeText={t => setLname(t)} placeholder="Smith"/>
        <BasicText text="Username" textType={TextType.Header}/>
        <BasicInputText value={username} onChangeText={t => setUsername(t)} placeholder="jsmith"/>
        <BasicText text="Password" textType={TextType.Header}/>
        <BasicInputText value={password} onChangeText={t => setPassword(t)} placeholder="********"/>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <BasicText text="Is person manager?" textType={TextType.Header}/>
            <Switch onValueChange={() => setIsManager(v => !v)} value={isManager}/>
        </View>
        <BasicButton onPress={submit} title="Submit"/>
        </>)
    }

    return(
    <BasicModal openTitle="Add Employee" child={addDisplay()}/>)
}