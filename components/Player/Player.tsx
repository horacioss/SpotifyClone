import {LinearGradient} from "expo-linear-gradient";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import Constants from "expo-constants";

import Shuffle from "../Icons/Shuffle";
import Repeat from "../Icons/Repeat";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import { EvilIcons, Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import Next from "../Icons/Next";
import Previous from "../Icons/Previous";

const HEIGHT =  Layout.window.height;
const WIDHT = Layout.window.width;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
  },
  container: {
    height: HEIGHT + Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    width: WIDHT * 0.85,
  },

  topContainer: {
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  playerListTitle: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.dark.text,
  },

  coverContainer: {
    width: "100%",
    height: WIDHT* 0.85,
  },

  timerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  playerContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
 
  slider: {
    height: 3,
    borderRadius: 1.5,
    marginVertical: 10,
    backgroundColor: "#888",
    width: "100%",
    padding: 0,
  },

  playerControlsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }

});

interface PlayerProps {
  onPress: () => void;
  sty: ViewStyle;
}

export default ({onPress, sty}: PlayerProps) => {

  // const [up, setUp] = React.useState(false);
  // const UP = up? 0 : HEIGHT + Constants.statusBarHeight;

  return(
    <SafeAreaView style={[styles.root , sty, StyleSheet.absoluteFill]} >
      <LinearGradient
        colors={["rgba(87,76,92,1)", "#111"]} 
        start={{x: 0, y: 0}} 
        end={{x: 0, y:0.5}} 
        style={ StyleSheet.absoluteFill}
        />
      <View style={styles.container}>
 
      {/* Video Song */}
      {/*<Image style={[StyleSheet.absoluteFill, {height: HEIGHT * 0.9}]} source={{ uri: "https://img.discogs.com/mZvYl9EZPF7fH7Gqlvord9i1Abc=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12740360-1541234976-7873.jpeg.jpg" }} />*/}
     
      {/* Top Options */}
      <View style={styles.topContainer}>
      <EvilIcons name="chevron-down" size={35} color={Colors.dark.tint} {...{onPress}} />
        <View>
          <Text style={[styles.playerListTitle, {fontWeight: "bold"}]}>From MyPLayList</Text>
          <Text style={styles.playerListTitle}>Coolio</Text>
        </View>
        <SimpleLineIcons name="options-vertical" size={15} color={Colors.dark.tint}/>
      </View>

      {/* Song Cover */}
      <View style={styles.coverContainer}>
        <Image  style={{width: "100%", height: "100%"}} source={{uri: "https://img.discogs.com/mZvYl9EZPF7fH7Gqlvord9i1Abc=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12740360-1541234976-7873.jpeg.jpg"}} />
      </View>

      {/* Palyer Container */}
      <View style={styles.playerContainer}>
        <View style={{ marginVertical: 10, width: "100%", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
          <View>
            <Text children="Gangsta's Paradise" style={{fontSize: 16, color: "#fff"}}/>
            <Text children="Coolio" style={{fontSize: 14, color: "#888"}}/>
          </View>
          <EvilIcons name="heart" size={25} color={Colors.dark.tint}/> 
        </View>
        <View style={styles.slider} />
        <View style={styles.timerContainer}>
          <Text children="2:26" style={{fontSize: 12, color: "#fff"}}/>
          <Text children="-1:07" style={{fontSize: 12, color: "#fff"}}/>
        </View>
        <View style={styles.playerControlsContainer}>
          <Shuffle />
          <Previous />
          <Ionicons name="ios-play-circle" size={62} color="white" />
          <Next />
          <Repeat />
        </View>
        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
          <MaterialIcons name="devices" size={24} color="white" />
          <MaterialIcons name="playlist-play" size={24} color="white" />
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};
