import { ImageBackground, StyleSheet, View } from "react-native";
import bgrImage from "../../assets/images/bgrNature.jpg";
import { LoginForm } from "../Components/LoginForm";

export const LoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={bgrImage} style={styles.imageBackground}>
          <LoginForm />
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
