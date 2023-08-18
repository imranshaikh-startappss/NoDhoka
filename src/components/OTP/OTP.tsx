import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
  } from 'react-native';
  import OTPInputView from '@twotalltotems/react-native-otp-input'
  import { useState,useEffect } from 'react';
import colors from "../../Colors/Colors"


const OTP = () => {

  const [seconds, setSeconds] = useState(30);


  useEffect(() => {
      const interval = setInterval(() => {
        if(seconds>0){
          setSeconds(seconds -1)
        }
    }, 1000);

    return () => clearInterval(interval);
}, [seconds]);

  const ResendOTP =()=>{
    console.log("hello")
    setSeconds(30)
  }
  return (
    <>
    <View style={styles.otpconatiner}>
    <TouchableOpacity onPress={ResendOTP} style={styles.button} disabled = { (seconds == 0) ? false : true }>
     <Text style={(seconds == 0) ? styles.texttitlte : styles.textdisabletitle} >Resend OTP</Text>
   </TouchableOpacity>
   <Text style={(seconds == 0) ? styles.textdisable : styles.text}>OTP will send after : <Text style={(seconds == 0) ? styles.seconddisable : styles.second}>{seconds}</Text></Text>
    <OTPInputView
    style={styles.otp}
    pinCount={4}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
     console.log(`Code is ${code}, you are goo`)
    })}
    />
    </View>
   </>
  )

}
const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
    borderStyleHighLighted: {
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color:colors.green
    },
  
    underlineStyleHighLighted: {
      borderColor:colors.green,

    },
    otpconatiner: {
      backgroundColor:colors.White,
      display:"flex",
      alignItems:"center",
      height:"100%",
      width:"100%",
    },
    otp: {
      backgroundColor:colors.White,
      display:"flex",
      height:"100%",
      width:"60%",
    },
    button: {
      marginTop:120
    },
    texttitlte: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:colors.green,
    },
    textdisabletitle: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:colors.grey,
    },
    text: {
      color:colors.balck,
    },
    textdisable: {
      color:colors.grey,
    },
    second: {
      color:colors.green,
    },
    seconddisable: {
      color:colors.grey,
    },

})
export default OTP