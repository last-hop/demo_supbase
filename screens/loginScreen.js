import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../config/supabase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Email and Password are required.");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            Alert.alert("Login Failed", error.message);
        } else {
            console.log('Login successful');
            navigation.replace('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>GYM LOGIN</Text>
            <Text style={styles.subtitle}>Train hard. Stay fit.</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#F5C518',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#F5C518',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 20,
        color: '#F5C518',
        fontSize: 14,
    },
});

export default LoginScreen;
