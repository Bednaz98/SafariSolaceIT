import {View} from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText from "../SafariSolaceStyleTools/basictext";


export default function AddEmployee(){

    function submit(){
        console.log("Click");
    }

    return(<View>
        <BasicText text="Add Employee"/>
        <BasicText text="First Name"/>
        <BasicInputText value="" onChangeText={()=> {}} placeholder="John"/>
        <BasicText text="Last Name"/>
        <BasicInputText value="" onChangeText={()=> {}} placeholder="Smith"/>
        <BasicText text="Username"/>
        <BasicInputText value="" onChangeText={()=> {}} placeholder="jsmith"/>
        <BasicText text="Password"/>
        <BasicInputText value="" onChangeText={()=> {}} placeholder="********"/>
        <BasicButton onPress={submit} title="Submit"/>
    </View>)
}