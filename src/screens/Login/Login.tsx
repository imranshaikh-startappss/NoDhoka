
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTheme } from '../../hooks';

const Login = ( { navigation }: ApplicationScreenProps) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const phoneInput = useRef<PhoneInput | null>(null);

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
            <ImageBackground source={Images.sparkles.loginsc} style={styles.imageBackground}>
      <SafeAreaView>
        <PhoneInput 
          ref={phoneInput}
          containerStyle={{ backgroundColor: 'none'}}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          textContainerStyle={{ backgroundColor: 'transparent'}}
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
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default Login;
