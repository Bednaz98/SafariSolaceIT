import { View } from "react-native";
import CreateSlider from "./create-slider";
import { uiType } from "./UI-style-assignment";

export interface setterFunctions{
    setRed: Function
    setGreen: Function
    setBlue: Function
    setHeight: Function
    setWidth: Function
    setPadding: Function
    setBorderRadius: Function
}

export default function CreateSliderGroup(uiTypeChosen: uiType, setter: setterFunctions){
    switch (uiTypeChosen){
        case uiType.Text : { return(
            <View style={{ justifyContent:'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                    <CreateSlider title={"red"} minVal={0} maxVal={255} callBack={setter.setRed}/>
                    <CreateSlider title={"green"} minVal={0} maxVal={255} callBack={setter.setGreen}/>
                    <CreateSlider title={"blue"} minVal={0} maxVal={255} callBack={setter.setBlue}/>
                    <CreateSlider title={"height"} minVal={0} maxVal={500} callBack={setter.setHeight}/>                
                    <CreateSlider title={"width"} minVal={0} maxVal={500} callBack={setter.setWidth}/>
                    <CreateSlider title={"padding"} minVal={0} maxVal={1000} callBack={setter.setPadding}/>  
                    <CreateSlider title={"borderRadius"} minVal={0} maxVal={50} callBack={setter.setBorderRadius}/>                  
            </View> )
        }
    }
}