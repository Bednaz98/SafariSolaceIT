import React from "react";
import { View } from "react-native";


/**this is a component for spacing elements with flex box. @attribute space will give a flex number for spacing*/
export default function FlexSpacer(props){
    const space:number = props?.space ?? 1;
    return(<View style={{flex:space}} />)
}