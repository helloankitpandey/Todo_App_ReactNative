import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/reducers/todoSlice";
import CustomButton from "./CustomButton";
// import Ionicons from '@expo/vector-icons/Ionicons';

const TodoItem = ({ item }) => {

    // creating state for Modal
    const [visible, setVisible] = useState(false);

    // state for textinput
    const [value, setvalue] = useState(item?.title);
    const [description, setDescription] = useState(item?.desc);

    const dispatch = useDispatch()

    const deleteHandler = async() => {
        dispatch(deleteTodo({id: item?.id}))
    };

    // update handler
    const onUpdate = async() => {
        dispatch(updateTodo({id:item?.id, title: value, desc: description}));
        setVisible(false);
    }

    return (
        <>
        <View style={styles.container}>
            {/* <Text>Radhe Radhe</Text> */}
            <View style={styles.infoContainer} >
                <Text style={styles.title} > {item?.title} </Text>
                <Text style={styles.desc} > {item?.desc} </Text>
            </View>

            <View style={styles.iconContainer} >
            <MaterialCommunityIcons 
              name="pencil-circle" 
              size={32} 
              color="#007AFF"
              onPress={() => setVisible(true)} 
            />
            <Ionicons 
              name="trash-sharp" 
              size={32} 
            //   color="red" 
              onPress={deleteHandler}
            />
            </View>

            {/* Creating Modal for Updating Todo */}

            
        </View>
        <Modal 
          transparent={true}
          style={styles.mainModal} 
          visible={visible}
          animationType="slide"
          onRequestClose={() => setVisible(false)} 
        >
                <View style={styles.modal} >

                
                
                <View style={styles.modalConatiner}>
                <Ionicons 
                  onPress={() => setVisible(false)}
                  name="close-circle" 
                  style={styles.closecircle} 
                  size={32} 
                  color="black" 
                />
                <TextInput
                  placeholder='Enter your text here!'
                  value={value}
                  onChangeText={setvalue}
                  style={styles.input1}
                />

                 <TextInput
                   placeholder='Enter your todo description'
                   value={description}
                   numberOfLines={5}
                   multiline
                   maxLength={120}
                   onChangeText={setDescription}
                   style={styles.input2}
                />

                <CustomButton title='UPDATE' onPress={onUpdate} />
                </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        elevation: 10,
        shadowOffset: { width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.2,
        backgroundColor: "#f2f2f2",
        margin: 10,
        borderRadius: 10,
        padding: 10,

    },
    infoContainer: {
        width: "70%",

    },
    iconContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,

    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#222"
    },
    desc: {
        fontSize:14,
        color: "#888",
        textAlign: "left"
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    // styles for modal-InputText
    input1:{
        borderWidth: 2,
        padding: 10,
        borderColor: "#ccc",
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 35
      },
    input2: {
        borderWidth: 2,
        padding: 10,
        borderColor: "#ccc",
        marginHorizontal: 15,
        marginBottom: 1,
        borderRadius: 10,
        fontSize: 16,
        minHeight: 120,
        paddingBottom: 100,
    },
    modalConatiner: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 15,
        margin: 15,
        width: "90%",
    },
    closecircle: {
        position: "absolute",
        top: 10,
        right:10
    },
    mainModal: {
        position: "absolute",
    }
})

export default TodoItem;