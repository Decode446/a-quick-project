import React from "react";
import {Text, View, StyleSheet, ScrollView, TextInput, Button, Image} from "react-native";
const Assign = () => {
    return(
        <ScrollView style = {designing.page}>
            {/* box 1 */}
            <View style = {designing.first}>
                <View style = {{flexDirection: "row"}}>
                <Image
                source = {require("../../assets/images/opay.jpeg")}
                style = {{height:"40", width: "40"}}/>
                <Text style = {{alignSelf: "center", fontWeight:"600", marginLeft:"5"}}>Hi, FAVOUR</Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                <Image
                source = {require("../../assets/images/headset.png")}
                style = {{height:"25", width: "25", margin:"10"}}/>
                <Image
                source = {require("../../assets/images/scan.png")}
                style = {{height:"25", width: "25", margin:"10"}}/>
               <Image
                source = {require("../../assets/images/bell.png")}
                style = {{height:"25", width: "25", margin:"10"}} />
                </View>
            </View>
            {/* box 2 */}
            <View style = {designing.dashboard}>
                <View style = {{flexDirection: "row", justifyContent:"space-between"}}>
                <View style = {{flexDirection:"row", alignItems:"flex-start", margin:"5"}}>
            <Image
                source = {require("../../assets/images/check.png")}
                style = {{height:"15", width: "15", alignSelf:"center"}}/>
                <Text style= {{fontSize:13, margin:"5", color:"white"}}>Available Balance</Text>
                <Image
                source = {require("../../assets/images/eye.png")}
                style = {{height:"15", width: "15", alignSelf:"center"}} /> </View>
                <View style = {{flexDirection:"row", alignItems:"stretch", margin:"3"}}>
                    <Text style= {{fontSize:12, margin:"5", color:"white" }}>Transaction History {'>'}</Text> </View>
                </View>
                    <View style = {{flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:"10"}}>
                <Text style = {{color:"white", fontWeight:"bold", fontSize:"20", margin:"8", marginHorizontal:"20"}}>#571.91 {'>'}</Text>
                <View style = {{borderRadius:20, height:"35", width:"100", backgroundColor:"white"}}>
                    <Text style = {{alignSelf:"center", margin:"5", color:"#2dcb74"}}>+ Add Money</Text> </View>
                 </View>
            </View>
            {/* box 3 */}
            <View style = {designing.second}>
                 <View style = {designing.viewone}>
                    <View style = {{backgroundColor:"#D7FCF4", borderRadius:20, height:"35", width:"35", margin:"10"}}>   <Image
                    source={require("../../assets/images/arrowup.png")}
                    style = {{height:"30", width:"20", alignSelf:"center", justifyContent:"center"}}
                    /><View style= {{width:"250", height:"30", flexDirection:"column"}}>
                    <Text style = {{ alignSelf:"center", marginVertical:"-25", marginHorizontal:"25", fontSize:"13", marginLeft:"30"}}> Transfer to <Text style = {{fontSize:"12", fontWeight:"500"}}>OLADAYO WASIU.</Text></Text>
                    <Text style = {{padding:"30", marginLeft:"5", fontSize:"10"}}>Apr 18th, 19:27:10</Text>   </View>       
                    </View>
                        <View style = {{justifyContent:"flex-end"}}>
                            <Text style = {{fontWeight:"bold"}}>-#700.00</Text>
                            <View style = {{height:"10", width:"60", backgroundColor:"#D7FCF4", borderRadius:10, marginTop:"5"}}> 
                                <Text style = {{color:"#1DC99B", fontSize:"10", textAlign:"center"}}>Successful</Text>
                            </View>
                        </View>
                 </View>
                 <View style = {designing.viewone}>
                    <View style = {{backgroundColor:"#D7FCF4", borderRadius:20, height:"35", width:"35", margin:"10"}}>   <Image
                    source={require("../../assets/images/arrowup.png")}
                    style = {{height:"30", width:"20", alignSelf:"center", justifyContent:"center"}}
                    /><View style= {{width:"250", height:"30", flexDirection:"column"}}>
                    <Text style = {{ alignSelf:"center", marginVertical:"-25", marginHorizontal:"25", fontSize:"13", marginLeft:"30"}}> Transfer to <Text style = {{fontSize:"12", fontWeight:"500"}}>Honour World-JEW</Text></Text>
                    <Text style = {{padding:"30", marginLeft:"5", fontSize:"10"}}>Apr 18th, 19:27:10</Text>
                </View>       
                    </View>
                        <View style = {{justifyContent:"flex-end"}}>
                            <Text style = {{fontWeight:"bold"}}>-#1000.00</Text>
                            <View style = {{height:"11", width:"60", backgroundColor:"#D7FCF4", borderRadius:10, marginTop:"5", marginLeft:"10"}}> 
                                <Text style = {{color:"#1DC99B", fontSize:"10", textAlign:"center"}}>Successful</Text> </View> </View>
                 </View>
            </View >
            {/* box 4 */}
            <View style = {designing.third}>
            <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                <View style={{width: 50, height: 50, margin:"10", borderRadius:30, backgroundColor:"#D7FCF4"}}>
                    <Image
                    source={require("../../assets/images/chat.png")}
                    style = {{height:"25", width :"25", alignSelf:"center", marginVertical:"13"}}
                    />
                    <Text style = {{fontSize:"12", textAlign:"center", marginVertical:"7"}}>To OPay</Text>
                </View>
                <View style={{width: 50, height: 50, margin:"10", borderRadius:30, backgroundColor:"#D7FCF4"}}>
                <Image
                    source={require("../../assets/images/bank.png")}
                    style = {{height:"25", width :"25", alignSelf:"center", marginVertical:"13"}} />
                     <Text style = {{fontSize:"12", textAlign:"center", marginVertical:"7"}}>To Bank</Text>
                </View>
                <View style={{width: 50, height: 50, margin:"10", borderRadius:30, backgroundColor:"#D7FCF4"}}>
                <Image
                    source={require("../../assets/images/key.png")}
                    style = {{height:"25", width :"25", alignSelf:"center", marginVertical:"13"}}
                    />
                     <Text style = {{fontSize:"11", textAlign:"center", marginVertical:"7"}}>Withdraw</Text> </View> </View>
            </View>
            {/* box 5 */}
            <View style = {designing.forth}>
                <View style = {{flexDirection:"row", justifyContent:"space-between", margin:"20"}}>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}> 
                        <Image
                       source={require("../../assets/images/phone.png")}
                       style = {{height:"35", width:"35", alignSelf:"center", marginVertical:"7"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>Airtime</Text> 
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/phone.png")}
                       style = {{height:"35", width:"35", alignSelf:"center", marginVertical:"7"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>Data</Text>
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/ball.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>Betting</Text>
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4", borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/tv.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>TV</Text>
                    </View>
                </View>
                <View style = {{flexDirection:"row", justifyContent:"space-between", margin:"20"}}>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/wallet.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>Safebox</Text>
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/hand.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}
                       /> <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>Loan</Text>
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4",  borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/speaker.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}
                       /> <Text style = {{fontSize:"11", marginVertical:"5", textAlign:"center"}}>Invitation</Text>
                    </View>
                    <View style = {{height:"50", width:"50", backgroundColor:"#D7FCF4", borderRadius:30}}>
                    <Image
                       source={require("../../assets/images/cap.png")}
                       style = {{height:"25", width:"25", alignSelf:"center", marginVertical:"13"}}/> 
                       <Text style = {{fontSize:"12", marginVertical:"5", textAlign:"center"}}>More</Text> </View></View>
            </View>
            </ScrollView>
    )}
export default Assign;
const designing = StyleSheet.create({
    page : {
        backgroundColor: "#F7F7FF",
        padding: "20",
        flex: 1
    },
    first:{
        flexDirection: "row",
        paddingTop: "40",
        justifyContent:"space-between"
    },
    dashboard:{
        height:"105",
        marginVertical:"20",
        backgroundColor:"#1DC99B",
        borderRadius:10,
        paddingVertical:"2"
    },
    second:{
        backgroundColor:"white",
        height:"130",
        borderRadius:10, 
        padding:"10",
    },
    viewone:{
        height:"50",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    third:{
        backgroundColor:"white",
        height:"100",
        padding:"10",
        marginVertical:"20",
        borderRadius:20 
    },
    forth:{
        height:"200",
        borderRadius:"10",
        backgroundColor:"white",
        borderRadius:10
    }
})