import React from "react";
import { View,Text,ImageBackground,SafeAreaView,TextInput, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

import Search from '../assets/images/search.svg';
import Slider from "../components/Slider";
import { SliderData } from "../Model/data";
import { windowWidth } from "../utils/Width";

const Home = () => {
    const renderBanner = ({item,index}) => {
        return <Slider data={item} />
    }
    return (
      <SafeAreaView >
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingHorizontal:20,
            alignItems:"center",
            marginTop:10
        }}>
            <Text style={{
                fontFamily:"Roboto-Medium",
                fontSize:16
            }}>Hello John Doe</Text>
            <ImageBackground source={require("../assets/images/profile.jpg")} style={{
                width:35,
                height:35,
                borderRadius:35
            }}
            imageStyle={{ borderRadius: 35}}
            />
        </View>
        <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:10,
            borderWidth:1,
            borderRadius:8,
            paddingVertical:10,
            paddingHorizontal:20,
            marginHorizontal:20,
            borderColor:"grey"
        }}>
            <Search width={15} height={15} style={{
                marginRight:10
            }} />
            <TextInput placeholder="Search" />
        </View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:15,
            paddingHorizontal:20,
            marginBottom:20
        }}>
            <Text style={{
                fontFamily:"Roboto-Medium",
                fontSize:16,
                fontWeight:"600"
            }}>Upcoming Games</Text>
            <TouchableOpacity>
                <Text style={{
                    color:"skyblue",
                    fontWeight:"600",
                    fontFamily:"Roboto-Medium",
                    fontSize:16
                }}>See all</Text>
            </TouchableOpacity>
        </View>
        <View style={{
             paddingHorizontal:20
        }}>
        <Carousel
              ref={(c) => { this._carousel = c; }}
              data={SliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40}
              itemWidth={300}
              loop={true}
            />
        </View>
        
        
      </SafeAreaView>
    )
  }


export default Home;