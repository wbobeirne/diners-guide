import React, { PropTypes } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from "../constants/Colors";

export default class DinerRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.shadowInner}>
          <View style={styles.container}>
            <Image
              source={this.props.images[0]}
              style={styles.image}
            />
            <View style={styles.infocard}>
              <View style={styles.infotop}>
                <FontAwesome
                  name="heart-o"
                  style={styles.heart}
                />
                <Text style={styles.distance}>
                  3.5mi
                </Text>
                <Text style={styles.name} numberOfLines={1}>
                  {this.props.name}
                </Text>
              </View>
              <View style={styles.infobottom}>
                <Text style={styles.description} numberOfLines={1}>
                  {this.props.description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

DinerRow.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  images: PropTypes.array,
};

const topHeight = 22;
const bottomHeight = 15;
const borderRadius = 2;

const styles = StyleSheet.create({
  outer: {
    borderRadius,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.24,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  inner: {
    borderRadius,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  container: {
    borderRadius,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  name: {
    fontSize: 17,
    lineHeight: topHeight,
    alignSelf: "flex-end",
    flex: 1,
    textAlign: "right",
    color: Colors.dinerRowTextDark,
  },
  description: {
    fontSize: 13,
    lineHeight: bottomHeight,
    textAlign: "right",
    color: Colors.dinerRowTextLight,
  },
  distance: {
    fontSize: 12,
    textAlign: "right",
    flex: 0,
    color: Colors.dinerRowTextDark,
  },
  heart: {
    fontSize: topHeight,
    lineHeight: topHeight,
    color: Colors.dinerRowTextLight,
    flex: 0,
    marginRight: 5,
  },

  infocard: {
    padding: 12,
    paddingBottom: 15,
    backgroundColor: "#FFF",
  },
  infotop: {
    flexDirection: "row",
    flexWrap: "nowrap",
    height: topHeight,
    marginBottom: 10,
    alignItems: "center",
  },
  infobottom: {
    height: bottomHeight,
  },
});
