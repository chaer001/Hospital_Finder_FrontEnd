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
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import Config from '../config';

export default class apiKeyPage extends React.Component {
  state = {
    Level: '',
  };

  storeData = async apiKey => {
    try {
      await AsyncStorage.setItem('apiKey', apiKey);
    } catch (error) {
      Alert('Unsaved API KEY PLZ TRY AGAIN');
    }
  };
  api_key = '';

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('apiKey');
      if (value !== null) {
        this.api_key = value;
        this.forceUpdate();
      }
    } catch (error) {
      console.log('No Data');
    }
  };

  render() {
    this._retrieveData();
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 80, flexDirection: 'column'}}>
            <Text style={styles.text}> Request Api Key</Text>
            <Button
              style={{backgroundColor: '#FF9A00'}}
              onPress={() => {
                fetch(`${Config.api_domain}/api/apiKeys/key`, {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                })
                  .then(response => response.json())
                  .then(responseData => {
                    console.log(JSON.stringify(responseData));

                    this.api_key = responseData.key;
                    Alert.alert(JSON.stringify(responseData));

                    this.forceUpdate();
                  })
                  .catch(error => {
                    console.error(error);
                    Alert.alert('Alert Title failure' + JSON.stringify(error));
                  });
              }}
              title="Get Api Key"
            />
            <TextInput
              style={{height: 40}}
              placeholder="Enter Level 1 for User, 2 for Admin"
              Level={this.state.Level}
              onChangeText={Level => this.setState({Level})}
            />
            <Button
              disabled={this.api_key == '' || this.state.Level == ''}
              onPress={() => {
                fetch(
                  `${Config.api_domain}/api/apiKeys/key/${this.api_key}/${
                    this.state.Level
                  }`,
                  {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                  },
                )
                  .then(response => response.json())
                  .then(responseData => {
                    console.log(JSON.stringify(responseData));
                    Alert.alert('ApiKey Registered');
                    this.storeData(responseData.data.ApiKey);
                  })
                  .catch(error => {
                    console.error(error);
                    Alert.alert('Alert Title failure' + JSON.stringify(error));
                  });
              }}
              title="Register Api Key"
            />
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

  text: {
    marginBottom: 20,
    marginTop: 20,
  },

  footer: {
    backgroundColor: '#4E4E4E',

    height: 50,

    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },
});
