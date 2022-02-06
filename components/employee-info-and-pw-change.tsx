import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, Modal } from "react-native";
import { appContext } from "../classes/app-context";
import LocalEmployee, {Employee} from "../entities/user";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";
import ssTextConstruction, { sliderStyler } from "../SafariSolaceStyleTools/developer-styling-tools.tsx/ssText";


export default function EmployeeInfo(props: { employee: LocalEmployee }) {
    

    //slider styler class
    let styleText: sliderStyler = new ssTextConstruction()
    //let button: styleTweaker = new StyleTweakerConstruction()
    const [toggleSliders, setToggleSliders] = useState<boolean>()

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

        <Button title='Toggle Developer Styling' onPress={()=>{setToggleSliders(!toggleSliders)}}></Button>        
        <View style={{flexDirection: 'row'}}>
            {/* {toggleSliders? button.getSliders() : null} */}
            {toggleSliders? styleText.getSliders() : null}
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BasicText color={styleText.getStyle()} text={`${props.employee.serverData.fname} ${props.employee.serverData.lname}`}/>
            <BasicText color={styleText.getStyle()} text={ `Username: ${ props.employee.serverData.username }` }/>
            <BasicText color={styleText.getStyle()} text={ `ID: ${ props.employee.serverData.id }`}/>
            <BasicText color={styleText.getStyle()} text={ `Manager? : ${ props.employee.serverData.isManager ? 'Yes':'No' }`}/>
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

        <BasicText text={`${warning}`}/>

        {/* <Text style={{backgroundColor: colorState, width: widthState, height: heightState}} >YOYOYO</Text> */}
        <Text key={'derp'} style={styleText.getStyle()} >YOYOYO</Text>
        {/* { borderRadius: styler.getBorderRadius(), textAlign:'center', backgroundColor: styler.getColorState(), width: styler.getWidth(), height: styler.getHeight(), alignSelf: 'center', paddingTop: styler.getHeight()/2} */}
    </>)
}

