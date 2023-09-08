import React, { useState, useEffect } from 'react'
import { View , SafeAreaView,ScrollView,} from 'react-native'
import LogCard from './LogCard'
import { useTheme } from '../../hooks';
import { PermissionsAndroid } from 'react-native';
import CallLogs from 'react-native-call-log-advanced';


const CallLog = () => {
  const {
    Images,
  } = useTheme();
  const [callData, setCallData] = useState([])

  const fetchCallLog = async()=>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: 'Call Log Example',
          message:
            'Access your call logs',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(CallLogs);
        CallLogs.load(30).then((c:any) => {
          console.log(c)
          setCallData(c)});
      } else {
        console.log('Call Log permission denied');
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  
useEffect(()=>{
  fetchCallLog()
},[])

return ( 
  <>
  <SafeAreaView >
  <ScrollView> 
  {callData.map((currElm:any)=>{
    return (
    <LogCard name = {currElm.name || currElm.phoneNumber} callType={currElm.type} time={currElm.dateTime} imgSource = {Images.sparkles.callIconPng} />
 ) })}
      </ScrollView>
    </SafeAreaView>
    {/* <LogCard name = 'Name of The contact' callType="incoming" time='time' imgSource = {Images.sparkles.callIconPng}/> */}
    </>
  )
}

export default CallLog