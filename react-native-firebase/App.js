import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "./screens/UserListScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailsScreen from "./screens/UserDetailsScreen";

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUserScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default App;
