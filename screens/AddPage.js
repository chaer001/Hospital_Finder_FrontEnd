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
  Modal,
  FlatList,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import Config from '../config';

class hospAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      apiKey: '',
      Id: '',
      City: '',
      State: '',
      County: '',
      CityS: '',
      StateS: '',
      Name: '',
      Type: '',
      Owner: '',
      Emergency: '',
      Latitude: '',
      Longitude: '',
      Distance: '',
      data: [],
    };
  }

  setModalVisible(visible, data) {
    if (!data) {
      data = [];
    }
    this.setState({modalVisible: visible, data: data});
  }

  _retrieveData = async () => {
    try {
      this.key = await AsyncStorage.getItem('apiKey');
    } catch (error) {
      Alert('No Data');
    }
  };

  retrieveData = () => {
    return new Promise(async function(resolve, reject) {
      try {
        const value = await AsyncStorage.getItem('apiKey');

        resolve(value);
      } catch (error) {
        Alert('No Data');
      }
    });
  };

  componentWillMount() {
    this.retrieveData().then(apiKey => this.setState({apiKey}));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 80, flexDirection: 'column'}}>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Hospital Id"
              Id={this.state.Id}
              onChangeText={Id => this.setState({Id})}
            />
          </View>

          <TextInput
            style={{height: 40}}
            placeholder="Enter Hospital Name"
            City={this.state.City}
            onChangeText={City => this.setState({City})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter Hospital Address"
            State={this.state.State}
            onChangeText={State => this.setState({State})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter Hospital City"
            County={this.state.County}
            onChangeText={County => this.setState({County})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter Hospital State"
            Name={this.state.Name}
            onChangeText={Name => this.setState({Name})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter ZipCode"
            Type={this.state.Type}
            onChangeText={Type => this.setState({Type})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter County"
            Owner={this.state.Owner}
            onChangeText={Owner => this.setState({Owner})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter PhoneNumber"
            Emergency={this.state.Emergency}
            onChangeText={Emergency => this.setState({Emergency})}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Enter Type"
            Longitude={this.state.Longitude}
            onChangeText={Longitude => this.setState({Longitude})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter Owner"
            Latitude={this.state.Latitude}
            onChangeText={Latitude => this.setState({Latitude})}
          />

          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/latlon/${
                  this.state.Latitude
                }/${this.state.Longitude}/${this.state.Distance}`,
                {
                  method: 'DELETE',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Key: this.state.apiKey,
                  },
                },
              )
                .then(response => response.json())
                .then(responseData => {
                  console.log(JSON.stringify(responseData));
                  Alert.alert('Deleted');
                })
                .catch(error => {
                  console.error(error);
                  Alert.alert('Alert Title failure' + JSON.stringify(error));
                });
            }}
            title="Delete By Long and Lat"
          />
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
export default hospAddPage;
