import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { X } from "react-native-feather";
import bgrImage from "../../assets/images/bgrNature.jpg";
import { ButtonExit } from "../Components/ButtonExit";
import { ProfileList } from "../Components/ProfileList";

export const ProfileScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgrImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.wrapper}>
          <View style={styles.userWrapper}>
            <View style={styles.imageWrapper}>
              <Image style={styles.placeholderUserImage} />
              <View style={styles.iconWrapper}>
                <X width={18} height={18} color="rgba(189, 189, 189, 1)" />
              </View>
            </View>
            <View style={styles.exitBtn}>
              <ButtonExit />
            </View>
            <Text style={styles.userName}>Yurii Buchak</Text>
          </View>

          <ProfileList route={route} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100vw",
    backgroundColor: "#ffff",
    // height: "100vh",
  },
  imageBackground: {
    resizeMode: "cover",
  },
  wrapper: {
    marginTop: 180,
    position: "relative",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  userWrapper: {
    alignItems: "center",
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  placeholderUserImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconWrapper: {
    position: "absolute",
    bottom: 9,
    right: 110,
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    backgroundColor: "#F6F6F6",
    transform: [{ translateX: 123 }],
  },
  userName: {
    marginTop: 92,
    fontSize: 30,
    fontWeight: "500",
  },
  exitBtn: {
    position: "absolute",
    top: 22,
    right: 0,
  },
});
