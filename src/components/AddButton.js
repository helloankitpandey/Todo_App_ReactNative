import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";

const AddButton = () => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => router.navigate("/addtodo")} 
        >
            <Entypo name="plus" size={24} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        // bottom: 30,
        // right: 20,
        // backgroundColor: "#0090B0",
        padding: 15,
        borderRadius: 120,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 10,
        shadowRadius: 2,
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.7,
    }
});

export default AddButton;