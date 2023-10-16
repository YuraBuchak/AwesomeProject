import { ImageBackground, StyleSheet, View } from "react-native";
import bgrImage from "../../assets/images/bgrNature.jpg";
import { RegistrationForm } from "../Components/RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={bgrImage} style={styles.imageBackground}>
          <RegistrationForm />
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
