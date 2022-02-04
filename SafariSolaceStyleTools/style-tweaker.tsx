import Slider from "@react-native-community/slider"

export default function StyleTweaker(props:{setRed: Function, setGreen: Function, setBlue: Function}){
 

    return(
    <>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value)=> {props.setRed(value)}}
        />,
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value)=> {props.setGreen(value)}}
        />,
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value)=> {props.setBlue(value)}}
        />
    </>

    )
}