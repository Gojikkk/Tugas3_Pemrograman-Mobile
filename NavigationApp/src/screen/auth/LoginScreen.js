import React, { useState } from "react";
import { View,StyleSheet, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";



const LoginScreen = ({navigation}) => {

const [focus, setFocus] = useState(false);

    return (
        <View style={{flex:1}}>
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>shopModern</Text>
        </View>
        <View style={styles.container}>

            <View style={styles.keterangan}>
                <Text style={styles.keteranganText}>Welcome Back</Text>
                <Text style={styles.ket}>Sign in to continue your shopping journey</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Email"/>

                <Text style={styles.formText}>Password</Text>
                <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Password"/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <Text style={styles.registerText}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.registerLink}>Create an account</Text>
            </Pressable>
            </View>
        </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    HeaderText:{
        color: '#1F2937',
        fontSize: 20,
        fontWeight: 'bold',
    },
    keterangan: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
    },
    logo: {
        width: 100,
        height: 100,
    },
    keteranganText: {
        color: '#1F2937',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    ket: {
        color: '#a7a9ab',
        fontSize: 14,
        marginTop: 5,
    },
    form: {
        marginTop: 40,
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    formText: {
        color: '#1F2937',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        alignItems: 'Left',
        textAlign: 'left',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaabab',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: `95%`,
        height: 60,
    },
    inputFocused: {
        borderColor: '#4A5CC4',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#4A5CC4',
        width: '80%',
        height: 60,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    register: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: '#ccced0',
        fontSize: 14,
    },
    registerLink: {
        color: '#4A5CC4',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default LoginScreen