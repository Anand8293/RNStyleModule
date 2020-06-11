import React, { useState } from "react";
import { View, Text, ImagePropTypes } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { spliteKey } from "../constants";

export default HomeScreen = ({ navigation }) => {
    const [username, setUser] = useState('')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TextInput
            value = {username}
            onChangeText={(text)=> setUser(text)}/>
            <TouchableOpacity onPress={()=> navigation.replace(spliteKey, {username})}>
                <Text>Go to Splite page</Text>
            </TouchableOpacity>
        </View>
    );
}