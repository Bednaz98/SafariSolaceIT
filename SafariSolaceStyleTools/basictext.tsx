import React from 'react'
import { View,Text } from 'react-native'
import GetColor, { Color } from './colorstyle'




/** the only required prop, @attribute 'text', optionally @Attribute'textType' of type 'TextType' can be included for specifying extra styling options*/
export default function BasicText(props){
    const {text} = props
    if(!text){throw new Error('You did not pass a text value into one of your text')}
    //This will grab from the props the type of text for styling
    // is not found, it will default to general text
    const textType:TextType = props?.type ?? TextType.General
    return (
    <View style={{padding:3}}>
        <Text style={getTextStyle(textType)}>{text}</Text>
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
    case TextType.Title  :  {return {color:GetColor(Color.Text), fontSize:70}}
    case TextType.Header :  {return {color:GetColor(Color.Text), fontSize:50}}
    // The default case should be exactly the same as the general text as an edge case
    case TextType.General:  {return {color:GetColor(Color.Text), fontSize:20}}
    default              :  {return {color:GetColor(Color.Text), fontSize:20}}
    //=================================================================================
    }
}