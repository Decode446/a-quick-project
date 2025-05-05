import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
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
    const suggest = [
        {
            id :1,
            picture :"https://img.freepik.com/free-photo/joyful-brunette-woman-has-pleasant-conversation-cheers-with-raised-fist-rejoices-finished-project-poses-near-workplace-home-closes-eyes-from-pleasure-isolated-blue-wall_273609-33994.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            name:"Selena gomez",
            categoty:"popular"
        },{
            id :2,
            picture :"https://img.freepik.com/free-photo/kids-fashion-style-childrens-wear-accessories-concept-serious-confident-african-american-boy-modeling-against-blank-wall-wearing-striped-jumper-pink-shades-his-head_343059-4497.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            name:"Bro Yellow",
            categoty:"popular"
        },{
            id :3,
            picture :"https://img.freepik.com/premium-photo/adorable-african-boy-white-background_58409-11988.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            name:"Bro IPhone",
            categoty:"popular"
        },{
            id :4,
            picture :"https://img.freepik.com/free-photo/portrait-young-woman-smiling-isolated_23-2149158571.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            name:"Iris Seyifunmi",
            categoty:"popular"
        },{
            id :5,
            picture :"https://assets.manutd.com/AssetPicker/images/0/0/20/102/1337031/Article_Header_LY1721327776572_medium.jpg",
            name:"Leny Yoro",
            categoty:"popular"
        }
    ];
    const newsdata = [
        {
            id : 1,
            name:"Thomas",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/woman-showing-instagram-icon_53876-65416.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=87&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=4267&format=png&color=1A1A1A",
            description:"I love using Instagram because it makes my life easier❤️",
            option:"https://img.icons8.com/?size=100&id=98963&format=png&color=1A1A1A",
            time:"10 minutes ago",
            mypic:"https://img.freepik.com/free-photo/pretty-curly-young-woman-writes-notes-summary-holds-notepad-pen-prepares-test-session-exam-enjoys-studying-working_273609-33983.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"
        },{
            id : 2,
            name:"Senator",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/cheerful-man-holding-instagram-icon_53876-41284.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=87&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=4267&format=png&color=1A1A1A",
            description:"The new version of instagram is here💪💪",
            option:"https://img.icons8.com/?size=100&id=98963&format=png&color=1A1A1A",
            time:"An hour ago",
            mypic:"https://img.freepik.com/free-photo/pretty-curly-young-woman-writes-notes-summary-holds-notepad-pen-prepares-test-session-exam-enjoys-studying-working_273609-33983.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"
        },{
            id : 3,
            name:"Good_ness",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/young-people-using-reels_23-2150038619.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=87&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=4267&format=png&color=1A1A1A",
            description:"Instagram gives freedom expression😊",
            option:"https://img.icons8.com/?size=100&id=98963&format=png&color=1A1A1A",
            time :"5 hours ago",
            mypic:"https://img.freepik.com/free-photo/pretty-curly-young-woman-writes-notes-summary-holds-notepad-pen-prepares-test-session-exam-enjoys-studying-working_273609-33983.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"
        },{
            id : 4,
            name:"Dorcas",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459536.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=87&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=4267&format=png&color=1A1A1A",
            description:"Instagram is like a global gallery where everyone gets a frame",
            option:"https://img.icons8.com/?size=100&id=98963&format=png&color=1A1A1A",
            time:"23 hours ago",
            mypic:"https://img.freepik.com/free-photo/pretty-curly-young-woman-writes-notes-summary-holds-notepad-pen-prepares-test-session-exam-enjoys-studying-working_273609-33983.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"
        },{
            id : 5,
            name:"Sabi_gal",
            extensiion:"Suggested for you",
            profilepic:"https://img.freepik.com/free-photo/side-view-man-garage-sale_23-2150577004.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            post:"https://img.freepik.com/free-photo/african-american-woman-taking-selfie-with-her-smartphone_23-2149093258.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740",
            like:"https://img.icons8.com/?size=100&id=87&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=4267&format=png&color=1A1A1A",
            description:"My day is going fine, thanks to instagram",
            option:"https://img.icons8.com/?size=100&id=98963&format=png&color=1A1A1A",
            time:"2 days ago",
            mypic:"https://img.freepik.com/free-photo/pretty-curly-young-woman-writes-notes-summary-holds-notepad-pen-prepares-test-session-exam-enjoys-studying-working_273609-33983.jpg?uid=R197938342&ga=GA1.1.17945884.1745846287&semt=ais_hybrid&w=740"
        }
    ];
    return(
        <View style = {designing.page}>
            <View style = {{flexDirection: "row", justifyContent:"space-between"}}>
                <Text style = {{fontSize:"30",fontWeight:"500", color:"black"}}>Instagram</Text>
                <View style = {{flexDirection:"row"}}>
                    <View>
                    <Image
                    source={require("../../assets/images/heart.png")}
                    style = {{height:"22",width:"22", margin:"15", alignItems:"center"}}
                    /></View><View style = {{height:"10", width :"10", backgroundColor:"red", borderRadius:10, position:"absolute", left:"31", top:"15"}}></View>
                    <View>
                    <Image
                    source={require("../../assets/images/messanger.jpg")}
                    style = {{height:"22", width:"22", margin:"15", alignItems:"center"}} />
                    <View style = {{backgroundColor:"red", height:"20", width:"20", borderRadius:20, position:"absolute", right:"2", top:"7"}}>
                    <Text style = {{alignSelf:"center", justifyContent:"center", color:"white"}}>1</Text>
                    </View> </View>
                </View>
            </View>
            <ScrollView>
                {/* story */}
            <View>
                <FlatList
                data={firstdata}
                horizontal = {true}
                renderItem = {({item}) => {
                    return(
                        <View>
                        <View style = {designing.circle}>
                            <View style  = {{alignItems:"center"}}>
                            <Image
                            source={{uri: item.picture}}
                            style = {{height:"80 ", width:"80", borderRadius:50,alignSelf:"center", marginVertical:"3"}}
                            /></View>
                             </View>
                             <Text style = {{textAlign:"center", marginLeft:"19"}}>{item.username}</Text>
                             </View>
                    )
                } }/> </View>
            <View>
            <View style = {{flexDirection:"row", justifyContent:"space-between", marginVertical:"10"}}>
                                <Text style ={{fontWeight:"bold"}}>Suggested for you</Text>
                                <Text style = {{color:"blue"}}>See all</Text>
                            </View>
                            {/* Suggested */}
                <FlatList
                data={suggest}
                horizontal = {true}
                renderItem={({item}) =>{
                    return(
                        <View>
                            <View style = {designing.box}>  
                            <Image
                            source={{uri:"https://img.icons8.com/?size=100&id=71200&format=png&color=000000"}}
                            style = {{height:"15", width:"15", alignSelf:"flex-end", opacity:0.3}} />
                            <Image
                            source={{uri: item.picture}}
                            style = {{height:"120", width:"120", borderRadius: 60, alignSelf:"center"}}/>
                            <Text style = {{textAlign:"center", fontWeight:"bold", fontSize:"15"}}>{item.name}</Text>
                            <Text style = {{textAlign:"center", fontSize:"11", opacity:0.5, marginVertical:"10"}}>{item.categoty}</Text>
                           <TouchableOpacity> <View style = {designing.button}><Text style = {{textAlign:"center"}}>Follow</Text></View></TouchableOpacity>
                            </View> </View>
                    )
                }} />
            </View>
            {/* Newsfeed */}
            <View>
                <FlatList
                data={newsdata}
                renderItem={({item}) =>{
                    return(
                        <View style = {designing.newsfeed}>
                            <View style = {{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                            <View style = {{flexDirection:"row", alignItems:"center"}}>
                            <Image
                            source={{uri: item.profilepic}}
                            style = {{height:"30", width:"30",borderRadius:20, margin:"10"}} />
                           <View> <Text style = {{fontWeight:"500"}}>{item.name}</Text>
                            <Text style = {{fontSize:"12"}}>{item.extensiion}</Text></View>
                            </View>
                            <View>
                                <Image
                                source={{uri: item.option}}
                                style = {{height:"20", width:"20"}} />
                            </View>
                            </View>
                            <Image
                            source={{uri: item.post}}
                            style = {{height:"400"}} />
                            <View style = {{flexDirection:"row",marginVertical:"10" }}>
                                <Image
                                source={{uri: item.like}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                /><Text style = {{alignSelf:"center", marginHorizontal:"5"}}>96,2k</Text>
                                <Image
                                source={{uri: item.comment}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                /><Text style = {{alignSelf:"center",marginHorizontal:"5"}}>962</Text>
                                <Image
                                source={{uri: item.share}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                /><Text style = {{alignSelf:"center",marginHorizontal:"5"}}>7,290</Text>
                            </View>
                            <Text>{item.description}<Text style={{color:"blue"}}> @Decodius</Text></Text><Text style = {{opacity:0.5}}>View all comment</Text>
                            <View style = {{flexDirection:"row", alignItems:"center", opacity:0.5}}>
                                <Image
                                source={{uri: item.mypic}}
                                style = {{height:"20", width:"20", borderRadius:20}}/>
                                <Text>Add a comment...</Text>
                            </View>
                            <Text style = {{opacity:0.5}}>{item.time}</Text></View>
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
    circle:{
        marginLeft :20,
        borderColor:"red",
        borderWidth:2,
        borderRadius:55,
        height:"90",
        width:"90", 
    },
    box:{
        height:"230",
        width:"160",
        backgroundColor:"white",
        margin:"7",
        padding:"5"
    },
    button:{
        backgroundColor:"#1E90FF",
        height:"30",
        justifyContent:"center",
        borderRadius:10,
    },
    newsfeed:{
        height:"600",
        backgroundColor:"white",
        marginVertical:"10",
    }
})
