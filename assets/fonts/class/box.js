import React from "react";
import {Text, View, StyleSheet, ScrollView, TextInput, Button, Image} from "react-native";

const Assign = () => {
    return(
     <ScrollView style = {designing.page}>

           <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}> </View>
                <View style = {designing.box}></View>
            </View>

            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>
            
            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>

            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>
            
            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>

            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>
            
            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>

            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>

            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>
  
            <View style = {designing.row}>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
                <View style = {designing.box}></View>
            </View>
     </ScrollView>
    )
}
export default Assign;
const designing = StyleSheet.create({
    page:{
        backgroundColor:"white",
        flex:1,
        padding:"20"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between" 
    },
    box:{
        height:"100",
        width:"100",
        backgroundColor:"green",
        marginVertical:"20"
    }
})