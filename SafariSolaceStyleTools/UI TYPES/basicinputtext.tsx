import React from "react";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import GetStyle, { key } from "../DEVELOPER STYLING TOOLS/get-styles-by-theme-context";


export default function BasicInputText(props){
    const {value, onChangeText, placeholder} = props;
    if(value === undefined){throw new Error('You did not pass a value into one of your input text, pass the useState read only value here')}
    if(!onChangeText){throw new Error('You did not pass an onChangeText to one of your input text, pass the useState function here ')}
    if(!placeholder){throw new Error('You did not put a placeholder into one of your input text, please add a default value that describes what the field will be used for')}
    const keyboardType = props?.keyboardType ?? 'default';
    const editable = props?.editable ?? true;
    const onChange = props?.onChange ?? ( ({ nativeEvent: { eventCount, target, text} }) => {} ) ;
    const onContentSizeChange = props?.onContentSizeChange ?? ( ({ nativeEvent: { contentSize: { width, height } } }) => {} );

    return(
    <View style={GetStyle(key.MainView) as StyleProp<ViewStyle>}> 
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} 
        keyboardType='default' editable={editable} onChange={onChange} onContentSizeChange={onContentSizeChange}/>
    </View>)
}
