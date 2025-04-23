import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>WELCOME TO</Text>
            <Text style={styles.subtitle}>POWER GYM</Text>
            <ActivityIndicator size="large" color="#F5C518" style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        color: '#aaa',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 28,
        color: '#F5C518',
        fontWeight: '900',
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});

export default SplashScreen;