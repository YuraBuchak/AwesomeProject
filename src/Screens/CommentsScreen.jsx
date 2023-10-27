import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { ArrowUp } from "react-native-feather";

export const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const {
    item: { photo },
  } = route.params;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const currentTime = new Date().toLocaleString("uk-UA", options);

  const handleSendComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-300}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerContent}>
            <Image style={styles.photo} source={{ uri: photo }} />

            <FlatList
              style={styles.comments}
              data={comments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.commentsContainer,
                    index % 2 !== 0 && styles.commentsContainerRev,
                  ]}
                >
                  <View style={styles.avatar}></View>
                  <View
                    style={[
                      styles.comment,
                      index % 2 !== 0 && styles.commentRev,
                    ]}
                  >
                    <Text style={styles.commentText}>{item}</Text>

                    <Text
                      style={[
                        styles.commentDate,
                        index % 2 !== 0 && styles.commentDateRev,
                      ]}
                    >
                      {currentTime}
                    </Text>
                  </View>
                </View>
              )}
            />

            <View style={styles.inputWrapper}>
              <TextInput
                placeholderTextColor="#bdbdbd"
                placeholder="Коментувати..."
                onChangeText={(value) => {
                  setComment(value);
                }}
                value={comment}
                style={styles.formInput}
              />
              <TouchableOpacity
                style={styles.btnArrow}
                onPress={handleSendComment}
              >
                <ArrowUp name="arrow-up" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
  },
  containerContent: {
    flex: 1,
    position: "relative",
    paddingTop: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  photo: {
    height: 240,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  inputWrapper: {
    alignItems: "center",
    width: "100%",
    bottom: 15,
    left: 0,
    right: 0,
  },
  formInput: {
    height: 50,
    width: "100%",
    paddingLeft: 16,
    marginBottom: 10,
    color: "#212121",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
  },
  btnArrow: {
    position: "absolute",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    top: 8,
    right: 8,
  },
  comments: {
    width: "100%",
    marginBottom: 30,
    marginTop: 32,
  },
  commentsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
    borderRadius: 6,
  },
  commentsContainerRev: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#E8E8E8",
  },
  comment: {
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    flex: 1,
    padding: 16,
    backgroundColor: "#00000008",
  },
  commentRev: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
  },
  commentText: {
    fontSize: 13,
    color: "#212121",
    marginBottom: 8,
    lineHeight: 18,
    fontWeight: "400",
  },
  commentDate: {
    fontSize: 10,
    color: "#BDBDBD",
    alignSelf: "flex-end",
  },
  commentDateRev: {
    alignSelf: "flex-start",
  },
});
