import React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent, View } from "react-native";

export default function BasicButton(props){

    const {onPress, title, padding, color} = props;

    return(
    <View >
        <Button onPress={onPress} title={title} color={color} // << main propers here
        //Extra attributes added

        disabled = { props.disabled} key={ props.key} testID={props.testID}
        /*this is the close of the button tag*//> 
    </View>)
}

// GetColor(Color.Button)