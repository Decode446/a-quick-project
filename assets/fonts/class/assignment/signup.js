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
  
    </View>
    <View style = {{paddingTop:"80"}}>
    <TouchableOpacity><View style = {{height:"40", backgroundColor:"#8B0000", alignItems:"center", justifyContent:"center", borderRadius:15, marginVertical:"10"}}>
        <Text style = {{color:"white"}}>Sign up</Text>
    </View></TouchableOpacity>
    </View>
    </View>
  )
}
export default App;