import React from 'react'
import { View,Text, Platform } from 'react-native'
import GetColor, { Color } from './styleconfig'


/** the only required prop, @attribute 'text', optionally @Attribute'textType' of type 'TextType' can be included for specifying extra styling options*/
export default function BasicText(props){
    const {text} = props
    if(!text){throw new Error('You did not pass a text value into one of your text')}
    //This will grab from the props the type of text for styling
    // is not found, it will default to general text
    const textType:TextType = props.textType
    let textColor = Color.Text
    let textAlign:string = "auto";
    if(props?.textAlign) {textAlign =props?.textAlign  }
    return (
    <View style={{margin:5}}>
        <Text style={{color:GetColor(textColor), fontSize:getTextFontSize(textType),textAlign:getAlignment(textAlign,textType) }}>{text}</Text>
    </View>)
}



/**The type */
export enum TextType{
    Title,
    Header,
    General
}
function getAlignment(textAlign:string,textType:TextType){
    const tempAlign = textAlign ?? "auto"
    switch(textType){
        case TextType.Title:{return "center"}
        case TextType.Header:{return "center"}
        case TextType.General:{return tempAlign}
        default : {return tempAlign}

    }
}

function getTextFontSize(textType:TextType){
    if(Platform.OS == "web"){
        switch(textType){
            case TextType.Title  :  {return 50}
            case TextType.Header:  {return 30}
            case TextType.General:  {return 20}
            // The default case should be exactly the same as the general text as an edge case
            default              :  {return 20}
            }
    }
    else{
        switch(textType){
            case TextType.Title  :  {return 30}
            case TextType.Header:  {return 20}
            case TextType.General:  {return 10}
            default              :  {return 10}
        }
    }
}