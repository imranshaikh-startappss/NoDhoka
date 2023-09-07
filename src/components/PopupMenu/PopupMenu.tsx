import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, PaperProvider, Divider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {
    console.log('open');
    setVisible(true);
  };

  const closeMenu = () => {
    console.log('close');
    setVisible(false);
  };

  return (
    <PaperProvider>
      <View>
        <Menu
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: '-100%',
            zIndex: 2,
          }}
          theme={{ colors: { primary: 'black' } }}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              style={{
                //position: 'absolute',
                right: 40,
              }}
              onPress={openMenu}
              // icon="dots-vertical"
              icon={require('../../theme/assets/images/Set.png')}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
          <Divider />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;

// import React, { useState } from 'react';
// import { Divider } from 'react-native-paper';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
// } from 'react-native';

// const MyComponent = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setPopupVisible(!isPopupVisible);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={togglePopup}>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={togglePopup}>
//           <Image
//             source={require('../../theme/assets/images/Set.png')}
//             style={styles.image}
//           />
//         </TouchableOpacity>

//         <Modal
//           transparent={true}
//           visible={isPopupVisible}
//           animationType="slide"
//         >
//           <TouchableWithoutFeedback onPress={closePopup}>
//             <View style={styles.overlay}>
//               <View style={styles.popup}>
//                 <TouchableOpacity>
//                   <Text>Option 1</Text>
//                 </TouchableOpacity>
//                 <Divider />
//                 <TouchableOpacity>
//                   <Text>Option 2</Text>
//                 </TouchableOpacity>
//                 <Divider />
//                 <TouchableOpacity>
//                   <Text>Option 3</Text>
//                 </TouchableOpacity>
//                 <Divider />
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </Modal>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // alignItems: 'center',
//     right: 18,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   popup: {
//     backgroundColor: 'white',
//     padding: 40,
//     borderRadius: 5,
//     elevation: 0,
//   },
// });

// export default MyComponent;
