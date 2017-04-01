import React, { Component } from 'react';
import { Components } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import diners from '../constants/DinersList';


export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 40.7128,
      longitude: -74.005,
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
          onRegionChange={this._handleMapRegionChange}
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
