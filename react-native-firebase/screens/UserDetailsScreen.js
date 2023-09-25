import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { getUserById } from "../database/firebase";
import { Button } from "react-native-elements";

const UserDetailsScreen = (props) => {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };
  console.log(state);
  useEffect(async () => {
    const user = await getUserById(props.route.params.userId);
    setState({ ...user, id: props.route.params.userId });
  }, [getUserById]);

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="Name User"
          value={state.name}
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email User"
          value={state.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>

      <View>
        <TextInput
          placeholder="Phone User"
          value={state.phone}
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button
          title="Update User"
          color="#19AC52"
          onPress={() => alert("work")}
        />
      </View>
      <View>
        <Button
          title="Delete User"
          color="#E37399"
          onPress={() => alert("work")}
        />
      </View>
    </ScrollView>
  );
};

export default UserDetailsScreen;
