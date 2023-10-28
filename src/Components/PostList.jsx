import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { MapPin, MessageCircle, ThumbsUp } from "react-native-feather";
import { UserOfList } from "./UserOfList";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const data = require("../data/data.json");

export const PostsList = ({ route }) => {
  const [photos, setPhotos] = useState([]);
  const post = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    if (post) {
      setPhotos((prev) => [...prev, post]);
    }
    console.log(route);
  }, [route.params]);

  return (
    <FlatList
      data={photos}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <UserOfList />}
      renderItem={({ item }) => (
        <View style={styles.postWrapper}>
          <Image style={styles.photo} source={{ uri: item.photo }} />
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}>{item.description}</Text>
            <View style={styles.option}>
              <View style={styles.optionInfo}>
                <TouchableOpacity
                  style={styles.comments}
                  onPress={() =>
                    navigation.navigate("CommentsScreen", { item })
                  }
                >
                  <MessageCircle
                    stroke="rgba(255, 108, 0, 1)"
                    fill="rgba(255, 108, 0, 1)"
                    width={24}
                    height={24}
                    style={{ transform: [{ rotateY: "180deg" }] }}
                  />
                  <Text style={styles.optionText}>{item.comments || "0"}</Text>
                </TouchableOpacity>
                <View style={styles.likes}>
                  <ThumbsUp
                    stroke="rgba(255, 108, 0, 1)"
                    fill="#ffff"
                    width={24}
                    height={24}
                  />
                  <Text style={styles.optionText}>{item.likes || "0"}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.place}
                onPress={() => navigation.navigate("MapScreen", { item })}
              >
                <MapPin
                  stroke="rgba(189, 189, 189, 1)"
                  fill="#fff"
                  width={24}
                  height={24}
                />
                <Text style={`${styles.optionText} ${styles.underlineText}`}>
                  {item.place}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      ListFooterComponent={<View style={styles.bottomMargin} />}
    />
  );
};

const styles = StyleSheet.create({
  postWrapper: {
    marginTop: 33,
    gap: 8,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  detailsWrapper: {
    gap: 8,
  },
  title: {
    maxWidth: 352,
    flexWrap: "wrap",
    fontWeight: "500",
    fontSize: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  place: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  optionText: {
    fontWeight: "400",
    fontSize: 16,
  },
  bottomMargin: {
    marginBottom: 40,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});
