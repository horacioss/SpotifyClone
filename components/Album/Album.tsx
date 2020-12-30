import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {AlbumPropsList} from "../../types";

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  imageAlbum: {
    width: "100%",
    height: 200,
  },
  textAlbum: {
    color: "gray",
    fontSize: 16,
    marginBottom: 10
  }
});

export type AlbumProps = {
  album: AlbumPropsList
};

export default (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textAlbum}>{props.album.title}</Text>
      <Image source={{ uri: props.album.cover}} style={styles.imageAlbum} />
    </View>
  );
};


