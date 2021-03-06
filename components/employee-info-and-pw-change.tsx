import React, { useContext, useState } from "react";
import { Dimensions, View} from "react-native";
import { appContext } from "../classes/app-context";
import LocalHandler from "../classes/local-handler";
import { Employee } from "../entities/user";
import { localInterface } from "../intrerfaces/employee-api-interface";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicModal from "../SafariSolaceStyleTools/basicmodal";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";
import PixelSpacer from "../SafariSolaceStyleTools/pixel-spacer";

/** Displays the employee info and contains password change functionality
 *  @param employee the employee that the admin wishes to view
*/
export default function EmployeeInfo(props: { employee: Employee }) {

    //prop alias
    const employee = props.employee

    //global states
    const contextStates = useContext(appContext);
    
    //local states
    const [pwUpdateState, setpwUpdate] = useState<boolean>(false); //display new password creation
    const [pwState, setpw] = useState<string>(""); //textinput reference
    
    //local handler
    const localhandler: localInterface = new LocalHandler()
    
    /** check that the new password is valid and if it is, update the local handler  */
    function savepwToContext() {       
        
        //clean up the input
        const pwStateClone = pwState.trim()       
        
        //if password already exists
        if (contextStates.employeeList.map((employee)=> employee.serverData.password).includes(pwStateClone) === true){
            alert("That password already exists, try another")
        }        
        
        //if password characters are valid
        else if (pwStateClone.length > 7 && pwStateClone.match(/[!-/:-@[-`{-~]/) !== null){           
            
            //update employee prop
            employee.password = pwStateClone;
            
            //update handler and close pw updater
            localhandler.changePassword(employee, pwStateClone)
            setpwUpdate(false)
        }
        else alert("You must enter a valid password between 7 and 1023783467234 characters, and include at least one symbol")
    }

    //render page
    function renderPage(){
        return (
            <View style={{alignSelf:"stretch"}}>
                <PixelSpacer width={Dimensions.get("screen").width*.2} height={1} textType={TextType.Header}/>
                <BasicText text={`Name: ${employee.fname} ${employee.lname}`} textType={TextType.Header}/>
                <BasicText text={ `Username: ${ employee.username }`  } textType={TextType.Header}/>
                <BasicText text={ `ID: ${ employee.id }`} textType={TextType.Header}/>
                <BasicText text={ `Manager: ${ employee.isManager ? 'Yes':'No' }`} textType={TextType.Header}/>
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
            </View>)
    }

    //get name
    function getName(){
        return `${employee.fname} ${employee.lname}`
    } 
    
    //component main return
    return(
        <BasicModal child = {renderPage()} openTitle = {getName()} ></BasicModal>
    )
}

