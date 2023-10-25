import { StyleSheet, Image, Text, View } from "react-native";

export const UserOfList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <Image style={styles.placeholderUserImage} />
      </View>
      <View>
        <Text style={styles.name}>Yurii Buckak</Text>
        <Text style={styles.mail}>Aaaaaaa@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imgWrapper: {
    width: 60,
    height: 60,
  },
  placeholderUserImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  name: {
    fontWeight: "700",
    fontSize: 13,
  },
  mail: {
    fontWeight: "400",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
