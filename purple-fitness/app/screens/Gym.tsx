import {
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Exercises from "./Exercises";
// import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "expo-router";

const carouselImages = [
  require("../images/gym6.jpeg"),
  require("../images/gym7.jpeg"),
  require("../images/gym8.jpeg"),
  require("../images/gym10.jpeg"),
  require("../images/gym9.jpeg"),
];

export default function Gym() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.headerRow}>
        <Text style={styles.purpleText}>Ready To</Text>
        <Image style={styles.avatar} source={require("../images/gym4.jpeg")} />
      </View>

      <View style={styles.subHeaderRow}>
        <Text style={styles.redText}>Work Out</Text>
        <Ionicons
          name="notifications"
          size={28}
          color="black"
          style={styles.icon}
        />
      </View>

      <View style={styles.carouselWrapper}>
        <Text style={styles.carouselTitle}>Explore Workouts</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carouselImages.map((img, index) => (
            <Image key={index} source={img} style={styles.carouselImage} />
          ))}
        </ScrollView>
      </View>
      <Exercises />
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  purpleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "purple",
  },
  redText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  icon: {
    marginRight: 8,
  },
  carouselWrapper: {
    marginTop: 24,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  carouselImage: {
    width: width * 0.7,
    height: 180,
    borderRadius: 15,
    marginRight: 16,
  },
});
