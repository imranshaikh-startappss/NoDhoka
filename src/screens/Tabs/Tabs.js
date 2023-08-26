//
import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import SubTabInbox from '../SubTabs/SubTabInbox';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <SubTabInbox />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <SubTabInbox />

  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
       <SubTabInbox />

  </View>
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
       <SubTabInbox />

  </View>
);

const renderScene = SceneMap({
  inbox: FirstRoute,
  highlights: SecondRoute,
  promo: ThirdRoute,
  spam: FourthRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inbox', title: 'Inbox' },
    { key: 'highlights', title: 'Highlights' },
    { key: 'promo', title: 'Promo' },
    { key: 'spam', title: 'Spam' },
  ]);
  // console.log(routes.title)

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     color: '#0059FF',
//   },
// });
