import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import jsondata from './SubTabs.json';
import { Button } from 'react-native-paper';

const SubTabInbox = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentRow}>
          {jsondata.persons.map(data => (
            <View style={styles.columnContainer} key={data.id}>
              <Image
                style={styles.Icon}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMVisatEwM0Sh1n26GCuPtaQ_xCGBMkTsBYIhZJauQ31ZgVmxHDl_iQi4V4uH6mRbshs&usqp=CAU',
                }}
              />
              {/* {data.id} */}

              <Text style={styles.Message}>{data.name}</Text>
              <Text style={styles.Notification}>{data.notify}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentRow: {
    flexDirection: 'column',
    height: 'auto',
  },
  columnContainer: {
    marginRight: 16,
    backgroundColor: 'white',
    padding: 8,
    flexDirection: 'row',
    width: '100%',
  },
  Icon: {
    textAlign: 'center',
    marginBottom: 6,
    width: '14%',
    height: 45,
    // borderWidth: 1,
    padding: 10,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // marginBottom:6
  },
  Message: {
    textAlign: 'center',
    marginBottom: 6,
    width: '66%',
    fontSize: 19,
    // borderWidth: 1,
  },
  Notification: {
    textAlign: 'center',
    marginBottom: 6,
    width: '20%',
    // borderWidth: 1,
    // marginBottom:6
  },
});

export default SubTabInbox;
