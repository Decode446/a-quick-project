import React from "react";
import {Text, View, StyleSheet, ScrollView, TextInput, Button} from "react-native";
const Assign = () => {
    return(
    <View style = {stylling.land} >
        <View style = {stylling.boe}>
             <Text  style={{fontWeight: "bold", fontSize: 30}}>Welcome</Text>  
         </View>
        <View style = {stylling.xox}>
            <Text>Discover Your Path {'\n'}</Text>
        </View>
        <ScrollView>
            <View style= {stylling.input}>
                <Text>Name </Text>
                <View style = {stylling.form}>
                <View style = {stylling.place}></View>
                    <TextInput
                        placeholder = "Enter your name"
                        placeholderTextColor={"#AAAAAA"}
                    /> 
                </View>
                <Text>Email</Text>
                <View style = {stylling.form}>
                    <View style = {stylling.place}></View>
                    <TextInput
                        placeholder = "Enter your Email"
                        placeholderTextColor={"#AAAAAA"}
                    />
                </View>
                <Text>Password</Text>
                <View style = {stylling.form}>
                <View style = {stylling.place}></View>
                    <TextInput
                        placeholder = "Enter your password"
                        placeholderTextColor={"#AAAAAA"}
                    /> 
                </View>
                <Text>Confirm Password</Text>
                <View style = {stylling.form}>
                <View style = {stylling.place}></View>
                    <TextInput
                        placeholder = "Confirm your password"
                        placeholderTextColor={"#AAAAAA"}
                    /> 
                </View>
                </View>
        </ScrollView>
        <View style = {stylling.confirm}>
            <Button
                title="Sign up"
                color={"#FFFFFF"}
            />
        <View style = {stylling.accept}>
        <Text style = {{fontSize:"10"}}>
        {'\n'}
        By Clicking On The Sign Up You Accept Our <Text style={{color:"blue"}}>Terms Of Service</Text> And <Text style = {{color:"blue"}}>Privacy Policy</Text> </Text>
        </View>
             <View  style = {{ flexDirection:"row",justifyContent:"space-between", marginTop:"15"}}>
            <Text>Already Have An Account?</Text>
            <Text style = {{fontSize:"20",color:"red"}}>Login</Text>
                 </View>
        </View>
    </View>
    )
}
export default Assign;
const stylling = StyleSheet.create({
    land:{
        backgroundColor: "white",
        flex: 1,
    },
    boe:{
        marginTop: "70",
        marginLeft: "110"
    },
    xox:{
       marginLeft: "114", 
       marginTop: "10"
    },
    form:{
        marginLeft:"5",
        borderRadius: 10,
        borderWidth: 1,
        height: "50",
        width: "340",
        marginBottom: "20"
    },
    input:{
        marginLeft: "10"
    },
    place:{
        marginTop:"15",
        padding: "2",
    },
    confirm:{
        marginLeft:"35",
        borderRadius: 10,
        height: "40",
        width: "300",
        marginBottom: "150",
        backgroundColor: "#FF3737"
    },
})
