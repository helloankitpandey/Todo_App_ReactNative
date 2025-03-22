import {View, Text, StyleSheet, Image} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
// importing images from assest
import Logo from "../assets/images/icon.png"
import { screenHeight, screenWidth } from "../utils/Constants";
import { resetAndNavigate } from "../utils/Helpers";


const Main = () => {

    // linking fonts or loading fonts
    const [loaded] = useFonts({
        SpaceMono:require('../assets/fonts/SpaceMono-Regular.ttf')
    })

    // creating state
    // const [hasNavigated, setHasNavigated] = useState(false);

    // creating useEffect
    useEffect(() => {
        if(loaded && !hasNavigated){
            const timeoutId = setTimeout(() => {
                resetAndNavigate("/home");
            },1000);

            return () => clearTimeout(timeoutId);
        }
    },[loaded,hasNavigated])

    return (
        <View style = {styles.container} >
            <Image source={Logo} style = {styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff" 
    },
    image: {
        width: screenWidth * 0.3,
        height: screenHeight * 0.12
    }
})

export default Main;