import { Children, useState } from "react";
import {Switch} from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";
import BasicModal from "../SafariSolaceStyleTools/basicmodal"


export default function AddEmployee( props){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isManager, setIsManager] = useState(false);

    function submit(){
        console.log("Click");
    }

    function addDisplay(){
        return(<>
        <BasicText text="First Name"/>
        <BasicInputText value="" onChangeText={t => setFname(t)} placeholder="John"/>
        <BasicText text="Last Name"/>
        <BasicInputText value="" onChangeText={t => setLname(t)} placeholder="Smith"/>
        <BasicText text="Username"/>
        <BasicInputText value="" onChangeText={t => setUsername(t)} placeholder="jsmith"/>
        <BasicText text="Password"/>
        <BasicInputText value="" onChangeText={t => setPassword(t)} placeholder="********"/>
        <Switch onValueChange={v => setIsManager(!v)} value={isManager}/>
        <BasicButton onPress={submit} title="Submit"/>
        </>)
    }

    return(
    <BasicModal openTitle="Add Employee" child={addDisplay()}/>)
}