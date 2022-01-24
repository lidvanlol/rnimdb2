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
import { ROUTES } from "../../../core/constants/routes";
import Search from "../../../components/Search";
import { fetchMovies, moviesSelector } from "../../../store/slices/movies";
import DisplayContent from "../../../components/DisplayContent";
import MyComponent from "../../../components/AppBar";
const HomeScreen = () => {
        const navigation = useNavigation();

  const dispatch = useDispatch();
  const { movies, loading, hasErrors } = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <DisplayContent
      title={item.title}
      image={item.image}
      crew={item.crew}
      year={item.year}
      imDbRating={item.imDbRating}
    />
  );

  return (
    <>
     
      <View style={styles.container}>
        <Search/>
        <FlatList
          data={movies}
          renderItem={renderItem}
          extraData={movies}
          initialNumToRender={10}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
        />
      </View>
      <MyComponent/>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
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

export default HomeScreen;
