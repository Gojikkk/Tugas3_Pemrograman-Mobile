import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity,TextInput } from 'react-native';



   


const RegisterScreen = ({navigation}) => {
const [focus, setFocus] = useState(false);
const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleregister = () => {
        if (!Name || !email || !password || !confirmPassword) {
        alert ('Please fill in all fields');
        }
        if (password !== confirmPassword) {
        alert ('Passwords do not match');
        }
        }
    

    return (
        <View style={styles.container}>
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>Create Account</Text>
        </View> 
        
        <View style={styles.keterangan}>
                        <Text style={styles.keteranganText}>Join ShopModern</Text>
                        <Text style={styles.ket}>Fill in your details to get started with {"\n"}your shopping journey</Text>
        </View>

        <View style={styles.form}>
            <Text style={styles.formText}>Name</Text>
            <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Name" value={Name} onChangeText={setName}/>

            <Text style={styles.formText}>Email</Text>
            <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Email" value={email} onChangeText={setEmail}/>

            <Text style={styles.formText}>Password</Text>
            <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Password" value={password} onChangeText={setPassword}/>

            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput style={[styles.input, focus && styles.inputFocused]} placeholder="Enter your Password" value={confirmPassword} onChangeText={setConfirmPassword}/>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleregister}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.login}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.LoginLink}>Login</Text>
            </Pressable>
        </View>
    </View>
    )
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
        alignItems: 'left',
        marginTop: 70,
        paddingLeft: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    keteranganText: {
        color: '#1F2937',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,

    },
    ket: {
        color: '#c7cacd',
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold'
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
        width: '90%',
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
    login: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#c3c5c7',
        fontSize: 14,
    },
    LoginLink: {
        color: '#4A5CC4',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default RegisterScreen