import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { WatchListScreen } from "../screens/watchListScreen/index";
import HomeScreen from "../screens/HomeScreen/index";
import PortfolioScreen from "../screens/PortfolioScreen"

import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Portfolio"}
        component={PortfolioScreen }
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Foundation
              name="graph-pie"
              size={focused ? 35 : 30}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"WatchList"}
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
