import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todoSlice';
import { router } from 'expo-router';

const AddTodo = () => {

  // Use of useDispatch
  // usestate ko modify krne ke liye && 
  // redux ke action ko call krne ke liye
  // Returns the dispatch function from the Redux store.
  const dispatch = useDispatch()


  const [value, setvalue] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async() => {
    if(value.trim() == "" || description.trim() == ""){
      Alert.alert("Please Enter Something!");
      return;
    }
    dispatch(addTodo({ title: value, desc: description }));
    router.back();
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Add New Todo" isBackButton={true} />

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

      <CustomButton title='Add' onPress={onSubmit} />


    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    input1:{
      borderWidth: 2,
      padding: 10,
      borderColor: "#ccc",
      marginHorizontal: 15,
      marginBottom: 10,
      borderRadius: 10,
      fontSize: 16,
      marginTop: 15
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
    }
})

export default AddTodo