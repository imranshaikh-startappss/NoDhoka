import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
import { Card } from 'react-native-paper'

const LogCard = () => {
  return (
  
  <Card style={styles.container}>
  <View style={styles.row}>
    <View style={styles.gridItem} ><Text style={styles.gridItem4}>A</Text></View>
    <View style={styles.gridItem1} ><Text style={styles.gridItem3}>{"Incoming" || "Outgoing"}</Text></View>
    <Image  style={styles.gridItem2} source={require('../Card1/calliconpng.png')} />
  </View>
 
</Card>
  )
}
const styles = StyleSheet.create({
  container: {
    top:15,
    width:"98%",
     left:5,
    height:"8%"
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  gridItem: {
    width: "15%",
    left: 10,
    height:58,
    top:2,
    borderRadius: 30,
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 35,
    fontWeight: '700',
    backgroundColor: "#00FA9A",
    

  },
  gridItem1:{
    top:8,
    right:60,
    fontWeight:"800"
  },
   gridItem2:{
    display:"flex",
    justifyContent:"center",
    height:40,
    width:40,
    right:20,
    top:8,
  },
  gridItem3:{
    fontWeight:"600",
    fontSize:20,
    right:15, 
  },
  gridItem4:{
    textAlignVertical:"center",
    textAlign:"center",
    top:6,
    fontSize:30,
    },
 
       
}); 
export default LogCard;