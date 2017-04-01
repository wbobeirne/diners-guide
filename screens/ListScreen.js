import React from 'react';
import { ListView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import diners from '../constants/DinersList';
import DinerRow from '../components/DinerRow';

export default class LinksScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Diners',
    },
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(diners),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(diner) => <DinerRow {...diner}/>}
        style={styles.container}>
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
