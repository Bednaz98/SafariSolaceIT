import React, { useContext, useState } from "react";
import { View} from "react-native";
import { appContext } from "../classes/app-context";
import LocalHandler from "../classes/local-handler";
import LocalEmployee from "../entities/user";
import { localInterface } from "../intrerfaces/employee-api-interface";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText from "../SafariSolaceStyleTools/basictext";

export default function EmployeeInfo(props: { employee: LocalEmployee }) {
    const employee = props.employee
    
    //local states
    const [pwUpdateState, setpwUpdate] = useState<boolean>(false); //display new password creation
    const [pwState, setpw] = useState<string>(props.employee.serverData.password); //textinput reference
    const [warning, setWarning] = useState<string>(" ")
    
    //local handler
    const localhandler: localInterface = new LocalHandler()
    
    //global states
    const contextStates = useContext(appContext);
    
    /** check that the new password is valid and if it is, update the local handler  */
    function savepwToContext() {       
        //clean up the input
        const pwStateClone = pwState.trim()       
        //if password exists
        if (contextStates.employeeList.map((employee)=> employee.serverData.password).includes(pwStateClone) === true){
            setWarning("That password already exists, try another")
        }        
        //if password is valid
        else if (pwStateClone.length > 7 && pwStateClone.match(/[!-/:-@[-`{-~]/) !== null){           
            //update passed down employee
            props.employee.serverData.password = pwStateClone;
            
            //close pw input UI and reset warning
            localhandler.changePassword(props.employee.serverData, pwStateClone)
            setWarning(" ")
            setpwUpdate(false)
        }
        else setWarning("You must enter a valid password between 7 and 1023783467234 characters, and include at least one symbol")
    }
    function renderPage(){
        return (<>
            <BasicText text={`Name: ${props.employee.serverData.fname} ${props.employee.serverData.lname}`}/>
            <BasicText text={ `Username: ${ props.employee.serverData.username }` }/>
            <BasicText text={ `ID: ${ props.employee.serverData.id }`}/>
            <BasicText text={ `Manager? : ${ props.employee.serverData.isManager ? 'Yes':'No' }`}/>

            {pwUpdateState ? (
                <View>
                    <BasicInputText
                        value={pwState}
                        onChangeText={setpw}

                        placeholder="new password"
                    ></BasicInputText>
                    <BasicButton title="save" onPress={() => savepwToContext()}/>
                </View>
            ) : <BasicButton title="Create New Password" onPress={() => setpwUpdate(true)}/>}
    
            <BasicText text={`${warning}`}/>
        </>)
    }
    function getName(){
        return `${props.employee.serverData.fname} ${props.employee.serverData.lname}`
    }    
    return(<>
        <BasicModal child = {renderPage()} openTitle = {getName()} ></BasicModal>
    </>)
}

