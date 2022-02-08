import { useState } from "react"
import { Button, View } from "react-native"
import { key } from "../STYLING/get-styles-by-theme-context"
import { sliderStyler } from "./ssText"
import ssViewConstruction from "./ssView"


interface SliderStylerWrapperInterface{
    render: Function
    createSliderGroup: Function
    sliderNav: Function
}

enum uiType{
    View,
}

export default class SliderStylerWrapper implements SliderStylerWrapperInterface{
    private child: JSX.Element
    private slyderStylers: JSX.Element[]
    private toggleSliders: boolean
    private setToggleSliders: Function

    constructor(child: JSX.Element){
        this.child = child

        const [toggleSliders, setToggleSliders] = useState<boolean>(false)
        
        this.toggleSliders = toggleSliders
        this.setToggleSliders = setToggleSliders
    }
   
    render(): JSX.Element{
        return (<>
            <Button title='Toggle Developer Styling' onPress={()=>{this.setToggleSliders(!this.toggleSliders)}}></Button>
            {this.toggleSliders? this.sliderNav() : null}    
            {this.child}
        </>)
    }

    createSliderGroup(componentID: key, type: uiType){
        switch(type){
            case uiType.View : {const slider: sliderStyler = new ssViewConstruction(componentID); this.slyderStylers.push(slider.getSliders())}
        }

    }
    
    sliderNav(): JSX.Element{
        return (<>   
            <View style={{flexDirection: 'row'}}>     
                {this.slyderStylers}          
            </View>
        </>)
    }
}