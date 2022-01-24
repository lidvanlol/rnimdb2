import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Card, Title, Paragraph, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../core/constants/routes";
import StarRatingItems from "./StarRating";
import MyComponent from "./AppBar";
import { Searchbar } from "react-native-paper";


const DisplayContent = ({ title, image, id, crew, year, imDbRating }) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Card style={styles.newsCards}>
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
            <Card.Cover style={styles.img} source={{ uri: image }} />
            <StarRatingItems />
            <Subheading>Imdb Rating : {imDbRating}</Subheading>
          </Card.Content>
          <Card.Actions>
            <View style={styles.right}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate(ROUTES.details_stack, {
                    screen: "details",
                    params: {
                      title: title,
                      id: id,
                      image: image,
                      crew: crew,
                      year: year,
                    },
                  });
                }}
              >
                <Text style={styles.more}>More</Text>
              </TouchableOpacity>
            </View>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  newsCards: {
    borderRadius: 25,

    margin: 20,
    flexDirection: "row",
  },
  img: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: 120,
    height: 50,
    marginBottom: 20,

    backgroundColor: "#3366ff",
    justifyContent: "center",
    alignItems: "center",
  },
  more: {
    color: "white",
    fontSize: 20,
  },
  right: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flex: 2,
    marginRight: 10,
  },
});

export default DisplayContent;
