import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native"

const CustomButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0090B0",
        // marginTop: 10,
        alignSelf: "center",
        paddingHorizontal: 50
    },
    text: {
        fontSize: 18,
        fontWeight: 600,
        color: "#fff"
    }
});

export default CustomButton; 