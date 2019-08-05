import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/component/PlaceInput/PlaceInput';
import PlaceList from './src/component/PlaceList/PlaceList';
import placeImage from './src/assets/nature_fields_tree.jpg';

export default class App extends Component {
  state = {
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  submitAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeleteHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.submitAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
});
