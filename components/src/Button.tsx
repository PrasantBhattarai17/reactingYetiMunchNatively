import { View,Text,Pressable,StyleSheet } from "react-native"


const ButtonClick=()=>{
    return(
    <View style={buttonbeauty.layer}>
         <Pressable  onPress={ ()=>alert('Your order is placed!')}>
         <Text style={[buttonbeauty.buttontext,buttonbeauty.elevatedButton]} >Order Now</Text>
        </Pressable>
    </View>
    )
}
export default ButtonClick;

const buttonbeauty=StyleSheet.create({

    layer:{
        backgroundColor:"antiquewhite",
        margin:10,
        width:140,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        borderColor:"black",
        borderWidth:1
    },
    buttontext:{
        color:"blueviolet",
        fontSize:16,
        textAlign:"center",
        fontStyle:"italic",
        fontWeight:"bold",   
     },
     elevatedButton:{
        elevation:20,
        shadowColor:"black",
        shadowOffset:{
            height:1,
            width:1
        },
        shadowOpacity:0.4,
        shadowRadius:3
     }
    
     }
);