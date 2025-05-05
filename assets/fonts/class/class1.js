import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Info = () => {
    return(
      <View style = {acmos.page}>

        <Text style={acmos.text}>No parking</Text>

        </View>
    )
}
export default Info;

const acmos = StyleSheet.create({
    page : {
        backgroundColor: "white",
        flex: 1,
        margintop: "50",
        fontWeight: "bold"
    },
    text:{
        color:"red",
        fontSize: 50
    }
     
})
 

