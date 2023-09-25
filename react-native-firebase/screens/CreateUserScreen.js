import React, { useState } from "react";
import { View, ScrollView, TextInput, Button } from "react-native";
import db, { AddUser } from "../database/firebase";
const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = () => {
    if (state.name === "") {
      alert("Please provide a name");
    } else if (state.email === "") {
      alert("Please provide a email");
    } else if (state.phone === "") {
      alert("Please provide a phone");
    } else {
      AddUser(state.name, state.email, state.phone);
      props.navigation.navigate("UserList");
    }
  };
  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>

      <View>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

export default CreateUserScreen;
