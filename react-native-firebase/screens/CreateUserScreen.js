import React, { useState } from "react";
import { View, ScrollView, TextInput, Button, StyleSheet } from "react-native";
import db, { AddUser } from "../database/firebase";
const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (value, name) => {
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
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save User"
          onPress={() => saveNewUser()}
          color="#E37399"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginBottom: 7,
  },
});
export default CreateUserScreen;
