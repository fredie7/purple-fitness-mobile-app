import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/gym4.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <Text style={styles.title}>Purple Fitness</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Gym")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  safeArea: {
    width: "100%",
  },
  content: {
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
