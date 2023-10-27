import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export const PostCamera = ({ takePhoto, photo }) => {
  const [newPhoto, setNewPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    if (!photo) {
      setNewPhoto(null);
    }
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
      } catch (error) {
        console.log(error);
      }
    })();
  }, [photo]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleTakePhoto = async () => {
    try {
      if (cameraRef) {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setNewPhoto(uri);
        takePhoto(uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {newPhoto ? (
        <View style={styles.imgContainer}>
          <Image source={{ uri: newPhoto }} style={styles.camera} />
          <View style={styles.cameraBtn}>
            <FontAwesome
              name="camera"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
          </View>
        </View>
      ) : (
        <View style={styles.imgContainer}>
          <Camera style={styles.camera} ref={setCameraRef}>
            <TouchableOpacity
              onPress={handleTakePhoto}
              style={styles.cameraBtn}
            >
              <FontAwesome
                name="camera"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
            </TouchableOpacity>
          </Camera>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    justifyContent: "center",
  },
  camera: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraBtn: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#ffffff4d",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
