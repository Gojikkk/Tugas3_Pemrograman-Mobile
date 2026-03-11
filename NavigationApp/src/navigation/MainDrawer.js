import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeTabs from "./HomeTabs";
import ProfileScreen from "../screen/Profile/ProfileScreen";

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;