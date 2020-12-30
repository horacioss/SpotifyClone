import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MiniPlayer from './components/MiniPlayer/MiniPlayer';
import Player from './components/Player/Player';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Dimensions} from 'react-native';

const HEIGHT = Dimensions.get("window").height;

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [showPlayer, setShowPlayer] = React.useState(false);
  const translateY = showPlayer? 0 : HEIGHT+69;
  const hide = showPlayer? 0 : 1;
  const nowPlaying = true;

  console.log(showPlayer)
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        {
          nowPlaying? <MiniPlayer onPress={() => setShowPlayer(!showPlayer)} styling={{opacity: hide}} /> : null
        }
        <Player onPress={() => setShowPlayer(!showPlayer)} sty={{transform: [{translateY}]}} />
        <StatusBar backgroundColor="rgba(12,12,12,.3)"/>
      </SafeAreaProvider>
    );
  }
}
