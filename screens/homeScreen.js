import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { supabase } from '../config/supabase';

const HomeScreen = ({ navigation }) => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert("Logout Failed", error.message);
        } else {
            navigation.replace('Login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello </Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;
