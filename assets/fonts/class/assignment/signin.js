import React from "react";
import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
const App = () => {
  return(
    <View style = {{backgroundColor:"white", flex:1, padding:"15", paddingTop:"80"}}>
      <View style = {{flexDirection:"row", alignItems:"center"}}>
      <View style = {{height:"40", width:"40", backgroundColor:"#D4D4D4"}}></View>
            <Text style = {{margin:"10"}}>Register</Text>
    </View>
    <View style = {{paddingTop:"20"}}>
    <View style = {{marginVertical:"10"}}>
        <Text style = {{marginVertical:'10'}}>FullName</Text>
        <View style = {{height:"40", backgroundColor:"#D4D4D4", borderRadius:10}}>
            <TextInput
            placeholder="Enter your Name"
            placeholderTextColor={"black"}
             style = {{padding:"10"}}
            />
        </View>
    </View>

     <View style = {{marginVertical:"10"}}>
        <Text style = {{marginVertical:'10'}}>Email</Text>
        <View style = {{height:"40", backgroundColor:"#D4D4D4", borderRadius:10}}>
            <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"black"}
             style = {{padding:"10"}}
            />
        </View>
    </View>

     <View style = {{marginVertical:"10"}}>
        <Text style = {{marginVertical:'10'}}>Password</Text>
        <View style = {{height:"40", backgroundColor:"#D4D4D4", borderRadius:10}}>
            <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor={"black"}
            style = {{padding:"10"}}
            />
        </View>
    </View>
    <View style = {{flexDirection:"row", justifyContent:"space-between", marginVertical:"20"}}>
    <View style = {{height:"2", width:"150", backgroundColor:"#D4D4D4", alignSelf:"center"}}></View>
    <Text>OR</Text>
    <View style = {{height:"2", width:"150", backgroundColor:"#D4D4D4", alignSelf:"center"}}></View>
    </View>

    <View style = {{alignSelf:"center", flexDirection:"row"}}>
       <View style = {{height:"50", width:"70", backgroundColor:"#D4D4D4", marginHorizontal:"15", justifyContent:"center"}}> <Image
        source={{uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000"}}
        style = {{height:"30", width:"30", alignSelf:"center"}}
        /></View>

        <View style = {{height:"50", width:"70", backgroundColor:"#D4D4D4", marginHorizontal:"15", justifyContent:"center"}}><Image
        source={{uri: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000"}}
        style = {{height:"30", width:"30", alignSelf:"center"}}
        /></View>
    </View>
    </View>
    <View style = {{paddingTop:"40"}}>
    <View style = {{height:"40", backgroundColor:"#8B0000", alignItems:"center", justifyContent:"center", borderRadius:15, marginVertical:"10"}}>
        <Text style = {{color:"white"}}>Sign in</Text>
    </View>
    <Text style = {{alignSelf:"center"}}>Does'nt Have an account? <Text style = {{color:"#8B0000", fontWeight:"bold"}}>Sign up</Text></Text>
    </View>
    </View>
  )
}
export default App;