import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


const Headings = () => {
  return (<View style={styles.container}>
    <Text>Switch to Full Screen Caller </Text>
    <Text>ID.</Text>
    <Text style={styles.spacing}>A great new Caller ID experience</Text> 
    <Text >without any popups.</Text>
    <Text style={styles.spacing}>Truecaller needs to be set as default phone app.</Text>
  </View>

  )
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    left: 5
  },
  spacing: {
    top: 3,
  }

})

export default Headings