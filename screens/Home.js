// Home.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>Welcome to Home Screen</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Chat')} // Navigate to Register screen
            >
                <Text style={styles.buttonText}>Go to Register</Text>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Home;
