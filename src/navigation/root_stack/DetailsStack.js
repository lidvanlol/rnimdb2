import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../../screens/root_stack/details";
import { ROUTES } from "../../core/constants/routes";
import { HEADER_TITLE_STYLES } from "../../core/constants/ui_config";

const { Screen, Navigator } = createNativeStackNavigator();
const DetailsStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          ...HEADER_TITLE_STYLES,
        },
      }}
    >
      <Screen
        options={{ headerShown: true, title: "Details" }}
        name={ROUTES.details}
        component={DetailsScreen}
      />
    </Navigator>
  );
};

export default DetailsStack;
