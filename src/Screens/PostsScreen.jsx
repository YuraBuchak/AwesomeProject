import { View, StyleSheet } from "react-native";
import { PostsList } from "../Components/PostList";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
  },
});
