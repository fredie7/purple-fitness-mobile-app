import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchExercisesByBodyParts } from "@/services/Api";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExerciseList from "./ExerciseList";

export default function ExerciseDetail({ route }) {
  const item = route.params;
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item?.name) {
      getexercises(item.name);
    }
  }, [item]);

  const getexercises = async (bodyParts) => {
    let data = await fetchExercisesByBodyParts(bodyParts);
    // console.log("DATA====>>>", data);
    setExercises(data);
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <ExerciseList exercises={exercises} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "purple",
  },
});
