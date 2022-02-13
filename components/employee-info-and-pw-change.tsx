import React, { useContext, useEffect, useState } from "react";
import { View, Text} from "react-native";
import { appContext } from "../classes/app-context";
import LocalHandler from "../classes/local-handler";
import { Employee } from "../entities/user";
import { localInterface } from "../interfaces/employee-api-interface";
import GetStyle from "../SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/get-style";
import { ssContext, ssContextInterface } from "../SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/ss-context";
import { key } from "../SafariSolaceStyleTools/STYLING/ss-style-keys";
import BasicButton from "../SafariSolaceStyleTools/UI TYPES/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/UI TYPES/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/UI TYPES/basictext";

/** Displays the employee info and contains password change functionality
 *  @param employee the employee that the admin wishes to view
*/
export default function EmployeeInfo(props: { employee: Employee }) {

    //prop alias
    const employee = props.employee //not a new address

    //global states
    const contextStates = useContext(appContext);
    //const sscontext: ssContextInterface = useContext(ssContext);
    //const [rerender, setrerender] = useState(0)
    //useEffect(()=>{setrerender(rerender + 1)},[sscontext])
    //useEffect(()=> {console.log('the child context changed and is:', sscontext.mainView)}, [sscontext.mainView])
    
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
        //console.log("CHILD (RE)RENDERED")
        return (<View style={GetStyle(key.MainView)}>
            <BasicText text={`Name: ${employee.fname} ${employee.lname}`}/>
            <BasicText text={ `Username: ${ employee.username }` }/>
            <BasicText text={ `ID: ${ employee.id }`}/>
            <BasicText text={ `Manager: ${ employee.isManager ? 'Yes':'No' }`}/>
            <Text style={GetStyle(key.NavView)}>***************************TESTING****************************</Text>

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
        renderPage()
    )
}

