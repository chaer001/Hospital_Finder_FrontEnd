import React from 'react';
import {AppRegistry} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomePage from './screens/HomePage';
import HospPage from './screens/hospPage';
import HospAddPages from './screens/AddPage';
import ApiKeyPage from './screens/apiKeyPage';
import DeletePage from './screens/DeletePage';

AppRegistry.registerComponent('myApp', () => App);

// export default class App extends React.Component {
//   render() {
//     return <Application />
//   }
// }

const Application = createStackNavigator(
  {
    Home: HomePage,
    HospFind: HospPage,
    HospAddPage: HospAddPages,
    ApiPage: ApiKeyPage,
    DelPage: DeletePage,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const App = createAppContainer(Application);

export default App;
