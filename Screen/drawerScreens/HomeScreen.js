/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  async componentDidMount() {
    try {
      await fetch('https://hoblist.com/movieList', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'movies',
          language: 'telugu',
          genre: 'all',
          sort: 'voting',
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }
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
