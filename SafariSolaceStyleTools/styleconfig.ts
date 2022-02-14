import { useContext } from "react";
import { Platform } from "react-native";
import { themeContext } from "./themecontext";

export enum Theme{
    default,
    light,
    dark,
    hacker
}

export enum Color{
    Text,
    textHeader,
    textTitle,
    Button,
    ModalBackground,
    ModalInner,
    InputText,
    primaryColor,
    SecondaryColor,
    TertiaryColor,
}

export default function GetColor(colorType:Color){
    const context = useContext(themeContext);
    let returnColor = '#ffffff'

    switch(context.theme){
        case Theme.light:{
            switch(colorType){
                case Color.Text: { returnColor = '#E6B566' ; break}
                case Color.textHeader: { returnColor = '#E6B566' ; break}
                case Color.textTitle: { returnColor = '#E6B566' ; break}
                case Color.Button: { returnColor = '#E5707E' ; break}
                case Color.InputText: { returnColor ='#E5707E'; break}
                case Color.ModalBackground: { returnColor = '#A3DDCB'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#A3DDCB' ; break}
                case Color.SecondaryColor: { returnColor = '#E8E9A1'; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            };break
        }
        case Theme.dark:{
            switch(colorType){
                case Color.Text: { returnColor = '#2D4263' ; break}
                case Color.textHeader: { returnColor = '#2D4263' ; break}
                case Color.textTitle: { returnColor = '#2D4263' ; break}
                case Color.Button: { returnColor = '#C84B31' ; break}
                case Color.InputText: { returnColor ='#C84B31'; break}
                case Color.ModalBackground: { returnColor = '#191919'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#191919' ; break}
                case Color.SecondaryColor: { returnColor = '#191919' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            };break
        }
        case Theme.hacker:{
            switch(colorType){
                case Color.Text: { returnColor = '#14f074' ; break}
                case Color.textHeader: { returnColor = '#14f074'  ; break}
                case Color.textTitle: { returnColor = '#14f074'  ; break}
                case Color.Button: { returnColor = '#0c833d' ; break}
                case Color.InputText: { returnColor ='#0c833d'; break}
                case Color.ModalBackground: { returnColor = '#0c833d'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor ='#063335' ; break}
                case Color.SecondaryColor: { returnColor = '#063335' ; break}
                case Color.TertiaryColor: { returnColor = '#13993b' ; break}
                default:      { returnColor = '#ffffff' ; break}
            };break
        }
        default:{
            switch(colorType){
                case Color.Text: { returnColor = 'ivory' ; break}
                case Color.textHeader: { returnColor = 'ivory' ; break}
                case Color.textTitle: { returnColor = 'ivory' ; break}
                case Color.Button: { returnColor = 'chocolate' ; break}
                case Color.InputText: { returnColor ='linen'; break}
                case Color.ModalBackground: { returnColor = '#96D65E'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#333' ; break}
                case Color.SecondaryColor: { returnColor = '#5B995A' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            };break
        }
    }
    if(Platform.OS == "android"){ return `${returnColor }`}
    else return returnColor 

}


export function shadowRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 1}
        default:            {return 5}
    }

}

export function borderRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 10}
        case Theme.dark:    {return 10}
        case Theme.hacker:  {return 0}
        default:            {return 10}
    }

}

export function paddingRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 0}
        default:            {return 5}
    }
}

export function margin(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 2}
        default:            {return 5}
    }
}
