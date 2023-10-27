import { Loader } from "react-native-feather";
import { StyleSheet, View } from "react-native";

export const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Loader size={24} color="black" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
