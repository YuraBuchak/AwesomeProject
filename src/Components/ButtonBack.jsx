import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonBack = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("PostsScreen");
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={handleBack}>
      <Feather name="arrow-left" size={24} color={`rgba(33, 33, 33, 0.8)`} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginLeft: 16,
  },
});
