import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./screens/Home";
import Gym from "./screens/Gym";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseDetail from "./screens/ExerciseDetail";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gym"
        component={Gym}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetail}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Home />
    //   <Gym />
    //   <StatusBar style="light" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
