import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
    ImageBackground
  } from 'react-native';
  import OTPInputView from '@twotalltotems/react-native-otp-input'
  import { useState,useEffect } from 'react';
import { useTheme } from '../../hooks';
import { Colors } from 'NoDhoka/src/theme/Variables';



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
    // console.log("hello")
    setSeconds(30)
  }
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
  } = useTheme();
  return (
    <>
    <View style={styles.otpconatiner}>
      <ImageBackground source={Images.sparkles.otplg} style={styles.imageBackground}>
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
    </ImageBackground>
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
      color:Colors.success
    },
  
    underlineStyleHighLighted: {
      borderColor:Colors.success,

    },
    otpconatiner: {
      backgroundColor:Colors.White,
      display:"flex",
      alignItems:"center",
      height:"100%",
      width:"100%",
    },
    otp: {
      backgroundColor:Colors.White,
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
      color:Colors.success,
    },
    textdisabletitle: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:Colors.grey,
    },
    text: {
      color:Colors.textGray800,
    },
    textdisable: {
      color:Colors.grey,
    },
    second: {
      color:Colors.success,
    },
    seconddisable: {
      color:Colors.grey,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',  
       width: '100%',
       height: '100%',
    },

})
export default OTP