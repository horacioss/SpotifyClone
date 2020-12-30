import React from "react";
import { Image, StyleSheet, Text, Dimensions, TouchableOpacity, View, ViewStyle } from "react-native";
import { EvilIcons, Foundation } from "@expo/vector-icons";
import Player from "../Player/Player";


const HEIGHT = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "red",
    flex: 1,
  },
  container: {
    flex: 1,
    height: 60,
    width:"100%",
    position: "absolute",
    bottom: 49,
    backgroundColor: "#282828",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
    zIndex: 1,
    borderBottomWidth: 1,
    borderColor: "#222"
  },
  sonCover: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  songName: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
  },
  artistName: {
    color: "#808080"
  }
});

interface MiniPlayerProps {
  onPress: () => void;
  styling: ViewStyle;
};

export default ( {onPress, styling}: MiniPlayerProps ) => {

  return (
    <View style={[styles.container, styling]} >
        <View style={{flexDirection: "row", alignItems: "center"}} >
          <TouchableOpacity {...{onPress}} style={{flexDirection: "row", alignItems: "center"}}>
          <Image style={styles.sonCover} source={{uri: "https://img.discogs.com/mZvYl9EZPF7fH7Gqlvord9i1Abc=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12740360-1541234976-7873.jpeg.jpg"}} />
          <View>
            <Text style={styles.songName}>Gangsta's Paradise</Text>
            <Text style={styles.artistName}>Coolio</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: "space-between", width: 70, flexDirection: "row"}}>
          <EvilIcons name="heart" color="white" size={30} />
          <Foundation name="play" color="white" size={25} />
        </View>
        {/*<Player onPress={() => setShowPlayer(false)} sty={{transform: [{translateY}]}} />*/}
      </View>

  );
};

