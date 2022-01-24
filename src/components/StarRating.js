import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
const STORAGE_KEY = "@save_age";
import { ROUTES } from "../core/constants/routes";

// import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import StarRating from "react-native-star-rating-widget";

const StarRatingItems = () => {
  const [rating, setRating] = React.useState(0);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(rating));
      setRating(rating);
        alert("Data successfully saved");
        
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  React.useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const rating = await AsyncStorage.getItem(STORAGE_KEY);

      if (rating !== null) {
        setRating(rating);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StarRating
          rating={rating}
          onChange={setRating}
          style={{ marginTop: 50 }}
              />
             
        <TouchableOpacity onPress={saveData} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Save Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clearStorage} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Clear Rating</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: "center",
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
  },

  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});

export default StarRatingItems;
