import React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent, View } from "react-native";
import { v4 } from "uuid";
import GetColor, { borderRadius, Color, margin, paddingRadius, shadowRadius } from "./styleconfig";
import PixelSpacer from "./pixel-spacer";


export default function BasicButton(props){
    const {onPress, title} = props;

    return(

    <View style={{margin:margin(), backgroundColor:GetColor(Color.Button), padding: paddingRadius(), borderRadius:borderRadius(),shadowRadius:shadowRadius()}}>
        <Button onPress={props.onPress} title={ props.title} color={GetColor(Color.Button)} // << main propers here
        //Extra attributes added
        disabled = { props.disabled} key={ props.key} testID={props.testID}
        /*this is the close of the button tag*//> 
    </View>)
}