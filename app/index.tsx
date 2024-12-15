import { getMessage } from "@/services/getService";
import { Image, StyleSheet, Platform } from "react-native";
import { View, Text } from "react-native";

export default function HomeScreen() {
  getMessage(0);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
