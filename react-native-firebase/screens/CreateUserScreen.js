import React, { useState } from "react";
import { View, ScrollView, TextInput, Button } from "react-native";

const CreateUserScreen = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
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
        <Button title="Save User" onPress={() => console.log(state)} />
      </View>
    </ScrollView>
  );
};

export default CreateUserScreen;
