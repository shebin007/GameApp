import React from "react";
import { View,Image } from "react-native";


const Slider = ({data}) => {
    return(
        <View>
            <Image source={data.image}  style={{height:150,width:300,borderRadius:10}}/>
        </View>
    )
}

export default Slider;