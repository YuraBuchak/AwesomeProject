import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonExit = () => {
  const navigation = useNavigation();
  const handleExit = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={handleExit}>
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginRight: 16,
  },
});
