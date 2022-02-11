import Slider from "@react-native-community/slider";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function CreateSlider(props:{title: string, minVal: number, maxVal: number, callBack: Function, stepSize?: number}){

    const [sliderVal, setSliderVal] = useState<number>(0)
    //useEffect(()=>{props.callBack(sliderVal)}, [sliderVal])
    return(
        <View><Text>{props.title} {sliderVal}</Text>
        <Slider
            value={0}
            step={props?.stepSize ?? 1}
            style={{width: 150, height: 20}}
            minimumValue={props.minVal}
            maximumValue={props.maxVal}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            //onSlidingStart={(value)=> {setSliderVal(value) ; console.log('value sent to callbackfunc on start', value)}}
            onSlidingComplete={(value)=> {setSliderVal(value); console.log('value sent to callbackfunc on complete', value); props.callBack(value)}}
            onValueChange={(value)=> {setSliderVal(value); console.log('value sent to callbackfunc on changew', value); props.callBack(value)}}
        />
        </View>
    )
}

