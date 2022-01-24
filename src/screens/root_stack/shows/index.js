import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../../../components/Search";

import { fetchShows, showsSelector } from "../../../store/slices/shows";
import DisplayContent from "../../../components/DisplayContent";
import MyComponent from "../../../components/AppBar";
const ShowsScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { shows, loading, hasErrors } = useSelector(showsSelector);

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <DisplayContent
      title={item.title}
      image={item.image}
      crew={item.crew}
      year={item.year}
    />
  );

  return (
    <>
          <View style={styles.container}>
              <Search/>
        <FlatList
          data={shows}
          renderItem={renderItem}
          extraData={shows}
          initialNumToRender={10}
          keyExtractor={(item) => item.id}
        />
      </View>
      <MyComponent />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ShowsScreen;
