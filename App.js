import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native'; 
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';
import Main from './screens/Main';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Coffee from './screens/Coffee';
import Loading from './screens/Loading';
import { StackNavigator } from 'react-navigation';
import UserStore from './stores/UserStore'


const SimpleApp = StackNavigator({
  Main: { screen: Main },
  Signup: { screen: Signup },
  Login: { screen: Login },
  Loading: { screen: Loading }
});
 
export default class App extends React.Component {  
  
  render() {
    console.log(UserStore.user.firstName);
    return (
      <ThemeProvider uiTheme={uiTheme}>
         <SimpleApp screenProps={{ store: UserStore }} />
      </ThemeProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// you can set your style right here, it'll be propagated to application
const uiTheme = {
   palette: {
        primaryColor: COLOR.teal600,
        accentColor: COLOR.teal800,
    },
  toolbar: {
      container: {
          height: 150,
      },
  },
};

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);