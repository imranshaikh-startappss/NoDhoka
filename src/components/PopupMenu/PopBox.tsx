// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, Button } from 'react-native';
// import PopupMenu from './PopupMenu'; // Import your popup component

// const Pop = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setPopupVisible(!isPopupVisible);
//   };

//   const openMenu = () => {
//     console.log('open');
//     setVisible(true);
//   };

//   const closeMenu = () => {
//     console.log('close');
//     setVisible(false);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <TouchableOpacity onPress={togglePopup}>
//         {/* <Text>Show Popup</Text> */}
//         <Button
//           style={{
//             //position: 'absolute',
//             right: 40,
//           }}
//           onPress={openMenu}
//           // icon="dots-vertical"
//           icon={require('../../theme/assets/images/Set.png')}
//         />
//       </TouchableOpacity>

//       <PopupMenu visible={isPopupVisible} onClose={togglePopup} />
//     </View>
//   );
// };

// export default Pop;
