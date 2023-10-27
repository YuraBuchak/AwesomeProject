import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { Loader } from "react-native-feather";

export const PostCamera = ({ takePhoto, photo }) => {
  const [newPhoto, setNewPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(false);

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
      setIsLoader(true);
      if (cameraRef) {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setNewPhoto(uri);
        takePhoto(uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <View style={styles.imgContainer}>
        {!photo ? (
          <Camera style={styles.camera} ref={setCameraRef}>
            {isLoader ? (
              <Loader size={24} color="rgba(232, 232, 232, 1)" />
            ) : (
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
            )}
          </Camera>
        ) : (
          <>
            <Image source={{ uri: newPhoto }} style={styles.camera} />
            <View style={styles.cameraBtn}>
              <FontAwesome
                name="camera"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "black",
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
