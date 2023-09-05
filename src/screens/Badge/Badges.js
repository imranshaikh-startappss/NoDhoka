import * as React from 'react';
import { Badge } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

const Badges = () => (
  <>
  <View style={styles.container}>
  <Badge style={styles.badge}>N</Badge>
  </View>
  
  </>
);

const styles = StyleSheet.create({
  container:{
    position:"relative",
    margin:0

  },
  badge:{
    position:"absolute",
    justifyContent:"flex-start",

    
  }
})

export default Badges;