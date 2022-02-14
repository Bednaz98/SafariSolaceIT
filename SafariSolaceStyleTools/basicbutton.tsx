import React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent, Platform, View } from "react-native";
import { v4 } from "uuid";
import GetColor, { borderRadius, Color, margin, paddingRadius, shadowRadius } from "./styleconfig";
import PixelSpacer from "./pixel-spacer";
import { platform } from "os";


export default function BasicButton(props){
    const {onPress, title} = props;
    function getViewStyle(){
        if(Platform.OS == "web") { return {margin:margin(), backgroundColor:GetColor(Color.Button), padding: paddingRadius(), borderRadius:borderRadius(),shadowRadius:shadowRadius()}}
        else{return {margin:margin(), padding: paddingRadius(), borderRadius:borderRadius(),shadowRadius:shadowRadius()}}
    }
    

    return(
    <View style={getViewStyle()}>
        <Button onPress={props.onPress} title={ props.title} color={GetColor(Color.Button)} 
        disabled = { props.disabled} key={ props.key} testID={props.testID}/> 
    </View>)
}