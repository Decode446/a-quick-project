import React from "react";
import {Text, View, StyleSheet,Image, FlatList, TextInput, Button} from "react-native";


const Assign = () => {
    return(
        <View style = {designing.page}>
            <Image
            source = {require("../../assets/images/bot.png")}
            style = {{alignSelf:"center", height:"40", width:"40", marginTop:"100", marginBottom:"20"}}
            />
            <Text style = {{fontSize:"20", fontWeight:"bold", color:"white", alignSelf:"center"}}>Sign in to finpal</Text>
                <View style = {{paddingTop:"40"}}> 
                <Text style = {{color:"white", margin:"5"}}>Email Address</Text>
                <View style = {{height: "30", backgroundColor:"#221B17", borderRadius:20, flexDirection:"row"}}>
                    <Image
                    source={require("../../assets/images/email.png")}
                    style = {{height:"15", width:"15", margin:"8"}}
                    />
                    <TextInput
                    placeholder="Enter your email address..."
                    style = {{alignItems:"center", marginHorizontal:"5"}}
                    />
                    </View> </View>

                    <View style = {{paddingTop:"10"}}> 
                <Text style = {{color:"white", margin:"5"}}>Password</Text>
                <View style = {{height: "30", backgroundColor:"#221B17", borderRadius:20, flexDirection:"row", justifyContent:"space-between"}}>
                    <View style = {{flexDirection:"row"}}><Image
                    source={require("../../assets/images/lock.png")}
                    style = {{height:"15", width:"15", margin:"8"}}
                    />
                    <TextInput
                    placeholder="Enter your password"
                    style = {{alignItems:"center", marginHorizontal:"5"}}
                    /></View>
                     <Image
                    source={require("../../assets/images/eye2.png")}
                    style = {{height:"15", width:"15", margin:"8", opacity:0.2}}
                    />
                    </View>
                    <View style = {{flexDirection:"row", margin:"8"}}>
                        <Image
                        source={require("../../assets/images/greencheck.png")}
                        style = {{height:"18", width:"18", margin:"5", alignItems:"center"}}
                        />
                    <Text style = {{color :"white", fontSize:"15" , alignSelf:"center"}}>Remember me foe 30 days</Text> </View></View>
                    <View style = {{marginVertical:"30"}}>
                        <View style = {{ backgroundColor:"#83C421", height:"40", borderRadius: 20, justifyContent:"center", margin:"5"}}>
                            <Text style = {{alignSelf:"center", fontSize:"15", fontWeight:"bold", color:"white"}}>Sign In</Text></View>

                       <View style = {{borderWidth:"5", height:"40", borderRadius: 20, justifyContent:"center", borderWidth:1, borderColor:"#83C421", margin:"5"}}>
                        <Text style = {{alignSelf:"center", fontSize:"15", fontWeight:"bold", color:"white"}}>Create New Account</Text></View>    
                    </View>
                    <Text style = {{alignSelf:"center", color:"#83C421", textDecorationLine:"underline"}}>Forgot Password</Text>
        </View>   
    )}
export default Assign;
const designing = StyleSheet.create({
    page:{
        backgroundColor:"black",
        flex :1,
        padding:"20"
    },

    
    
 
})