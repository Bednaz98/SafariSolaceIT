import Slider from "@react-native-community/slider";
import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ssContext } from "./ss-context";

export default function CreateSlider(props:{title: string, minVal: number, maxVal: number, callBack: Function, stepSize?: number, state?: number}){

    const [sliderVal, setSliderVal] = useState<number>(props.state ?? 0)

    return(
        <View><Text>{props.title} {sliderVal}</Text>
        <Slider
            value={props.state ?? 0}
            step={props?.stepSize ?? 1}
            style={{width: 150, height: 20}}
            minimumValue={props.minVal}
            maximumValue={props.maxVal}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            //onSlidingStart={(value)=> {setSliderVal(value) ; console.log('value sent to callbackfunc on start', value)}}
            onSlidingComplete={(value)=> {setSliderVal(value); props.callBack(value)}}
            onValueChange={(value)=> {setSliderVal(value); props.callBack(value)}}
        />
        </View>
    )
}

