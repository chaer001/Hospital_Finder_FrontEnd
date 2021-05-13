import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
  Linking,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 80, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate('HospFind');
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/search.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              oonPress={() => {
                navigate('HospAddPage');
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/add.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert;
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/update.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}> Find</Text>
            <Text style={styles.text}> Add</Text>
            <Text style={{marginLeft: 35}}> Update </Text>
          </View>

          <View style={{marginTop: 80, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate('DelPage');
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/delete.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate('ApiPage');
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/key.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}> Delete</Text>

            <Text style={styles.text}> ApiKey</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text> footer </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9A00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    width: 70,
    height: 75,
    borderRadius: 20,
    padding: 10,

    marginLeft: 30,
    marginRight: 20,
    marginBottom: 20,
  },

  footer: {
    backgroundColor: '#4E4E4E',

    height: 50,

    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginLeft: 43,
    marginRight: 23,
    marginBottom: 20,
  },

  imageStyle: {
    width: 70,
    height: 75,

    borderRadius: 20,
  },
});
