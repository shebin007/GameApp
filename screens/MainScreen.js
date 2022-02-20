import React from "react";
import { View,Text,SafeAreaView,TouchableOpacity } from "react-native";

// Import svg
import Banner from '../assets/images/Gaming.svg'


const Main  = ({navigation}) => {
    return(
      <SafeAreaView style={{ flex: 1 ,
                              flexDirection:'column',
                              justifyContent:'center',
                              alignItems:"center" 
                            }}>
            <View>
                <Text style={{
                      fontSize:30,
                      fontWeight:"bold",
                      marginTop:20
                }}>
                  Game On</Text>
            </View> 
            <View style={{
              flex:1,
              alignItems:"center",
              justifyContent:"center"
            }}>
              <Banner width={300} height={300} />      
            </View> 
            
            <TouchableOpacity style={{ 
              backgroundColor:'#AD40AF',
              padding:10,
              borderRadius:10,
              paddingLeft:20,
              paddingRight:20,
              width:"90%",
              alignItems:"center",
              marginBottom:50
              }}
              onPress={() => navigation.navigate('Home')}
            >
                <Text style={{fontSize:18,fontWeight:"500",color:"#fff",fontFamily:"Roboto-Regular"}}>Let's Begin</Text>   
            </TouchableOpacity>
           
      </SafeAreaView >
    )
  }


  export default Main;