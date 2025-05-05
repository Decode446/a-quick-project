import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
const App = () => {
    const Chartdata = [
        {
            id:1,
            name :"BigSam",
            message:"Typing...",
            avatar: "https://img.freepik.com/free-photo/stylish-guy-red-sweatshirt-points-his-finger-camera-posing-isolated-wall_197531-23222.jpg?t=st=1745848342~exp=1745851942~hmac=891a574a891e414ab54e23366cc060a61cba62384368207180308d9d4af1cd19&w=996",
            date:"10:30"
        },{
            id:2,
            name :"Ray",
            message:"✔✔What is your name",
            avatar: "https://img.freepik.com/premium-photo/black-afro-man-smiling-cheerfully-feeling-happy-showing-concept-sunglasses-headphones-concept_1194-385387.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740", 
            date:"9:30"
        },{
            id:3,
            name :"Bro yellow photos📷",
            message:"Richie: Oya send aza",
            avatar: "https://img.freepik.com/free-photo/beautiful-girl-hat-smiling-taking-pictures-sitting-stairs_176420-6892.jpg?t=st=1745848760~exp=1745852360~hmac=aaba2cfc1672ac3c634154237ac4b9201e99b9e518169d8ad6040efc8118b02a&w=740",
            date:"9:00"
        },{
            id:4,
            name :"Bro",
            message:"🖼️You look good",
            avatar:"https://img.freepik.com/free-vector/hand-drawn-bro-lettering-design_23-2149649192.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date :"9:00"
        },{
            id:5,
            name :"Twin",
            message:"Taiwo:We are doing fine",
            avatar: "https://img.freepik.com/premium-photo/two-men-with-white-shirts-that-say-they-are-both-wearing-white-shirts_1023984-48038.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date:"8:44"
        },{
            id:6,
            name :"Tutors",
            message:"CEO: You are to teach them flatlist today",
            avatar: "https://img.freepik.com/free-photo/beautiful-stylish-girl-tries-help-younger-brother-who-has-problems-with-math_273609-44823.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date:"8:12"
        },{
            id:7,
            name :"Rookie",
            message:"Sofia: GIF👀",
            avatar: "https://img.freepik.com/premium-psd/emoji-3d-sunglasses-smile-showing-upper-teeth_220664-95.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740" ,
            date:"6:12"
        },{
            id:8,
            name :"Pastor",
            message:"Mr AY, you must be around today",
            avatar: "https://img.freepik.com/free-photo/young-male-priest-holding-book_23-2149298314.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date:"5:33"
        },{
            id:9,
            name :"Baby",
            message:"Enjoy your day",
            avatar: "https://img.freepik.com/free-photo/cute-black-baby-portrait-home_23-2149618887.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date:"4:00"
        },{
            id:10,
            name :"Shola Vibes",
            message:"boi🥶: Let meet at the hall tomorrow",
            avatar:"https://img.freepik.com/free-vector/music-emoji-illustration_23-2151345557.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            date:"Yesterday"
        }
    ];
    return(
        <View style = {designing.page}>
            <View style = {{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                <View style = {{}}>
            <Text style = {{fontSize:"30",fontWeight:"500", color:"green"}}>Whatsapp</Text></View>
           <View style = {{flexDirection:"row", alignSelf:"center"}}> <Image
            source={require("../../assets/images/camera.png")}
            style = {{height:"23", width:"25", marginHorizontal:"10"}}
            />
             <Image
            source={require("../../assets/images/search.png")}
            style = {{height:"20", width:"20", marginHorizontal:"15"}}
            />
             <Image
            source={require("../../assets/images/dot.png")}
            style = {{height:"21", width:"21"}}
            />
            </View></View>
                <View style = {{flexDirection:"row", alignSelf:"flex-start", paddingVertical:"30"}}>
                  <View style = {{height:"25", width:"50", backgroundColor:"#D0FECF", borderRadius:20}}><Text style = {{alignSelf:"center", paddingVertical:"4"}}>All</Text></View>
                  <View style = {{height:"25", width:"62", backgroundColor:"#EAEBED", borderRadius:20, marginHorizontal:"20"}}><Text style = {{alignSelf:"center", paddingVertical:"4"}}>Unread</Text></View>
                  <View style = {{height:"25", width:"62", backgroundColor:"#EAEBED", borderRadius:20}}><Text style = {{alignSelf:"center", paddingVertical:"4"}}>Group</Text></View>
                </View>
            <View style = {{marginTop:"0"}}>
                <FlatList
                data={Chartdata}
                renderItem={({item}) =>{
                    return(
                       <View style = {designing.container}>
                        <Image
                        source={{uri: item.avatar}}
                        style = {{height:"60", width:"60", borderRadius: 60}}
                        />
                            <View style = {{marginLeft:15, flex:1}}>
                             <View style = {{flexDirection:"row", alignItems:"center"}}>
                            <Text style = {{flex:1, fontSize:"15", fontWeight:"600"}}>{item.name}</Text>
                            <Text>{item.date}</Text>
                            </View>
                            <View>
                            <Text style = {{fontSize:"13"}}>{item.message}</Text>
                            </View>
                            </View>
                        </View>
                    )
                }
                }
                />
            </View>
        </View>
    )
}
export default App;
const designing =  StyleSheet.create({
    page:{
       backgroundColor:"white",
        flex: 1,
        paddingTop:55,
        paddingHorizontal:"15"
    },
    container:{
        marginBottom:"20",
        flexDirection:"row",
        alignItems:"center" 
    }
})
