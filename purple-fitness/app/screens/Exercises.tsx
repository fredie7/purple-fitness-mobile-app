// components/Exercises.tsx
import { useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const bodyImages = [
  { name: "back", image: require("../images/gym6.jpeg") },
  { name: "cardio", image: require("../images/gym4.jpeg") },
  { name: "chest", image: require("../images/gym3.jpeg") },
  { name: "lower arms", image: require("../images/gym8.jpeg") },
  { name: "lower legs", image: require("../images/gym7.jpeg") },
  { name: "neck", image: require("../images/gym8.jpeg") },
  { name: "shoulders", image: require("../images/gym9.jpeg") },
  { name: "upper arms", image: require("../images/gym2.jpeg") },
  { name: "upper legs", image: require("../images/gym4.jpeg") },
  { name: "waist", image: require("../images/gym4.jpeg") },
];

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = (width - 48) / 2;

export default function Exercises() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>
      <FlatList
        data={bodyImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ExerciseDetail", item)}
            style={styles.card}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    marginTop: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: IMAGE_WIDTH,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    elevation: 2,
    marginRight: 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  name: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "500",
    textTransform: "capitalize",
    backgroundColor: "#fff",
  },
});
