import React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent, View } from "react-native";
import { v4 } from "uuid";
import GetColor, { Color } from "./colorstyle";


export default function BasicButton(props){
    const {onPress, title} = props;
    if(!onPress) {throw new Error('You are missing a function on one of your buttons onPress')}
    if(!title){throw new Error('You are missing a title on one of your buttons onPress')}
    const disabled = props?.disabled ?? false;
    const testID= props?.testID ?? v4();
    const key = props?.key ?? v4();

    return(
    <View style={{padding:3}}>
        <Button onPress={onPress} title={title} color={GetColor(Color.Button)} // << main propers here
        //Extra attributes added
        disabled = {disabled} key={key} testID={testID}
        /*this is the close of the button tag*//> 
    </View>)
}