import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Constants from "expo-constants";

import { Text, View } from '../components/Themed';
import Layout from '../constants/Layout';
import Svg, {Path, Stop, RadialGradient, Rect} from 'react-native-svg';

const WIDTH = Layout.window.width;
const MARGIN = 16

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>Search</Text>
      </View>
      <TextInput style={styles.searchBox}  placeholder="Artists, Songs or Podcasts" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: MARGIN,
  },
  searchBoxContainer: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 25,
  },
  searchBox: {
    width: "100%",
    height: MARGIN * 3,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 16,
  },
});
