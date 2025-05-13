import React from "react";
import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
const App = () => {
  return(
    <View style = {{backgroundColor:"white", flex:1, padding:"15", paddingTop:"100"}}>
        <View style = {{height:"150", width:"150", borderRadius:150, backgroundColor:"#8B0000", alignSelf:"center", justifyContent:"center"}}>
            <View style = {{height:"130", width:"130", borderRadius:100, backgroundColor:"#8B0000", alignSelf:"center", justifyContent:"center", borderWidth:"5", borderColor:"white"}}>
            <Image
        source={{uri: "https://img.icons8.com/?size=100&id=7690&format=png&color=FFFFFF"}}
        style = {{height:"100", width:"100"}}
        /></View>
        </View>
        <View style = {{paddingVertical:"70"}}>
            <Text style = {{fontWeight:"bold", textAlign:"center", marginVertical:"10"}}>Successfully Registered</Text>
            <Text style = {{textAlign:"center"}}>Congratulations Your account registerd in this application</Text>
        </View>
    <View style = {{paddingTop:"40"}}>
    <TouchableOpacity><View style = {{height:"40", backgroundColor:"#8B0000", alignItems:"center", justifyContent:"center", borderRadius:15, marginVertical:"10"}}>
        <Text style = {{color:"white"}}>Sign up</Text>
    </View></TouchableOpacity>
    </View>
    </View>
  )
}
export default App;