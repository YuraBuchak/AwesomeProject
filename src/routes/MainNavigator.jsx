import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { MapScreen } from "../Screens/MapScreen";
import { BottomNavigator } from "./BottomNavigator";
import { CommentsScreen } from "../Screens/CommentsScreen";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          options={{
            title: "Карта",
            headerTitleAlign: "center",
          }}
          name="MapScreen"
          component={MapScreen}
        />
        <MainStack.Screen
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",
          }}
          name="CommentsScreen"
          component={CommentsScreen}
        />
        <MainStack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
