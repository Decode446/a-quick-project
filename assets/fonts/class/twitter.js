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
            name:"Archillect",
            extensiion:"🎵 Sappheiros . 👥",
            profilepic:"https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149372724.jpg?t=st=1746200582~exp=1746204182~hmac=cf27eb62394c0b01153828b41720c3069bbdf6a0a0931b7703fe7c89b7730a00&w=740",
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
            action : "@archillect . 2m",
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
           <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
            <Image
            source={{uri:"https://img.freepik.com/free-photo/cheerful-handsome-black-man-young-guy-with-moustache-stylish-hairstyle-pointing-fingers-left-sale-showing-logo-banner-smiling-happy-white_176420-39693.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"}}
            style ={{height:"30", width:"30", borderRadius:20}}
            />
            <Image
            source={{uri: "https://img.icons8.com/?size=96&id=13963&format=png"}}
            style = {{height:"30", width:"30"}}
            />
            <Image
            source={{uri :"https://img.icons8.com/?size=100&id=104&format=png"}}
            style = {{height:"30", width:"30"}}
            />
           </View>
           <View>
            <View style = {{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:"40"}}>
                <Text style = {{fontSize:"20", fontWeight:"bold", paddingHorizontal:"20"}}>Suggested follows</Text>
                 <Image
                source={{uri :"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"}}
                style = {{height:"20", width:"20"}}
                />
            </View>
            <Text style = {{padding:"20"}}>Because you follow Tesla</Text>
           </View>
            <ScrollView>
                {/* story */}
               
            <View> 
                < View style = {designing.box}>
                <FlatList
                data={firstdata}
                horizontal = {true}
                renderItem = {({item}) => {
                    return(
                        <View><TouchableOpacity>
                        <View>
                                <View style = {{}}>
                            <Image
                            source={{uri: item.picture}}
                            style = {{height:"30", width:"30", justifyContent:"center", borderRadius: 30}}/>
                            </View>
                             </View></TouchableOpacity>
                             </View>
                    )
                } }/></View> </View>
            <View>
                <View>
                <Text style= {{ opacity: 0.5}}>Featuring everyday astronaut, sawyer merritt 📈 ✈️, tesla owners sillicon valley and 7 others</Text>
                </View>
                <View  style={{ alignItems: 'center', marginHorizontal: 8, MarginTop: 20, padding: 10,  backgroundColor: 'black', borderRadius: 50, margin: 5}}>
                    <Text style ={{  fontSize: 20, fontWeight: 'bold', color: 'white', }}> Follow all</Text>
                </View>
                <View style={{ alignItems: 'center', MarginTop: 20, padding: 10,  backgroundColor: 'white',marginHorizontal: 10, borderRadius: 50, borderWidth: 1, margin: 5}}>
                    <Text style = {{  fontSize: 20, fontWeight: 'bold'}}> Not now</Text>
                </View>
            </View>


            {/* Newsfeed */}
            <View style = {{marginTop:"20"}}>
                <FlatList
                data={newsdata}
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
                                style = {{height:"20", width:"20"}} /></TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{marginVertical:"5"}}>
                            <Text>{item.description}<Text style={{color:"blue"}}> @Decodius</Text></Text>
                            </View>
                            <Image
                            source={{uri: item.post}}
                            style = {{height:"400"}} />
                            <View style = {{flexDirection:"row",marginVertical:"10", justifyContent:"space-between"}}>
                              {/* like */}
                               <View style = {{alignItems:"center"}}>
                                 <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.likenum}</Text>
                                 <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                    <Image
                                source={{uri: item.like}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Like</Text>
                                </View>
                                </View>
                               {/* comment */}
                              <View style = {{alignItems:"center"}}>
                                <Text style = {{alignSelf:"center", marginHorizontal:"5"}}>{item.commentnum}</Text>
                                 <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                     <Image
                                source={{uri: item.comment}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Comment</Text>
                                </View>
                                </View>
                                {/* send */}
                              <View style = {{alignItems:"center"}}>  
                                <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sendnum}</Text>
                             <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                 <Image
                                source={{uri: item.whatapp}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Send</Text>
                                </View>
                                </View>
                                {/* share */}
                                 <View style = {{alignItems:"center"}}>
                                    <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sharenum}</Text> 
                                    <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                        <Image
                                source={{uri: item.share}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Share</Text>
                                </View> </View>
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
        height:"40",
        width:"160",
        backgroundColor:"white",
        marginHorizontal:"20"
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
