import React, {useState} from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, FlatList} from "react-native";
const App = () => {
  const values1 = [
    {
      icon1: "https://img.icons8.com/?size=100&id=83190&format=png&color=000000",
      name : "Personal Data",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    },{
      icon1: "https://img.icons8.com/?size=100&id=2969&format=png&color=000000",
      name : "Settings",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    },{
      icon1: "https://img.icons8.com/?size=100&id=82839&format=png&color=000000",
      name : "E-Statement",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    },{
      icon1: "https://img.icons8.com/?size=100&id=59805&format=png&color=000000",
      name : "Refferal code",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    }
  ];
    const value2 = [
    {
      icon1: "https://img.icons8.com/?size=100&id=61637&format=png&color=000000",
      name : "FAQs",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    },{
      icon1: "https://img.icons8.com/?size=100&id=0EXueNwGipVV&format=png&color=000000",
      name : "Our Handbook",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    },{
      icon1: "https://img.icons8.com/?size=100&id=59858&format=png&color=000000",
      name : "Community",
      icon2: "https://img.icons8.com/?size=48&id=95864&format=png"
    }
  ]; 
  return(
    <View style = {styles.page}>
     <TouchableOpacity> <View style = {{flexDirection:"row", alignItems:"center"}}>
      <Image
      source = {{uri: "https://img.freepik.com/free-photo/close-up-smiley-man-with-glasses_23-2149009406.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"}}
      style = {{height:"40", width:"40", borderRadius:10}}
      />
      <View style ={{margin:"10" }}>
        <Text style = {{fontSize:"15", fontWeight:"bold"}}>William John Malik</Text>
        <Text style = {{fontSize:"10"}}>Aggressive investors</Text>
      </View>
      </View></TouchableOpacity>
      <View style = {{height:"1", backgroundColor:"#FAF9F6", marginVertical:"20"}}></View>
      <FlatList
      data={values1}
      scrollEnabled = {false}
      renderItem={({item}) => {
        return(
         <TouchableOpacity> <View style = {{flexDirection:"row", justifyContent:"space-between",paddingBottom:"20", alignItems:"center"}}>
            <View style = {{flexDirection:"row"}}>
             <View style = {{height:"35", width:"35", borderRadius:10, backgroundColor:"#FAF9F6", alignItems:"center", justifyContent:"center"}}> <Image
              source={{uri : item.icon1}}
              style = {{height:"20", width:"20"}}
              /></View>
            <Text style = {{alignSelf:"center", marginHorizontal:"10", fontWeight:"bold"}}>{item.name}</Text>
            </View>
            <View>
              <Image
              source={{uri: item.icon2}}
              style = {{height:"15", width:"15", opacity:0.5}}
              />
            </View>
          </View></TouchableOpacity>
        )
      }}
      />
        <View style = {{height:"1", backgroundColor:"#efefef", marginBottom:"20"}}></View>
       <FlatList
      data={value2}
      scrollEnabled = {false}
      renderItem={({item}) => {
        return(
          <TouchableOpacity><View style = {{flexDirection:"row", justifyContent:"space-between",paddingBottom:"20", alignItems:"center"}}>
            <View style = {{flexDirection:"row"}}>
             <View style = {{height:"35", width:"35", borderRadius:10, backgroundColor:"#FAF9F6", alignItems:"center", justifyContent:"center"}}> <Image
              source={{uri : item.icon1}}
              style = {{height:"20", width:"20"}}
              /></View>
            <Text style = {{alignSelf:"center", marginHorizontal:"10", fontWeight:"bold"}}>{item.name}</Text>
            </View>
            <View>
              <Image
              source={{uri: item.icon2}}
              style = {{height:"15", width:"15", opacity:0.5}}
              />
            </View>
          </View></TouchableOpacity>
        )
      }}
      />
    <TouchableOpacity> <View style = {{height:"55", backgroundColor:"#efefef", flexDirection:"row", borderRadius:10, alignItems:"center", justifyContent:"center"}}>
      <Image
      source={{uri : "https://img.icons8.com/?size=100&id=1361&format=png&color=228BE6"}}
      style = {{height:"20", width:"20", marginHorizontal:"10"}}
      />
      <Text style = {{ color:"#339AF0", fontSize:"14"}}>Feel Free to ask.We Ready to help</Text>
     </View></TouchableOpacity>
     <View style = {{flexDirection:"row", justifyContent:"space-between", paddingTop:"10"}}>
      <TouchableOpacity><Image
      source={{uri: "https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000"}}
      style = {{height:"20", width:"20", opacity:0.5}}
      /></TouchableOpacity>
      <TouchableOpacity><Image
      source={{uri: "https://img.icons8.com/?size=100&id=GFIjOY0t75bz&format=png&color=000000"}}
      style = {{height:"20", width:"20", opacity:0.5}}
      /></TouchableOpacity>
      <TouchableOpacity><Image
      source={{uri: "https://img.icons8.com/?size=100&id=63598&format=png&color=000000"}}
      style = {{height:"20", width:"20", opacity:0.5}}
      /></TouchableOpacity>
      <TouchableOpacity><Image
      source={{uri: "https://img.icons8.com/?size=100&id=fJ7hcfUGpKG7&format=png&color=000000"}}
      style = {{height:"20", width:"20", opacity:0.5}}
      /></TouchableOpacity>
     </View>

    </View>
  )
}
export default App;
const styles = StyleSheet.create({
  page:{
    backgroundColor:"white",
    flex:1,
    paddingTop:"50",
    padding:"20"
  }
})