import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { MapPin, MessageCircle, ThumbsUp } from "react-native-feather";
import { UserOfList } from "./UserOfList";
// import { UserInfo } from "./UserInfo";

const data = require("../data/data.json");

export const PostsList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <UserOfList />}
      renderItem={({ item }) => (
        <View style={styles.postWrapper}>
          <Image style={styles.photo} source={{ uri: item.photo }} />
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}>{item.description}</Text>
            <View style={styles.option}>
              <View style={styles.optionInfo}>
                <View style={styles.comments}>
                  <MessageCircle
                    stroke="rgba(255, 108, 0, 1)"
                    fill="rgba(255, 108, 0, 1)"
                    width={24}
                    height={24}
                    style={{ transform: [{ rotateY: "180deg" }] }}
                  />
                  <Text style={styles.optionText}>{item.comments}</Text>
                </View>
                <View style={styles.likes}>
                  <ThumbsUp
                    stroke="rgba(255, 108, 0, 1)"
                    fill="#ffff"
                    width={24}
                    height={24}
                  />
                  <Text style={styles.optionText}>{item.likes}</Text>
                </View>
              </View>

              <View style={styles.place}>
                <MapPin
                  stroke="rgba(189, 189, 189, 1)"
                  fill="#fff"
                  width={24}
                  height={24}
                />
                <Text style={styles.optionText}>{item.place}</Text>
              </View>
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
});
