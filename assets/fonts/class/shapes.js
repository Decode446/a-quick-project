import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { RollInRight } from "react-native-reanimated";
const clw = () => {
    return(
        <View style={Styles.page}>
            <View style= {Styles.circle}>
                <View style={Styles.box1}>
                    <View
                        style={Styles.Inner} >

                    <View style={Styles.i1}></View>
                    <View style={Styles.i2}></View>
                    <View style={Styles.i3}></View>

                    </View>
                   
                </View>
            </View>
        </View>
    )
}
export default clw;

const Styles= StyleSheet.create({
    page:{
        backgroundColor: "white",
        flex: 1,
        
    },
    circle:{
        marginRight: 5,
        marginLeft: 30,
        marginTop:200,
        borderWidth:5,
        borderRadius:200,
        height: 310,
        width: 310,
        padding:40,
        backgroundColor: "yellow"
    },
    box1:{
        borderWidth: 3,
        height: 220,
        width: 220,
        backgroundColor: "green"
    },

    Inner: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        
    },
    i1:{
        marginLeft: -14,
        marginRight: 10,
        borderWidth:5,
        borderRadius:200,
        height: 60,
        width: 60,
        backgroundColor: "white"
    },
    i2:{
        marginLeft: 10,
        marginRight:10,
        borderWidth:5,
        borderRadius:200,
        height: 60,
        width: 60,
        backgroundColor: "white"
 
    },
    i3:{
        marginLeft:10,
        marginRight: 10,
        borderWidth:5,
        borderRadius:200,
        height: 60,
        width: 60,
        backgroundColor: "white",

    }

})