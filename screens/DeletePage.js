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

class delPage extends React.Component {
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
            <Text style={styles.text}> Delete Hospital By ID</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Id"
              Id={this.state.Id}
              onChangeText={Id => this.setState({Id})}
            />
            <Button
              onPress={() => {
                Alert.alert('Deleted');

                fetch(
                  `${Config.api_domain}/api/hospitals/id/${this.state.Id}`,
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
                  })
                  .catch(error => {});
              }}
              title="Delete By Id"
            />
          </View>
          <Text style={styles.text}> Delete Hospital By City</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter City"
            City={this.state.City}
            onChangeText={City => this.setState({City})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/city/${this.state.City}`,
                {
                  method: 'Delete',
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
            title="Delete By City"
          />
          <Text style={styles.text}> Delete Hospital By State</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter State"
            State={this.state.State}
            onChangeText={State => this.setState({State})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/state/${this.state.State}`,
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
            title="Delete By state"
          />
          <Text style={styles.text}> Delete Hospital By County</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter County"
            County={this.state.County}
            onChangeText={County => this.setState({County})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/county/${
                  this.state.County
                }`,
                {
                  method: 'Delete',
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
            title="Delete By county"
          />
          <Text style={styles.text}> Delete Hospital By City & State</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter City"
            Citys={this.state.CityS}
            onChangeText={CityS => this.setState({CityS})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter State"
            StateS={this.state.StateS}
            onChangeText={StateS => this.setState({StateS})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/statecity/${
                  this.state.StateS
                }/${this.state.CityS}`,
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
            title="Delete By state&city"
          />
          <Text style={styles.text}> Delete Hospital By Name</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Name"
            Name={this.state.Name}
            onChangeText={Name => this.setState({Name})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/name/${this.state.Name}`,
                {
                  method: 'GET',
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
            title="Delete By name"
          />
          <Text style={styles.text}> Delete Hospital By Type</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Type"
            Type={this.state.Type}
            onChangeText={Type => this.setState({Type})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/type/${this.state.Type}`,
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
            title="Delete By type"
          />
          <Text style={styles.text}>Delete Hospital By Ownership</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Owner"
            Owner={this.state.Owner}
            onChangeText={Owner => this.setState({Owner})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/ownership/${
                  this.state.Owner
                }`,
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
            title="Delete By ownership"
          />
          <Text style={styles.text}> Delete Hospital By Emergency</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Emergency Status"
            Emergency={this.state.Emergency}
            onChangeText={Emergency => this.setState({Emergency})}
          />
          <Button
            onPress={() => {
              fetch(
                `${Config.api_domain}/api/hospitals/emergency/${
                  this.state.Emergency
                }`,
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
            title="Delete By emergency"
          />
          <Text style={styles.text}>
            {' '}
            Delete Hospital By Longitude&Latitude
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Longitude"
            Longitude={this.state.Longitude}
            onChangeText={Longitude => this.setState({Longitude})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter Latitude"
            Latitude={this.state.Latitude}
            onChangeText={Latitude => this.setState({Latitude})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter Distance"
            Distance={this.state.Distance}
            onChangeText={Distance => this.setState({Distance})}
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
export default delPage;
