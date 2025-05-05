import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
const App = () => {
    const firstdata = [
    {
        id:1,
        picture :"https://img.freepik.com/free-photo/stylish-guy-red-sweatshirt-points-his-finger-camera-posing-isolated-wall_197531-23222.jpg?t=st=1745848342~exp=1745851942~hmac=891a574a891e414ab54e23366cc060a61cba62384368207180308d9d4af1cd19&w=996",
        username :"Your story"
    },{
        id:2,
        picture :"https://img.freepik.com/free-photo/portrait-man-smiling-posing_23-2148780104.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
        username :"Temiloluwa_002" 
    },{
        id:3,
        picture :"https://img.freepik.com/free-photo/photo-smiling-woman-with-happy-expression-rejoices-something-good-life-dressed-casual-clothes_273609-44666.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
        username :"Olawuzzy55"
    },{
        id:4,
        picture :"https://img.freepik.com/free-photo/portrait-young-african-man-profile_176420-12620.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
        username :"Surrex"
    },{
        id:5,
        picture :"https://img.freepik.com/premium-photo/businessman-looking-camera_13339-34636.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
        username :"iams_hola"
    }
];
    const newsdata = [
        {
            id : 1,
            name:"Thomas",
            extensiion:"🎵 Sappheiros . 👥",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/collage-people-using-reels_23-2149416508.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            sharenum:"9.1M views",
            likenum:"👍❤️22k",
            commentnum:"510 comments",
            sendnum:"351 shares",
            description:"Just vibes, no stress 🎵💃,This one’s for the ones who dance in the kitchen, laugh at their own jokes, and live like the world’s their stage.",
            action : "added a new reel",
            time:"just now .",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 2,
            name:"Senator",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-psd/real-estate-house-property-facebook-cover-banner-template_120329-1872.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            sharenum:"2.5M views",
            likenum:"👍🏽55k",
            commentnum:"45 comments",
            sendnum:"98 shares",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            description:"We are always active💯👷💪...see more",
            action : "updated his cover picture",
            time:"An hour ago.",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 3,
            name:"Good_ness",
            extensiion:". 🌏",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            sharenum:"8.2M views",
            likenum:"👍❤️134",
            commentnum:"100 comments",
            sendnum:"534 shares",
            description:"If you ever wonder what joy looks like, play this on loop and turn up the volume on your happiness",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            time :"5 hours ago.",
            option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 4,
            name:"Dorcas",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-vector/woman-engaging-with-social-media_1308-173043.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            sharenum:"1.5M views",
            likenum:"👍🏽39k",
            commentnum:"311 comments",
            sendnum:"35 shares",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            description:"Not everything has to make sense — sometimes it just has to make you smile...see more",
            time:"23 hours ago.",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 5,
            name:"Sabi_gal",
            extensiion:"🎵 lucid . 👥",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/couple-using-electric-scooter-transportation_23-2149399852.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            sharenum:"3.5M views",
            likenum:"❤️13k",
            commentnum:"320 comments",
            sendnum:"554 shares",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            description:" Living my best life 🎬✨,This is what happens when the music hits just right, the mood aligns, and the camera’s rolling at the perfect moment.",
            action : "added a new reel",
            time:"2 days ago.",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        }
    ];
    return(
        <View style = {designing.page}>
            <View style = {{flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style = {{fontSize:"30",fontWeight:"500", color:"#217CF4"}}>facebook</Text>
                <View style = {{flexDirection:"row"}}>
                    <View>
                  <View style = {{height:"30", width:"30", borderRadius:30, backgroundColor:"#CCCBD0", justifyContent:"center"}}> <TouchableOpacity> <Image
                    source={require("../../assets/images/search.png")}
                    style = {{height:"20",width:"20", alignSelf:"center"}}
                    /></TouchableOpacity></View>
                    </View>
                     <View style = {{height:"30", width:"30", borderRadius:30, backgroundColor:"#CCCBD0", justifyContent:"center", marginLeft:"8"}}>
                      <TouchableOpacity>  <Image
                        source={require("../../assets/images/add.png")}
                        style = {{height:"22",width:"22", alignSelf:"center"}}
                        /></TouchableOpacity></View>
                    <View style = {{height:"30", width:"30", borderRadius:30, backgroundColor:"#CCCBD0", justifyContent:"center", marginLeft:"8"}}>
                   <TouchableOpacity> <Image
                    source={require("../../assets/images/messanger.png")}
                    style = {{height:"22", width:"22", alignSelf:"center", borderRadius:20}} /></TouchableOpacity>
                  </View>
                </View>
            </View>
            <View style = {{height:"35", marginLeft:"10", flexDirection:"row", justifyContent:"space-between", borderRadius:20, marginVertical:"20"}}>
                   <View style = {{flexDirection:"row", alignSelf:"center"}}><TouchableOpacity> <Image
                    source={{uri :"https://img.freepik.com/premium-photo/medium-shot-woman-having-fun-party_23-2151108195.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&w=740"}}
                    style = {{height:"30", width:"30", borderRadius:20}}
                    /></TouchableOpacity>
                    <TextInput
                    placeholder="What's on your mind?"
                    placeholderTextColor = "black"
                    style = {{marginHorizontal:"5", color:"black", opacity:0.5}}
                    /></View>
                   <TouchableOpacity> <Image
                    source={require("../../assets/images/pic.png")}
                    style = {{height:"25", width:"25", alignSelf:"center"}}
                    /></TouchableOpacity>
                </View>
            <ScrollView>
            <View style = {{flexDirection:"row", alignSelf:"center"}}>
                                <View style = {{height:"30", width:"160", backgroundColor:"white", marginHorizontal:"5", borderRadius:20, justifyContent:"flex-end"}}>
                                 <TouchableOpacity> <Text style = {{alignSelf:"center", color:"#217CF4", marginBottom:"3", fontWeight:"500"}}>Story</Text></TouchableOpacity>
                                    <View style = {{backgroundColor:"#217CF4", height:"2", width:"160", alignSelf:"center"}}></View></View>
                                <View  style = {{height:"30", width:"160", backgroundColor:"white", marginHorizontal:"5", borderRadius:20, justifyContent:"flex-end"}}>
                              <TouchableOpacity>  <Text style = {{alignSelf:"center", color:"#217CF4", marginBottom:"3", fontWeight:"500"}}>Reels</Text></TouchableOpacity>
                                <View style = {{backgroundColor:"white", height:"2", width:"160", alignSelf:"center"}}></View>
                                </View>
                            </View>
                {/* story */}
            <View>
                <FlatList
                data={firstdata}
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
                renderItem = {({item}) => {
                    return(
                        <View><TouchableOpacity>
                        <View style = {designing.box}>
                                <View style = {{}}>
                            <Image
                            source={{uri: item.picture}}
                            style = {{height:"120", width:"100", justifyContent:"center"}}/>
                            <Image
                            source={{uri : item.picture}}
                            style = {{height:"20", width:"20", borderRadius:20, position:"absolute", margin:"9", borderEndWidth:"4", alignItems:"center", position:"absolute", borderColor:"blue"}}
                            />
                            <View style = {{height:"150", width:"100", backgroundColor:"#bbbbbb"}}>
                                <Text style = {{fontSize:"14", color:"black", fontWeight:"400", textAlign:"center"}}>{item.username}</Text></View>
                            </View>
                             </View></TouchableOpacity>
                             </View>
                    )
                } }/> </View>
            <View>
            </View>
            {/* Newsfeed */}
            <View style = {{marginTop:"20"}}>
                <FlatList
                data={newsdata}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>{
                    return(
                        <View style = {designing.newsfeed}>
                            <View style = {{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                            <View style = {{flexDirection:"row", alignItems:"center"}}>
                           <TouchableOpacity> <Image
                            source={{uri: item.profilepic}}
                            style = {{height:"30", width:"30",borderRadius:20, margin:"10"}} /></TouchableOpacity>
                           <View> <Text style = {{fontWeight:"500"}}>{item.name} <Text style = {{fontSize:"12", opacity:0.5}}>{item.action}</Text></Text>
                            <Text style = {{fontSize:"12", opacity:"0.5"}}><Text style = {{opacity:0.5}}>{item.time}</Text>{item.extensiion}</Text></View>
                            </View>
                            <View>
                              <TouchableOpacity>  <Image
                                source={{uri: item.option}}
                                style = {{height:"30", width:"30"}} /></TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{marginVertical:"5"}}>
                           <Text>{item.description} <TouchableOpacity><Text style={{color:"blue"}}> @Decodius</Text></TouchableOpacity></Text>
                            </View>
                          <TouchableOpacity>  <Image
                            source={{uri: item.post}}
                            style = {{height:"400"}} /></TouchableOpacity>
                            <View style = {{flexDirection:"row",marginVertical:"10", justifyContent:"space-between"}}>
                              {/* like */}
                               <View style = {{alignItems:"center"}}>
                                 <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.likenum}</Text>
                                 <TouchableOpacity><View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                    <Image
                                source={{uri: item.like}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Like</Text>
                                </View></TouchableOpacity>
                                </View>
                               {/* comment */}
                              <View style = {{alignItems:"center"}}>
                                <Text style = {{alignSelf:"center", marginHorizontal:"5"}}>{item.commentnum}</Text>
                                 <TouchableOpacity><View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                     <Image
                                source={{uri: item.comment}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Comment</Text>
                                </View></TouchableOpacity>
                                </View>
                                {/* send */}
                              <View style = {{alignItems:"center"}}>  
                                <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sendnum}</Text>
                             <TouchableOpacity><View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                <Image
                                source={{uri: item.whatapp}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Send</Text>
                                </View></TouchableOpacity> 
                                </View>
                                {/* share */}
                                 <View style = {{alignItems:"center"}}>
                                    <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sharenum}</Text> 
                                    <TouchableOpacity><View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                        <Image
                                source={{uri: item.share}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Share</Text>
                                </View> </TouchableOpacity></View>
                            </View>
                           </View>
                    )
                }}  /></View>
            </ScrollView>
        </View>
    )
}
export default App;
const designing =  StyleSheet.create({
    page:{
       backgroundColor:"#FFFAFA",
        flex: 1,
        paddingTop:"40",
        paddingHorizontal:"15"
    },
    box:{
        height:"150",
        width:"100",
        backgroundColor:"white",
        margin:"7",
        padding:"5"
    },
    newsfeed:{
        height:"570",
        backgroundColor:"white",
        marginVertical:"10",
    },
    text:{
        position:"absolute",
        top:"130",
        fontSize:"12",
        fontWeight:"600",
        color:"black",   
    }
})
