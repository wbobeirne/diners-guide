import React, { Component } from 'react';
import { Components } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import diners from '../constants/DinersList';
import mapStyle from '../constants/MapStyle';


export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 40.7418439,
      longitude: -73.9823246,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    const { MapView } = Components;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          onRegionChange={this._handleMapRegionChange}
          /*provider={MapView.PROVIDER_GOOGLE}*/
          customMapStyle={mapStyle}
        >
          {diners.map((diner) => (
            <MapView.Marker
              key={diner.name}
              title={diner.name}
              coordinate={diner.coordinate}
            />
          ))}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 70,
    fontSize: 30,
    lineHeight: 70,
    textAlign: "center",
  },
  map: {
    flex: 1,
  },
});
