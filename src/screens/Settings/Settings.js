import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import JsonFile from './Settings.json';

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
          <Image
            style={styles.backBtn}
            source={require('../../theme/assets/images/arrowI.png')}
          />
          <Text style={styles.settingsHeading}>Settings</Text>
        </View>
        <View style={styles.allContent}>
          {JsonFile.map((data, index) => {
            return (
              <View key={index} style={styles.rowAlign}>
                <Image 
                style={styles.icon} 
                // width={4} 
                // fontSize={3} 
                // paddingLeft={5}
                source={{ uri :data.Icon}}
                />
                  {/* {data.Icon} */}
                
                <Text style={styles.item}>{data.button} </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor:'#ffffff'
  },
  settingsHeading: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft:16
  },
  backBtn:{
    // flex:1,
    left:5,
    top:5,
    width: 20,
    height: 20,
  },
  heading: {
    // flex:1,
    flexDirection:'row',
    // width:'auto',
    // flexWrap:'wrap',

    // padding: 24,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  allContent: {
    // flex:1,
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 15,
    marginBottom: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingLeft: 24,
    paddingTop:7,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 7,
    width: '75%',
    height: 50,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
    icon:{
      // backgroundColor:'red',
      // width: '20%',
      // height: 50,
      // paddingBottom: 4,
      // paddingLeft: 54,
      // fontSize: 15,
      // marginTop: 5,
      paddingLeft: 24,
    paddingTop:7,
    // fontSize: 15,
    marginTop: 5,
    marginBottom: 7,
    width: '12%',
    height: 40,
    // borderBottomColor: '#E6E6E6',
    // borderBottomWidth: 1,
    justifyContent: 'center',
    },
  rowAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: 'lightgray',
  },
});
export default Settings;
