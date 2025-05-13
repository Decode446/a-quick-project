import React from "react";
import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
const App = () => {
  return(
    <View style = {{backgroundColor:"white", flex:1, padding:"15", paddingTop:"80"}}>
      <View style = {{flexDirection:"row", alignItems:"center"}}>
    <TouchableOpacity> <View style = {{height:"40", width:"40", backgroundColor:"#D4D4D4", justifyContent:"center", alignItems:"center"}}>
        <Image
        source={{uri: "https://img.icons8.com/?size=100&id=84994&format=png&color=000000"}}
        style = {{height:"30", width:"20"}}
        />
      </View></TouchableOpacity> 
            <Text style = {{margin:"10", fontWeight:"bold"}}>OTP Code Verification</Text>
    </View>
    <Text style = {{marginVertical:"40", textAlign:"center"}}>Code has been sent to +111**********99</Text>
    <View style = {{flexDirection:"row", justifyContent:"space-between", marginVertical:"10"}}>
        <View style = {{height:"40", width:"60", backgroundColor:"#D4D4D4", justifyContent:"center", alignItems:"center"}}><Text>8</Text></View>
        <View style = {{height:"40", width:"60", backgroundColor:"#D4D4D4", justifyContent:"center", alignItems:"center"}}><Text>5</Text></View>
        <View style = {{height:"40", width:"60", backgroundColor:"#D4D4D4", justifyContent:"center", alignItems:"center"}}><Text>7</Text></View>
        <View style = {{height:"40", width:"60", backgroundColor:"#D4D4D4", justifyContent:"center", alignItems:"center"}}><Text>9</Text></View>
    </View>
    <Text style = {{textAlign:"center", paddingVertical:"40"}}>Resend Code in <Text style = {{color:"#8B0000"}}>55</Text>s</Text>
    <View style = {{paddingTop:"40"}}>
    <TouchableOpacity><View style = {{height:"40", backgroundColor:"#8B0000", alignItems:"center", justifyContent:"center", borderRadius:15, marginVertical:"10"}}>
        <Text style = {{color:"white"}}>Sign up</Text>
    </View></TouchableOpacity>
    </View>
    </View>
  )
}
export default App;