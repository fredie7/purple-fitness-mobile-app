import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const itemWidth = (width - 48) / 2;

export default function ExerciseList({ exercises }) {
  console.log(exercises);
  return (
    <FlatList
      data={exercises}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.gifUrl }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: itemWidth,
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    paddingBottom: 8,
  },
  image: {
    width: "100%",
    height: 120,
  },
  name: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
  },
});
