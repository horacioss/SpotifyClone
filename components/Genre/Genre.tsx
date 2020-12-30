import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';
import {GenrePropsList} from '../../types';
import {getGenreList} from '../../hooks/getData';
import Layout from '../../constants/Layout';

const WIDTH = Layout.window.width

const styles = StyleSheet.create({
  container: {
    width: WIDTH * 0.4,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: WIDTH * 0.4,
  },
  text: {
    color: "gray",
    fontSize: 14,
    marginBottom: 5
  }
});


type GenreProps = {
  name: string;
  picture: string;
}


const GenreView = ({name, picture}: GenreProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: picture}} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <GenreView name={item.name} picture={item.picture} />
  );
};


/* export Genre Component */
export default () => {
  const [genres, setGenres] = React.useState<GenrePropsList[]>([])
  
  React.useEffect(() => {

    const fetchGenre = async () => {
      setGenres(await getGenreList());
    }

    fetchGenre();

  }, []);

  return (
    <View style={{paddingLeft: 16}}>
      <Text style={{fontSize: 20, color: "white", paddingBottom: 10, fontWeight:"bold"}}>Generos</Text>
      <FlatList data={genres} keyExtractor={(item) => item.id} horizontal={true} renderItem={renderItem} />
    </View>

  );
}

