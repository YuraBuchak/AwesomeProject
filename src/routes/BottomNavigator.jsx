import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

import { PostsScreen } from "../Screens/PostsScreen";
import { ButtonExit } from "../Components/ButtonExit";
import { ButtonBack } from "../Components/ButtonBack";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";

const TabsBottom = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <>
      <TabsBottom.Navigator
        initialRouteName="PostsScreen"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 83,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
            paddingHorizontal: 82,
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarItemStyle: {
            borderRadius: 20,
            width: 40,
            height: 40,
            marginHorizontal: 9,
            alignItems: "center",
          },
          tabBarActiveBackgroundColor: "#FF6C00",
        }}
      >
        <TabsBottom.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 17,
            },
            headerTitleAlign: "center",
            headerRight: () => <ButtonExit />,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="grid-view"
                size={24}
                color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
              />
            ),
          }}
        />
        <TabsBottom.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: "none" },
            title: "Створити публікацію",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 17,
            },
            headerLeft: () => <ButtonBack />,
            headerTitleAlign: "center",
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="plus"
                size={18}
                color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
              />
            ),
          }}
        />
        <TabsBottom.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={24}
                color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
              />
            ),
          }}
        />
      </TabsBottom.Navigator>
    </>
  );
};
