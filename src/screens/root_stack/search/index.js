import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../../../components/Search";

import { fetchResults, resultsSelector } from "../../../store/slices/search";
import DisplayContent from "../../../components/DisplayContent";
import MyComponent from "../../../components/AppBar";
const SearchScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

const [errorMessage, setErrorMessage] = useState();

const [searchValue, setSearchValue] = useState("");
const [searchResults, setSearchResults] = useState([]);
  const searchHandler = async () => {
    try {
      const search = `https://imdb-api.com/en/API/SearchMovie/k_5ll42g7p/& q=${searchValue}`;
      const response = await fetch(search);
      const responseJson = await response.json();
      if (response.ok) {
        setSearchResults(responseJson.results);
      } else setErrorMessage(responseJson.message);
    } catch (error) {
      console.log("Error", error);
      setErrorMessage(error.message);
    }
  };

React.useEffect(() => {
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ])
    .then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      console.log(data);
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
}, []);




  useEffect(() => {
    searchHandler();
  }, []);
  
const handleQueryChange = (text) => {
  setSearchValue(text);
  searchHandler(text);
};

  useEffect(() => {
    dispatch(fetchResults());
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
        <TextInput
          placeholder="Search"
          onChangeText={handleQueryChange}
          value={searchValue}
          placeholderTextColor={"#888888"}
          style={styles.search}
          autoFocus
        />

        {searchResults ? (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        ) : (
          errorMessage && (
            <Text style={styles.errMsg}>Error: {errorMessage}</Text>
          )
        )}
      </View>
      <MyComponent />
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

export default SearchScreen;
