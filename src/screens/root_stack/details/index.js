import React from "react";
import {
  StyleSheet,
  Image,
  View,
 
  ScrollView,
  SafeAreaView,
} from "react-native";
import {Title,Text,Subheading}from 'react-native-paper'
function DetailsScreen({ route }) {
   const {title,image,crew,year} = route.params
 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
                  <Image source={{ uri: image }} style={styles.image}/>
                  <Subheading>Cast: {crew}</Subheading>
                  <Subheading>Year: {year}</Subheading>
                 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  content: {
    padding: 20,
    fontSize: 20,

    marginBottom: 10,
  },
});
export default DetailsScreen;
