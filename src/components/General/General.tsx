// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { RadioButton, Switch } from 'react-native-paper';

// const General = () => {
//   const [selectedOption, setSelectedOption] = useState('option1');
//   const [switchValue, setSwitchValue] = useState(false);

//   const handleOptionChange = value => {
//     setSelectedOption(value);
//   };

//   const handleSwitchChange = () => {
//     setSwitchValue(!switchValue);
//   };

//   const cardData = [
//     {
//       title: 'When NoDhoka starts show my:',
//       inputType: 'radio',
//     },
//     {
//       title: 'Auto search',
//       content: 'Copied numbers',
//       inputType: 'switch',
//       subtitle: ' Identify numbers that you copy outside NoDhoka app',
//     },
//     {
//       content: 'Profile view notifications',
//       inputType: 'switch',
//       subtitle: ' get a notification when someone views your profile',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={require('../../theme/assets/images/BackBtn.png')} // Replace with the actual image path
//           style={styles.backButton}
//         />
//         <Text style={styles.text}>General</Text>
//       </View>
//       {cardData.map((card, index) => (
//         <View style={styles.card} key={index}>
//           {card.title && (
//             <>
//               <Text style={styles.cardText}>{card.title}</Text>
//               <Text></Text>
//             </>
//           )}
//           {card.inputType === 'radio' ? (
//             <View style={styles.radioGroup}>
//               <View style={styles.radioButton}>
//                 <Text style={styles.radioText}>Calls</Text>
//                 <RadioButton
//                   value={`option${index + 1}`}
//                   status={
//                     selectedOption === `option${index + 1}`
//                       ? 'checked'
//                       : 'unchecked'
//                   }
//                   onPress={() => handleOptionChange(`option${index + 1}`)}
//                 />
//               </View>

//               <View style={styles.radioButton}>
//                 <Text style={styles.radioText}>Messages</Text>
//                 <RadioButton
//                   value={`option${index + 2}`}
//                   status={
//                     selectedOption === `option${index + 2}`
//                       ? 'checked'
//                       : 'unchecked'
//                   }
//                   onPress={() => handleOptionChange(`option${index + 2}`)}
//                 />
//               </View>
//             </View>
//           ) : (
//             // Switch button for the card
//             <View>
//               <View style={styles.switchContainer}>
//                 <Text style={styles.radioText}>{card.content}</Text>
//                 <Switch
//                   value={switchValue}
//                   onValueChange={handleSwitchChange}
//                 />
//               </View>
//               {card.subtitle && (
//                 <Text style={styles.subtitle}>{card.subtitle}</Text>
//               )}
//             </View>
//           )}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backButton: {
//     width: 30,
//     height: 30,
//     marginRight: 30,
//     right: 96,
//     top: -10,
//   },
//   text: {
//     fontSize: 20,
//     right: 100,
//     top: -10,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: -140,
//   },
//   card: {
//     width: 330,
//     // height: 150,
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 10,
//     shadowColor: 'rgba(0, 0, 0, 0.3)',
//     marginBottom: 20,
//   },

//   cardText: {
//     fontSize: 15,
//     marginBottom: 6,
//   },
//   radioGroup: {
//     marginTop: 10,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     top: -12,
//   },
//   radioText: {
//     fontSize: 16,
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   subtitle: {
//     fontSize: 10,
//     top: 8,
//   },
// });

// export default General;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RadioCard from './Radio';
import SwitchCard from './SwitchCard';
import SimpleCard from './SimpleCard';

const General = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [switchValue1, setSwitchValue1] = useState(false);
  const [switchValue2, setSwitchValue2] = useState(false);

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleSwitchChange1 = () => {
    setSwitchValue1(!switchValue1);
  };

  const handleSwitchChange2 = () => {
    setSwitchValue2(!switchValue2);
  };

  const cardData = [
    {
      title: 'When NoDhoka starts show my:',
      inputType: 'radio',
    },
    {
      title: 'Auto search',
      content: 'Copied numbers',
      inputType: 'switch',
      subtitle: 'Identify numbers that you copy outside NoDhoka app',
    },
    {
      content: 'Profile view notifications',
      inputType: 'switch',
      subtitle: 'Get a notification when someone views your profile',
    },
    {
      inputType: '',
      content1: 'Add messages shortcuts to Home',
      content2: 'Add contacts shortcuts to Home',
      content3: 'Add dailer shortcuts to Home',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../theme/assets/images/BackBtn.png')}
          style={styles.backButton}
        />
        <Text style={styles.text}>General</Text>
      </View>
      {cardData.map((card, index) => (
        <View style={styles.card} key={index}>
          {card.title && (
            <>
              <Text style={styles.cardText}>{card.title}</Text>
              <Text></Text>
            </>
          )}
          {card.inputType === 'radio' && (
            <RadioCard
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
              index={index}
            />
          )}
          {card.inputType === 'switch' && (
            <SwitchCard
              switchValue={index === 2 ? switchValue2 : switchValue1}
              handleSwitchChange={
                index === 2 ? handleSwitchChange2 : handleSwitchChange1
              }
              card={card}
            />
          )}
          {!['switch', 'radio'].includes(card.inputType) && (
            <SimpleCard
              title={card.title}
              content1={card.content1}
              content2={card.content2}
              content3={card.content3}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 30,
    height: 30,
    marginRight: 30,
    right: 110,
    top: -10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
  },

  card: {
    width: 330,
    // height: 150,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 20,
  },

  cardText: {
    fontSize: 15,
    marginBottom: 6,
  },

  text: {
    fontSize: 20,
    right: 120,
    top: -10,
  },
});

export default General;
