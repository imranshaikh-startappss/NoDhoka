import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-paper'

const CallerCard = () => {

  return (<>
    <Card style={styles.container}>
      <View>
        <View style={styles.head}>
          <View style={styles.profile2}>
            <Text style={styles.profile}>
              
              <Text >S</Text>
            </Text>
            <View>
            <Text style={styles.profile1}>Name OF Contact</Text>
            <Text>{"Incoming" || "Outgoing"}</Text>
            </View>
          </View>
          <Image style={styles.callicon} source={require('./calliconpng.png')} />

        </View>
      </View>
    </Card>
  </>

  )
}
const styles = StyleSheet.create({
  container: {
    // display:"flex",
    top: 15,
    backgroundColor: '#fff'

  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  profile: {
    // borderWidth:1,
    width: "22%",
    left: 10,
    height: 50,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 35,
    fontWeight: '700',
    backgroundColor: "#00FA9A",
  },
  profile1: {
    // width: '40%',
    textAlignVertical: 'center',
  },

  callicon: {
    width: '13%',
    height: 50,
    right: 10,

  }

});

export default CallerCard