export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

export type AlbumPropsList = {
  id: number;
  title: string;
  cover: string;
  numberTracks?: number;
  contributors?: string[];
};

export type GenrePropsList = {
  id: number;
  name: string;
  picture: string;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
