import React from 'react'
import { View,Text } from 'react-native'
import GetColor, { Color } from './styleconfig'


/** the only required prop, @attribute 'text', optionally @Attribute'textType' of type 'TextType' can be included for specifying extra styling options*/
export default function BasicText(props){
    const {text} = props
    if(!text){throw new Error('You did not pass a text value into one of your text')}
    //This will grab from the props the type of text for styling
    // is not found, it will default to general text
    const textType:TextType = props?.type ?? TextType.General
    let textColor = Color.Text
    switch(textType){
        case TextType.General:{textColor =Color.Text ;   ;break }
        case TextType.Header:{textColor =Color.textHeader;  ; break}
        case TextType.Title:{textColor =Color.textTitle ; ;break}
    }
    return (
    <View style={{margin:5}}>
        <Text style={[{color:GetColor(textColor)}, getTextStyle(textType)]}>{text}</Text>
    </View>)
}



/**The type */
export enum TextType{
    Title,
    Header,
    General
}
function getTextStyle(textType:TextType){
    switch(textType){
    case TextType.Title  :  {return { fontSize:70}}
    case TextType.Header :  {return {fontSize:40}}
    case TextType.Header :  {return {fontSize:20}}
    // The default case should be exactly the same as the general text as an edge case
    default              :  {return {fontSize:20}}
    //=================================================================================
    }
}