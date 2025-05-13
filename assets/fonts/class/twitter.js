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
            tag:"@archillect. ",
            profilepic:"https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149372724.jpg?t=st=1746200582~exp=1746204182~hmac=cf27eb62394c0b01153828b41720c3069bbdf6a0a0931b7703fe7c89b7730a00&w=740",
            post:"https://img.freepik.com/free-photo/collage-people-using-reels_23-2149416508.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=sNMi9AaTvTOy&format=png&color=000000",
            view:"https://img.icons8.com/?size=100&id=3404&format=png&color=000000",
            fav:"https://img.icons8.com/?size=100&id=25157&format=png",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            sharenum:"9.1M",
            likenum:"👍❤️22k",
            commentnum:"510",
            retnum:"12",
            viewnum:"12k",
            sendnum:"351",
            action : "@archillect . 2m",
            time:"2m",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 2,
            name:"Senator",
            tag :"@Felani. ",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-psd/real-estate-house-property-facebook-cover-banner-template_120329-1872.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=sNMi9AaTvTOy&format=png&color=000000",
            view:"https://img.icons8.com/?size=100&id=3404&format=png&color=000000",
            fav:"https://img.icons8.com/?size=100&id=25157&format=png",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            sharenum:"2.5M",
            likenum:"👍🏽55k",
            commentnum:"45",
            sendnum:"98",
            retnum:"12",
            viewnum:"12k",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            description:"We are always active💯👷💪...see more",
            action : "updated his cover picture",
            time:"3m",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 3,
            name:"Good_ness",
            tag :"@mayor. ",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=sNMi9AaTvTOy&format=png&color=000000",
            view:"https://img.icons8.com/?size=100&id=3404&format=png&color=000000",
            fav:"https://img.icons8.com/?size=100&id=25157&format=png",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            sharenum:"8.2M",
            likenum:"👍❤️134",
            commentnum:"100",
            retnum:"12",
            viewnum:"12k",
            sendnum:"534",
            description:"If you ever wonder what joy looks like, play this on loop and turn up the volume on your happiness",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            time :"5m",
            option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 4,
            name:"Dorcas",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-vector/woman-engaging-with-social-media_1308-173043.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=sNMi9AaTvTOy&format=png&color=000000",
            view:"https://img.icons8.com/?size=100&id=3404&format=png&color=000000",
            fav:"https://img.icons8.com/?size=100&id=25157&format=png",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            sharenum:"1.5M",
            likenum:"👍🏽39k",
            commentnum:"311",
            retnum:"12",
            viewnum:"12k",
            sendnum:"35",
           retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            description:"Not everything has to make sense — sometimes it just has to make you smile...see more",
            time:"10m",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 5,
            name:"Sabi_gal",
            tag :"@decodius .",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/couple-using-electric-scooter-transportation_23-2149399852.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            sharenum:"3.5M",
            likenum:"❤️13k",
            commentnum:"320",
            retnum:"12",
            viewnum:"12k",
            sendnum:"554",
            share:"https://img.icons8.com/?size=100&id=sNMi9AaTvTOy&format=png&color=000000",
            view:"https://img.icons8.com/?size=100&id=3404&format=png&color=000000",
            fav:"https://img.icons8.com/?size=100&id=25157&format=png",
            retweet:"https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=000000",
            description:" Living my best life 🎬✨,This is what happens when the music hits just right, the mood aligns, and the camera’s rolling at the perfect moment.",
            time:"1h",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        }
    ];
    return(
        <View style = {designing.page}>
           <View style = {{height:"75",backgroundColor:"white", padding:"20", paddingTop:"40", flexDirection:"row", justifyContent:"space-between"}}>
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
            <ScrollView>
                <View style = {designing.box1}> 
            <View style = {{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:"40"}}>
                <Text style = {{fontSize:"25", fontWeight:"bold", paddingHorizontal:"20"}}>Suggested follows</Text>
                 <Image
                source={{uri :"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"}}
                style = {{height:"20", width:"20"}} />
            </View>
            <Text style = {{padding:"20"}}>Because you follow Tesla</Text>
                {/* story */}   
                < View style = {designing.box}>
                <FlatList
                data={firstdata}
                horizontal = {true}
                renderItem = {({item}) => {
                    return(
                        <View><TouchableOpacity>
                            <Image
                            source={{uri: item.picture}}
                            style = {{height:"30", width:"30", justifyContent:"center", borderRadius: 30}}/>
                             </TouchableOpacity> </View>
                    )
                } }/></View> 
            
                <View>
                <Text style= {{opacity: 0.5, marginHorizontal:"20"}}>Featuring everyday astronaut, sawyer merritt 📈 ✈️, tesla owners sillicon valley and 7 others</Text>
                </View>
                <View  style={{ alignItems: 'center', marginHorizontal: 20, MarginTop: 20, backgroundColor: 'black', borderRadius: 50, margin:"6", height:"40", justifyContent:"center"}}>
                    <Text style ={{fontSize: 18, fontWeight: 'bold', color: 'white', }}> Follow all</Text>
                </View>
                <View  style={{ alignItems: 'center', marginHorizontal: 20, MarginTop: 20, backgroundColor: 'white', borderRadius: 50, margin:"6", height:"40", justifyContent:"center", borderWidth:"1", borderColor:"black"}}>
                    <Text style ={{fontSize: 18, fontWeight: 'bold', color: 'black', }}> Not now</Text>
                </View>
            </View>
            {/* <View style = {{height:"1", backgroundColor:"#B4B4B4", marginVertical:"20"}}></View> */}
            {/* Newsfeed */}
            <View>
                <FlatList
                data={newsdata}
                renderItem={({item}) =>{
                    return(
                        <View style = {designing.newsfeed}>
                            {/* <View style = {{flexDirection:"row"}}>
                                <View style = {{height:"300", width:"50", backgroundColor:"red", padding:"14"}}>
                                    <Image
                                    source={{uri: item.profilepic}}
                                    style = {{height:"30", width:"30"}}
                                    />
                                </View>
                                <View style = {{height:"300", width:"300", backgroundColor:"blue"}}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>
                            </View> */}
                            <View>
                                <View style = {{flexDirection:"row", padding:"20"}}>
                                  <View>  <Image
                                    source={{uri: item.profilepic}}
                                    style = {{height:"40", width:"40", borderRadius:30}}
                                    /></View>
                                  <View style = {{height:"100", width:"300"}}>  <Text style = {{marginh:"2", fontSize:"16", fontWeight:"500"}}>{item.name}<Text style = {{opacity:0.5}}>{" "}{item.tag}
                                    <Text style = {{fontSize:"14"}}>{item.time}</Text>
                                    </Text></Text>
                                    <Text style = {{margin:"2"}}>{item.description}</Text>
                                  <Image
                                    source={{uri: item.post}}
                                    style ={{height:"270", width:"300", borderRadius:20}}
                                    />
                                     <View style = {{height:"30", width:"100", flexDirection:"row", marginVertical:"5"}}> 
                                    <Image
                                    source={{uri :item.comment}}
                                    style = {{height:"15", width:"15", marginHorizontal:"5"}}
                                    /><Text style = {{fontSize:"10"}}>{item.commentnum}</Text>
                                     <Image
                                    source={{uri :item.retweet}}
                                    style = {{height:"15", width:"15", marginHorizontal:"15"}}
                                    /><Text style = {{fontSize:"10"}}>{item.retnum}</Text>
                                     <Image
                                    source={{uri :item.like}}
                                    style = {{height:"15", width:"15", marginHorizontal:"15"}}
                                    /><Text style = {{fontSize:"10"}}>{item.likenum}</Text>
                                     <Image
                                    source={{uri :item.view}}
                                    style = {{height:"15", width:"15", marginHorizontal:"15"}}
                                    /><Text style = {{fontSize:"10"}}>{item.viewnum}</Text>
                                     <Image
                                    source={{uri :item.fav}}
                                    style = {{height:"15", width:"15", marginHorizontal:"15"}}
                                    /><Text style = {{fontSize:"10"}}>{item.sendnum}</Text>
                                     <Image
                                    source={{uri :item.share}}
                                    style = {{height:"15", width:"15", marginHorizontal:"15"}}
                                    /></View><Text style = {{fontSize:"10"}}>{item.sharenum}</Text>
                                    </View>
                                </View>
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
        backgroundColor:"white",
        flex: 1,
    },
    box1:{
        backgroundColor:"white",
        height:"350",
        paddingHorizontal:"25"
    },
    box:{
        height:"40",
        width:"160",
        backgroundColor:"white",
        marginHorizontal:"20"
    },
    newsfeed:{
        height:"450",
        backgroundColor:"white",
        borderWidth:"1",
        borderColor:"#B4B4B4"
    },
    text:{
        position:"absolute",
        top:"130",
        fontSize:"12",
        fontWeight:"600",
        color:"black",   
    }
})
