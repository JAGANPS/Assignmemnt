/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, Button} from 'react-native';

export default class InfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Company Info"
          onPress={() =>
            alert(
              'Company: Geeksynergy Technologies Pvt Ltd \nAddress: Sanjayanagar, Bengaluru-56 \nPhone:XXXXXXXXX09 \nEmail: XXXXXX@gmail.com',
            )
          }></Button>
      </View>
    );
  }
}
