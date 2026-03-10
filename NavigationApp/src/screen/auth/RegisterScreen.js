import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity,TextInput } from 'react-native';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleregister = () => {
        if (!name || !email || !password || !confirmPassword) {
            <View style={styles.alert}>
                <Text style={styles.alertText}>Please fill in all fields</Text>
            </View>
        }
        if (password !== confirmPassword) {
            <View style={styles.alert}>
                <Text style={styles.alertText}>Passwords do not match</Text>
            </View>
        }
    }
}

const RegisterScreen = () => {
const [focus, setFocus] = useState(false);

    return (
        <View style={styles.container}>
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>Create Account</Text>
        </View> 
        
        <View style={styles.keterangan}>
                        <Text style={styles.keteranganText}>Welcome Back</Text>
                        <Text style={styles.ket}>Sign in to continue your shopping journey</Text>
        </View>

        <View style={styles.form}>
            <Text style={styles.formText}>Name</Text>
            <TextInput style={[styles.input && styles.inputFocused]} placeholder="Enter your Name" value={name} onChangeText={setName}/>

            <Text style={styles.formText}>Email</Text>
            <TextInput style={[styles.input && styles.inputFocused]} placeholder="Enter your Email" value={email} onChangeText={setEmail}/>

            <Text style={styles.formText}>Password</Text>
            <TextInput style={[styles.input && styles.inputFocused]} placeholder="Enter your Password" value={password} onChangeText={setPassword}/>

            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput style={[styles.input && styles.inputFocused]} placeholder="Enter your Password" value={confirmPassword} onChangeText={setConfirmPassword}/>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.login}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.LoginLink}>Login</Text>
            </Pressable>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    headerText:{
        color: '#1F2937',
        fontSize: 20,
        fontWeight: 'bold',
    },
    keterangan: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
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
        color: '#ccced0',
        fontSize: 14,
        marginTop: 10,
    },
    form: {
        marginTop: 20,
        textAlign: 'Left',
    },
    formText: {
        color: '#1F2937',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaabab',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    inputFocused: {
        borderColor: '#4A5CC4',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#4A5CC4',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttontext: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    login: {
        marginTop: 20,
    },
    loginText: {
        color: '#ccced0',
        fontSize: 14,
    },
    LoginLink: {
        color: '#4A5CC4',
        fontSize: 14,
        fontWeight: 'bold',
    }
})