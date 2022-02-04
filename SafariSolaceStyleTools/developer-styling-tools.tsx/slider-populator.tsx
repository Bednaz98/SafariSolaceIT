import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function SliderPopulator(props:{title: string, minVal: number, maxVal: number, callBack: Function}){

    return(
        <View> <Text>{props.title}</Text>
        <Slider
            style={{width: 150, height: 20}}
            minimumValue={props.minVal}
            maximumValue={props.maxVal}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value)=> {props.callBack(value)}}
        />
        </View>
    )
}