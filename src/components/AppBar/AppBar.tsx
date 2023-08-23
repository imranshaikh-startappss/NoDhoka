import React from 'react';
import { View, TextInput, StyleSheet,Image } from 'react-native';
import { useTheme } from '../../hooks';
const AppBar = () => {
  const {
    Images,
    darkMode: isDark,
  } = useTheme();
  return (
    <View style={styles.container}>
     <Image
          style={[
            
            {
              // bottom: '-30%',
              // top:'35%',
              position: 'absolute', 
              top: 20, 
              left: 25,
               zIndex: 1,
              width: 20,
              height: 20,

            }
          ]}
          source={Images.sparkles.menu}
          resizeMode={'contain'}
        />
      <TextInput
        style={styles.searchInput}
        placeholder=" Search number,names & more"
        placeholderTextColor="#888"
      />

<Image
          style={[
            
            {
               right: 32,
            }
          ]}
          source={Images.sparkles.Set}
          resizeMode={'contain'}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
     paddingHorizontal: 10,
     paddingVertical: 12,
    left:'1.8%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },


  searchInput: {
    // flex: 1,
     backgroundColor: 'white',
     borderRadius: 4,
     textAlign:'center',
    //  paddingHorizontal: 12,
    //  paddingVertical: 8,
    //  marginHorizontal: 8,

    flex: 1,
    height: 40,
    zIndex: 0,
  },
});

export default AppBar;
