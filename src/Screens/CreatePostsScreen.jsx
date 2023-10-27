import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Trash2, MapPin } from "react-native-feather";
import { PostCamera } from "../Components/PostCamera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const buttonStyles = {
  button: {
    width: "100%",
    marginTop: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 50,
  },
  buttonActive: {
    backgroundColor: "#FF6C00",
  },
};

const buttonTextStyles = {
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "rgba(189, 189, 189, 1)",
    fontWeight: "400",
    lineHeight: 18,
  },
  buttonTextActive: {
    color: "#FFF",
  },
};

export const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const [photo, setPhoto] = useState(null);
  const [location, setlocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
        }
        const { coords } = await Location.getCurrentPositionAsync({});
        setlocation(coords);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const selectName = (value) => {
    setName(value);
  };

  const selectPlace = (value) => {
    setPlace(value);
  };

  const handleTakePhoto = (data) => {
    setPhoto(data);
  };

  const handlePublishPost = () => {
    if (!photo || !name || !place) return;
    navigation.navigate("PostsScreen", { photo, place, name, location });
    handleDelete();
  };

  const handleDelete = () => {
    setPhoto(null);
    setName("");
    setPlace("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={-260}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View>
            <View style={styles.cameraWrapper}>
              <View style={styles.placeholderImg}>
                <PostCamera photo={photo} takePhoto={handleTakePhoto} />
              </View>
              <Text style={styles.cameraText}>
                {photo ? "Редагувати фото" : "Завантажте фото"}
              </Text>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                value={name}
                style={styles.input}
                placeholder={"Назва..."}
                onChangeText={selectName}
              />
              <TextInput
                value={place}
                style={styles.location}
                placeholder={"Місцевість..."}
                onChangeText={selectPlace}
              />
              <MapPin
                style={styles.mapIcon}
                width={24}
                height={24}
                color={"rgba(189, 189, 189, 1)"}
              />
            </View>
            <TouchableOpacity
              onPress={handlePublishPost}
              style={[
                buttonStyles.button,
                name && place && photo ? buttonStyles.buttonActive : null,
              ]}
            >
              <Text
                style={[
                  buttonTextStyles.buttonText,
                  name && place && photo
                    ? buttonTextStyles.buttonTextActive
                    : null,
                ]}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.trashWrapper}>
            <TouchableOpacity style={styles.trashButton} onPress={handleDelete}>
              <Trash2 width={24} height={24} color={"rgba(189, 189, 189, 1)"} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  cameraWrapper: { gap: 8 },
  placeholderImg: {
    marginTop: 32,
    width: "100%",
    height: 240,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraText: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
  },
  inputWrapper: {
    position: "relative",
    marginTop: 32,
    gap: 16,
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
  },
  location: {
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 16,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
  },
  mapIcon: {
    position: "absolute",
    bottom: 34,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "rgba(189, 189, 189, 1)",
    fontWeight: "400",
    lineHeight: 18,
  },
  trashWrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 29,
    left: 0,
    right: 0,
  },
  trashButton: {
    width: 70,
    paddingVertical: 8,
    paddingHorizontal: 23,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 50,
  },
});
