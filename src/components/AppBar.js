import * as React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { ROUTES } from "../core/constants/routes";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MyComponent = () => {
  const navigation = useNavigation();

  return (
    <Appbar style={styles.bottom}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.home_stack, {});
        }}
      >
        <Text style={styles.link}>Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.shows_stack, {});
        }}
      >
        <Text style={styles.link}>Tv Shows</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.search_stack, {});
        }}
      >
        <Text>Search</Text>
      </TouchableOpacity> */}
    </Appbar>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    },
    link: {
        margin: 10,
        fontSize:24
    }
});
