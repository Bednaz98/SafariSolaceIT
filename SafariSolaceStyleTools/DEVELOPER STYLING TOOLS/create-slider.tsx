import Slider from "@react-native-community/slider";
import { useState } from "react";
import { View, Text } from "react-native";

export default function CreateSlider(props:{title: string, minVal: number, maxVal: number, callBack: Function, stepSize?: number}){

    const [sliderVal, setSliderVal] = useState<number>(0)
    return(
        <View><Text>{props.title}{sliderVal}</Text>
        <Slider
            step={props?.stepSize ?? 1}
            style={{width: 150, height: 20}}
            minimumValue={props.minVal}
            maximumValue={props.maxVal}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value)=> {setSliderVal(value) ; props.callBack(value)}}
        />
        </View>
    )
}

