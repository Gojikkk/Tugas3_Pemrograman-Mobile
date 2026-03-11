import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { datadiri } from "../../data/data";

const ProfileScreen = ({navigation}) => {

const user = datadiri[0];

return (
<View style={styles.container}>


<View style={styles.profile}>
<View style={styles.avatarWrapper}>

<Image
source={user.image}
style={styles.avatar}
/>

<TouchableOpacity style={styles.editBtn}>
<Feather name="edit-2" size={14} color="white" />
</TouchableOpacity>

</View>

<Text style={styles.name}>{user.nama}</Text>
<Text style={styles.email}>{user.email}</Text>

</View>

{/* ACCOUNT */}
<Text style={styles.sectionTitle}>ACCOUNT</Text>

<View style={styles.card}>
<MenuItem icon="bag" text="My Orders" />
<MenuItem icon="settings" text="Settings" />
<MenuItem icon="card" text="Payment Methods" />
</View>

{/* SUPPORT */}
<Text style={styles.sectionTitle}>SUPPORT & LEGAL</Text>

<View style={styles.card}>
<MenuItem icon="shield-checkmark" text="Privacy Policy" />
<MenuItem icon="help-circle" text="Help Center" />
</View>

{/* LOGOUT */}
<TouchableOpacity style={styles.logout}>
<Text style={styles.logoutText} onPress={() => navigation.navigate('Login')}>Logout</Text>
</TouchableOpacity>

</View>
);
};

const MenuItem = ({ icon, text }) => (
<TouchableOpacity style={styles.menuItem}>
<Ionicons name={icon} size={20} color="#5A6ACF" />
<Text style={styles.menuText}>{text}</Text>
<Ionicons name="chevron-forward" size={20} color="#999" />
</TouchableOpacity>
);

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: "#F5F6FA",
paddingHorizontal: 20
},

profile: {
alignItems: "center",
marginTop: 50,
marginBottom: 20
},

avatarWrapper: {
position: "relative"
},

avatar: {
width: 110,
height: 110,
borderRadius: 60
},

editBtn: {
position: "absolute",
right: 0,
bottom: 0,
backgroundColor: "#5A6ACF",
padding: 8,
borderRadius: 20
},

name: {
fontSize: 20,
fontWeight: "700",
marginTop: 10
},

email: {
color: "#777",
marginTop: 4
},

sectionTitle: {
marginTop: 20,
marginBottom: 10,
fontWeight: "700",
color: "#6B7AFF",
fontSize: 12
},

card: {
backgroundColor: "white",
borderRadius: 12,
paddingVertical: 5
},

menuItem: {
flexDirection: "row",
alignItems: "center",
padding: 14
},

menuText: {
flex: 1,
marginLeft: 12,
fontSize: 15
},

logout: {
marginTop: 30,
borderWidth: 1,
borderColor: "#FF6B6B",
borderRadius: 12,
padding: 14,
alignItems: "center"
},

logoutText: {
color: "#FF4D4D",
fontWeight: "600"
}

});

export default ProfileScreen