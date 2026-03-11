import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { produk } from "../../data/data";

const CartScreen = () => {

const [cart, setCart] = useState([
{ ...produk[0], qty: 1 },
{ ...produk[1], qty: 1 },
{ ...produk[7], qty: 1 },
]);

const increase = (id) => {
setCart(cart.map(item =>
item.id === id ? { ...item, qty: item.qty + 1 } : item
));
};

const decrease = (id) => {
setCart(cart.map(item =>
item.id === id && item.qty > 1
? { ...item, qty: item.qty - 1 }
: item
));
};

const subtotal = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);
const shipping = 15000;
const tax = subtotal * 0.08;
const total = subtotal + shipping + tax;

const renderItem = ({ item }) => (
<View style={styles.card}>

<Image source={item.image} style={styles.image} />

<View style={styles.info}>

<Text style={styles.name}>{item.nama}</Text>
<Text style={styles.price}>Rp {item.harga.toLocaleString()}</Text>

<View style={styles.qtyRow}>

<TouchableOpacity onPress={() => decrease(item.id)} style={styles.qtyBtn}>
<Text>-</Text>
</TouchableOpacity>

<Text style={styles.qty}>{item.qty}</Text>

<TouchableOpacity onPress={() => increase(item.id)} style={styles.qtyBtn}>
<Text>+</Text>
</TouchableOpacity>

</View>

</View>

</View>
);

return (
<View style={styles.container}>

<FlatList
data={cart}
keyExtractor={(item) => item.id.toString()}
renderItem={renderItem}
/>

<View style={styles.summary}>

<Text style={styles.summaryTitle}>Order Summary</Text>

<View style={styles.row}>
<Text>Subtotal</Text>
<Text>Rp {subtotal.toLocaleString()}</Text>
</View>

<View style={styles.row}>
<Text>Shipping</Text>
<Text>Rp {shipping.toLocaleString()}</Text>
</View>

<View style={styles.row}>
<Text>Tax (8%)</Text>
<Text>Rp {Math.round(tax).toLocaleString()}</Text>
</View>

<View style={styles.rowTotal}>
<Text style={styles.totalText}>Total</Text>
<Text style={styles.totalText}>Rp {Math.round(total).toLocaleString()}</Text>
</View>

<TouchableOpacity style={styles.checkout}>
<Text style={styles.checkoutText}>Checkout</Text>
</TouchableOpacity>

</View>

</View>
);
};

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f6fa",
padding:20
},

title:{
fontSize:20,
fontWeight:"bold",
marginBottom:10,
textAlign: 'center',
marginTop: 40,
marginBottom:20
},

card:{
flexDirection:"row",
backgroundColor:"white",
padding:12,
borderRadius:12,
marginBottom:10,
},

image:{
width:70,
height:70,
borderRadius:10
},

info:{
flex:1,
marginLeft:10
},

name:{
fontSize:14,
fontWeight:"600"
},

price:{
marginTop:5,
color:"#4a5bdc",
fontWeight:"bold"
},

qtyRow:{
flexDirection:"row",
alignItems:"center",
marginTop:8
},

qtyBtn:{
width:28,
height:28,
borderRadius:6,
backgroundColor:"#eee",
alignItems:"center",
justifyContent:"center"
},

qty:{
marginHorizontal:10
},

summary:{
marginTop:20,
backgroundColor:"white",
padding:15,
borderRadius:12
},

summaryTitle:{
fontWeight:"bold",
marginBottom:10
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:4
},

rowTotal:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

totalText:{
fontWeight:"bold",
fontSize:16
},

checkout:{
marginTop:15,
backgroundColor:"#4a5bdc",
padding:14,
borderRadius:10,
alignItems:"center"
},

checkoutText:{
color:"white",
fontWeight:"bold"
}

});

export default CartScreen;