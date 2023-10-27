import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {
  const {
    item: { location },
  } = route.params;

  return (
    <>
      <View style={styles.conteiner}>
        <MapView
          style={styles.mapConteiner}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={15}
        >
          <Marker
            style={styles.marker}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Photo location"
            pinColor="red"
          />
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  mapConteiner: {
    flex: 1,
  },
  marker: {
    position: "absolute",
  },
});
