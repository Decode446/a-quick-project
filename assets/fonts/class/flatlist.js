import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const Assign = () => {
    const student = ["Ade", "Bayo", "Anu", "Oluwa", "po", "Bro", "Yellow", "Mr", "Iphone", "Victor A", "Victor B", "Akams","New", "Girl", "Sam"]
    return(
        <View style = {designing.page}>
            <Text style = {{fontSize:"30", color:"black", fontWeight:"bold"}} >FlexBox</Text>

            <FlatList
            data = {student}
        //    Note: to change it to horizontal sroll use "horizontal = {true}"  and delete columnWrapperStyle and numColumns
            numColumns={3}
            columnWrapperStyle = {{justifyContent:"space-between"}}
            renderItem={({item}) => {
                return(
                <View style = {designing.box}>
                    <Text style = {{fontSize:20, fontWeight:"bold"}}>{item}</Text>

                </View>
                )
            }
        }
            />
        </View>      
    )}
export default Assign;
const designing = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:"white",
        paddingTop:"55",
        paddingHorizontal:"20"
    },
    box:{
        height:"90",
        width:"90",
        backgroundColor:"pink",
        alignItems:"center",
        justifyContent:"center",
        margin  :"10"
    }
 
})