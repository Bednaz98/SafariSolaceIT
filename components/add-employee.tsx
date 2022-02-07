import { useContext, useState } from "react";
import {Switch} from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";
import BasicModal from "../SafariSolaceStyleTools/basicmodal"
import LocalHandler from "../classes/local-handler";
import { Employee } from "../entities/user";
import { appContext } from "../classes/app-context";


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
        <BasicText text="First Name"/>
        <BasicInputText value={fname} onChangeText={t => setFname(t)} placeholder="John"/>
        <BasicText text="Last Name"/>
        <BasicInputText value={lname} onChangeText={t => setLname(t)} placeholder="Smith"/>
        <BasicText text="Username"/>
        <BasicInputText value={username} onChangeText={t => setUsername(t)} placeholder="jsmith"/>
        <BasicText text="Password"/>
        <BasicInputText value={password} onChangeText={t => setPassword(t)} placeholder="********"/>
        <BasicText text="Is person manager?"/>
        <Switch onValueChange={() => setIsManager(v => !v)} value={isManager}/>
        <BasicButton onPress={submit} title="Submit"/>
        </>)
    }

    return(
    <BasicModal openTitle="Add Employee" child={addDisplay()}/>)
}