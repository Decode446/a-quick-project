import React from "react";
import {Text, View, ImageBackground, TouchableOpacity} from "react-native";
const App = () => {
  return(
    <ImageBackground
    source={require("../../assets/images/opa.png")}
    resizeMode="cover"
    style = {{flex:1, width:"100%", height:"100%", justifyContent:"flex-end"}}>
      <View style = {{height:"100%", width:"100%", backgroundColor:"black", opacity:0.4}}>
      <View style  = {{ height:"170", padding:"15", opacity:1}}>
        <Text style = {{color:"#8B0000", fontSize:"16", fontWeight:"bold",margin:"5"}}>Lorem ipsum</Text>
        <Text style = {{color:"white", fontSize:"14", fontWeight:"bold", margin:"5"}}>Lorem ipsum</Text>
        <Text style = {{color:"white", fontSize:"12", margin:"5"}}>Lorem ipsum dolor sit amet consectetur. Amet est arcu velit dui sed sit dui yltrices a.</Text>
       <View style = {{flexDirection:"row", justifyContent:"space-between", margin:"5"}}>
        <View style = {{flexDirection:"row"}}>
         <View style = {{height:"20", width:"20", borderRadius:20, backgroundColor:"white", margin:'5'}}></View>
         <View style = {{height:"20", width:"20", borderRadius:20, backgroundColor:"#8B0000", margin:"5"}}></View>
         <View style = {{height:"20", width:"20", borderRadius:20, backgroundColor:"white", margin:"5"}}></View>
         </View>
       <TouchableOpacity>  <View style = {{height:"30", width:"80", backgroundColor:"#8B0000", borderRadius:30, justifyContent:"center"}}>
          <Text style = {{textAlign:"center", color:"white"}}>Continue</Text>
         </View></TouchableOpacity>
        </View>
      </View>
      </View>
    </ImageBackground>
  )
}
export default App;