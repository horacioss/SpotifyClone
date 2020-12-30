import * as React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Album from '../components/Album/Album';
import Genre from '../components/Genre/Genre';


import { View } from '../components/Themed';
import Layout from '../constants/Layout';
import {LinearGradient} from 'expo-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons';

const HEIGHT = Layout.window.height;


const album = {
  id: 1,
  title: "Break Heart",
  cover: "https://www.elquintobeatle.com/wp-content/uploads/2020/07/taylor-swift-2020-1-1068x1068.jpg",
  numberTracks: 8,
  contributors: ["Taylor Swift", "Dua Lipa"]
}




export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.root}>
        <ScrollView>
          <LinearGradient
            colors={["#9C9DA8", "#343B40", "#282929", "#121212"]} 
            start={{x: -0.7, y: 0}} 
            end={{x: 0, y: 0.2}}
            style={[styles.gradient, StyleSheet.absoluteFill]}
          />
          <View style={styles.header}>
            <Text style={styles.greeting}>Good Morning</Text>
            <EvilIcons name="gear" size={30} color="#fff"/> 
          </View>
          <Album album={album} />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
        </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  gradient: {
    flex: 1
  },

  container: {
    width: "100%",
    alignItems: "center",
  },
  
  header: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 30 + 27,
    marginBottom: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between"
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },

});
