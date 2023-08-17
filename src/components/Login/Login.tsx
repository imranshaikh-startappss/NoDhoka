
import React, { useState, useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { ApplicationScreenProps } from '../../../@types/navigation';



const Login = ( { navigation }: ApplicationScreenProps) => {

  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const phoneInput = useRef<PhoneInput | null>(null);
  // const navigation = useNavigation();

  const handleValidation = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    
    if (checkValid) { 
      Alert.alert('Message', 'OTP has been sent to your mobile number', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Main',{
            screen:"Home"
          }), 
        },
      ]);
    }
  };
  

  return (
    <View style={styles.MainContainer}>
      <SafeAreaView>
        <PhoneInput 
        
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
            setValid(false);
            setShowMessage(false); 
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        {showMessage && !valid && (
         <Text style={styles.errormessage}>Please enter valid phone number</Text>
        )} 
        <TouchableOpacity onPress={handleValidation} style={styles.button}>
          <Text style={styles.text} >Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  errormessage: {
    color: 'red',
    fontSize:12
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop:20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Login;
