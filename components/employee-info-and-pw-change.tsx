import { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { appContext } from "../classes/app-context";
import Employee from "../entities/user";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";
//import StyleTweaker from "../safari-solaces-tyletools/styleTweaker";

export default function EmployeeInfo(props: { employee: Employee }) {
    

    // const [red, setRed] = useState<number>(0)
    // const [green, setGreen] = useState<number>(0)
    // const [blue, setBlue] = useState<number>(0)
    // const [colorState, setColorState] = useState<string>(`rgb(0, 0, 0)`)
    
    // useEffect(()=>{setColorState(`rgb(${red}, ${green}, ${blue})`)}), [red, green, blue]
    // // useEffect(()=>{setColorState(`rgb(${red}, 0, 0)`)}), [red]

    //local states
    const [pwUpdateState, setpwUpdate] = useState<boolean>(false); //display new password creation
    const [pwState, setpw] = useState<string>(props.employee.password); //textinput reference
    const [warning, setWarning] = useState<string>(" ")

    //global states
    const contextStates = useContext(appContext);

    // const styles = <StyleTweaker setRed={setRed} setGreen={setGreen} setBlue={setBlue}/>
    // console.log(colorState)
    // //console.log('redState is', red)

    //add employee to state list of employees to update
    function savepwToContext() {
        
        //clean up the input
        const pwStateClone = pwState.trim()
        
        //if password exists
        if (contextStates.employeeList.map((employee)=> employee.password).includes(pwStateClone) === true){
            setWarning("That password already exists, try another")
        }
        
        //if password is valid
        else if (pwStateClone.length > 7 && pwStateClone.match(/[!-/:-@[-`{-~]/) !== null){
            //update passed down employee
            props.employee.password = pwStateClone;

            //REPLACE with the http function//
            // //update global state 
            // const employeesToUpdateClone = contextStates.employeesToUpdate;
            // employeesToUpdateClone.push(props.employee);
            // contextStates.setEmployeesToUpdate(employeesToUpdateClone);

            // console.log('pw state is now', pwStateClone, 'the employeesToUpdate global state is now', contextStates.employeesToUpdate)

            console.log(props.employee.password)
            //close pw input UI and reset warning
            setWarning(" ")
            setpwUpdate(false)
        }
        else setWarning("You must enter a valid password between 7 and 1023783467234 characters, and include at least one symbol")
    }

    return (<>

        <BasicText text={`${props.employee.fname} ${props.employee.lname}`}/>
        <BasicText text={ `Username: ${ props.employee.username }` }/>
        <BasicText text={ `ID: ${ props.employee.id }`}/>
        <BasicText text={ `Manager? : ${ props.employee.isManager ? 'Yes':'No' }`}/>
        {/* {styles} */}

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
        {/* <Button color={colorState} title='yoyoyo' onPress={()=>{}}></Button> */}
    </>)
    
}

