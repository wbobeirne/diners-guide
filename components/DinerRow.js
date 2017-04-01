import React, { PropTypes } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class DinerRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source={this.props.images[0]} />
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

const styles = StyleSheet.create({
  dinerImage: {

  },
});
