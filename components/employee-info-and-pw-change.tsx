import React, { useContext, useState } from "react";
import { View, Text, Button, StyleProp, ViewStyle } from "react-native";
import { appContext } from "../classes/app-context";
import LocalEmployee from "../entities/user";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";
import ssTextConstruction, { sliderStyler } from "../SafariSolaceStyleTools/developer-styling-tools.tsx/ssText";
import ssViewConstruction from "../SafariSolaceStyleTools/developer-styling-tools.tsx/ssView";
import GetStyle, { key } from "../SafariSolaceStyleTools/styling/get-styles-by-theme-context";


export default function EmployeeInfo(props: { employee: LocalEmployee }) {

    //local states
    const [pwUpdateState, setpwUpdate] = useState<boolean>(false); //display new password creation
    const [pwState, setpw] = useState<string>(props.employee.serverData.password); //textinput reference
    const [warning, setWarning] = useState<string>(" ")

    //global states
    const contextStates = useContext(appContext);

    //add employee to state list of employees to update
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

            console.log('pw state is now', pwState)

            //close pw input UI and reset warning
            setWarning(" ")
            setpwUpdate(false)
        }
        else setWarning("You must enter a valid password between 7 and 1023783467234 characters, and include at least one symbol")
    }
    

    return (<>

        <View style={GetStyle(key.MainView)}>
            <BasicText style={GetStyle(key.MainView)} text={`${props.employee.serverData.fname} ${props.employee.serverData.lname}`}/>
            <BasicText style={GetStyle(key.MainView)} text={ `Username: ${ props.employee.serverData.username }` }/>
            <BasicText style={GetStyle(key.MainView)} text={ `ID: ${ props.employee.serverData.id }`}/>
            <BasicText style={GetStyle(key.MainView)} text={ `Manager? : ${ props.employee.serverData.isManager ? 'Yes':'No' }`}/>
        </View>
        

        {pwUpdateState ? (
            <View>
                <BasicInputText
                    value='derp'
                    onChangeText={(text) => setpw(text)}
                    placeholder="new password"
                ></BasicInputText>
                <BasicButton title="save" onPress={() => savepwToContext()}/>
            </View>
        ) : <BasicButton color= {'blue'} padding={2} title="Create New Password" onPress={() => setpwUpdate(true)}/>}


        {/* <Text style={{backgroundColor: colorState, width: widthState, height: heightState}} >YOYOYO</Text> */}
        <Text key={'derp'} style={GetStyle(key.MainView)} >YOYOYO</Text>
        {/* { borderRadius: styler.getBorderRadius(), textAlign:'center', backgroundColor: styler.getColorState(), width: styler.getWidth(), height: styler.getHeight(), alignSelf: 'center', paddingTop: styler.getHeight()/2} */}
    </>)
}

