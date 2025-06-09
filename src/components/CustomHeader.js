import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

const CustomHeader = ({title, isBackButton}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View>
            <Text style={styles.text}>{title}</Text>
            {isBackButton && (
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()} >
                <Ionicons name="chevron-back-circle" size={32} color="#fff" />
            </TouchableOpacity>
            )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor:"#0090B0",
    },
    text:{
        fontSize: 22,
        fontFamily: "SpaceMono",
        // textAlign: "center",
        fontWeight: 800,
        color:"#fff"
    },
    backButton:{
        position: 'absolute', 
        bottom: 0,
    },
});

export default CustomHeader;