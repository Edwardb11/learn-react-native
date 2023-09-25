import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { deleteUser, getUserById, updateUser } from "../database/firebase";
import { Button } from "react-native-elements";

const UserDetailsScreen = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const handleChangeText = ( value,name) => {
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const getUser = async (userId) => {
    const user = await getUserById(userId);
    setState({ ...user, id: userId });
    setLoading(false);
  };
  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the User",
      "Are you sure?",
      [
        {
          text: "Yes",
          onPress: () => {
            deleteUser(props.route.params.userId), setLoading(false);
            props.navigation.navigate("UserList");
          },
        },
        { text: "No", onPress: () => console.log("canceled") },
      ],

      {
        cancelable: true,
      }
    );
  };
  const updateUsers = async () => {
    updateUser(state.id, state);
    setState(initialState);
    props.navigation.navigate("UserList");
  };

  useEffect(() => {
    getUser(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Name"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={state.name}
          onChangeText={(value) => handleChangeText(value, "name")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="email"
          placeholder="Email"
          style={styles.inputGroup}
          value={state.email}
          onChangeText={(value) => handleChangeText(value, "email")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Phone"
          autoCompleteType="tel"
          style={styles.inputGroup}
          value={state.phone}
          onChangeText={(value) => handleChangeText(value, "phone")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          color="#E37399"
          onPress={() => openConfirmationAlert()}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Update" color="#19AC52" onPress={() => updateUsers()} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
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
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default UserDetailsScreen;
