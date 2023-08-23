// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';



// const Login= () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // For testing purposes, let's assume any non-empty username and password is a successful login
//     if (username && password) {
//       try {
//         // Set user token in AsyncStorage upon successful login
//         await AsyncStorage.setItem('userToken', 'fakeUserToken');
        
//         console.log('Login successful');
//        navigation.navigate('BottomNavigation' as never);
       
//       } catch (error) {
//         console.error('Error saving user token:', error);
//       }
//     } else {
//       console.log('Invalid login credentials');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleText}>Login Screen</Text>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <TouchableOpacity onPress={handleLogin} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   titleText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 8,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Login;
