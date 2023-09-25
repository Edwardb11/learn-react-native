import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { listUser } from "../database/firebase";
import { ScrollView } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const UserListScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listUser();
      setUsers(data);
    };

    fetchData();
  }, []);
  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUser")}
        title="Create User"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetails", {
                userId: user.id,
              });
            }}>
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://randomuser.me/api/portraits/men/36.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserListScreen;
