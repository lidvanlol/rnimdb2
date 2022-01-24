import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShowsScreen from "../../screens/root_stack/shows/index";
import { ROUTES } from "../../core/constants/routes";
import { HEADER_TITLE_STYLES } from "../../core/constants/ui_config";

const { Screen, Navigator } = createNativeStackNavigator();
const ShowStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          ...HEADER_TITLE_STYLES,
        },
      }}
    >
      <Screen
        options={{ headerShown: false, title: "shows" }}
        name={ROUTES.shows}
        component={ShowsScreen}
      />
    </Navigator>
  );
};

export default ShowStack;
