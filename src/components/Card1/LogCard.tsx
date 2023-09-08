import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { callType } from 'react-native-call-log-advanced';
import { Card } from 'react-native-paper'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const LogCard = (props: any) => {
  let { name, imgSource, callType, time } = props

  const capitalize = (word:any)=>{
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)

  }
  callType = capitalize(callType)
  
  let callIconType = `phone-${callType.toLowerCase()}`

  if(callType === 'Unknown'){
    callIconType = 'phone-remove'
    callType = 'Rejected'
  }

  const iconColor = (type: any)=>{
    if(type === 'Rejected' || type === 'Missed'){
      return styles.missedCall
    }
  }

  


 
  return (

    <Card style={styles.container}>
      <View style={styles.row}>
        <View style={styles.gridItem} ><Text style={styles.gridItem4}>{name.charAt(0)}</Text></View>

        <View style={styles.gridItem1} ><Text style={styles.gridItem3}>{name}</Text> 
          <View style={styles.gridItem5}> <MaterialCommunityIcons style={[styles.gridItem8,iconColor(callType)]} name={callIconType}/><Text style={styles.gridItem7}>{callType}</Text><Text style={styles.gridItem6}>{time} </Text></View>
        </View>
        <MaterialCommunityIcons name="phone-outline" style={styles.gridItem2} />
      </View>

    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    top: 15,
    width: "98%",
    left: 5,
  height:80
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  gridItem: {
    width: "15%",
    left: 10,
    height: 58,
    top: 2,
    borderRadius: 30,
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 35,
    fontWeight: '700',
    backgroundColor: "#00FA9A",


  },
  gridItem1: {
    top: 8,
    right: 10,
    display:"flex",
    justifyContent:"flex-start",

    fontWeight: "800"
  },
  gridItem2: {
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    right: 10,
    textAlignVertical: 'center'
  },
  gridItem3: {
    left: 3,
    fontWeight: "600",
    fontSize: 20,
  },
  gridItem4: {
    textAlignVertical: "center",
    textAlign: "center",
    top: 5,
    fontSize: 30,
  },
  gridItem5: {
    flexDirection: 'row',
    flexWrap: "wrap",
    left:10,
    alignItems: 'center',



  },
  gridItem6: {
    left: 20,
    display:"flex",
    justifyContent:'center',
    textAlignVertical: 'center',

  },
  gridItem7: {
    left: 10,
    display:"flex",
    justifyContent:'center',
    textAlignVertical: 'center',

  },
  gridItem8: {
    // textAlignVertical: 'center',
    // fontSize:12,
    // top:8,
   
  },
  missedCall : {
    color: 'red'
  },
  incoming:{
    color: 'black'
  }


});
export default LogCard;