import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route, navigation }) => {

const { p } = route.params;

return (
<ScrollView style={styles.container}>

<Image source={p.image} style={styles.image} />

<View style={styles.info}>

<Text style={styles.name}>{p.nama}</Text>

<Text style={styles.price}>
Rp {p.harga.toLocaleString()}
</Text>

<Text style={styles.rating}>
⭐ {p.rating} / 5
</Text>

<Text style={styles.desc}>
{p.deskripsi}
</Text>

</View>

<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}>Add To Cart</Text>
</TouchableOpacity>

</ScrollView>
);
};

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

image:{
width:"100%",
height:280,
resizeMode:"cover"
},

info:{
padding:20
},

name:{
fontSize:22,
fontWeight:"bold"
},

price:{
fontSize:18,
color:"#4a5bdc",
marginTop:8
},

rating:{
marginTop:5,
color:"#666"
},

desc:{
marginTop:15,
lineHeight:22,
color:"#444"
},

btn:{
backgroundColor:"#4a5bdc",
margin:20,
padding:16,
borderRadius:10,
alignItems:"center"
},

btnText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});

export default ProductDetailScreen;