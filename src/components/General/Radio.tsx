import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioCard = ({ selectedOption, handleOptionChange, index }: any) => {
  return (
    <View style={styles.radioGroup}>
      <View style={styles.radioButton}>
        <Text style={styles.radioText}>Calls</Text>
        <RadioButton
          value={`option${index + 1}`}
          status={
            selectedOption === `option${index + 1}` ? 'checked' : 'unchecked'
          }
          onPress={() => handleOptionChange(`option${index + 1}`)}
        />
      </View>

      <View style={styles.radioButton}>
        <Text style={styles.radioText}>Messages</Text>
        <RadioButton
          value={`option${index + 2}`}
          status={
            selectedOption === `option${index + 2}` ? 'checked' : 'unchecked'
          }
          onPress={() => handleOptionChange(`option${index + 2}`)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    top: -12,
  },
  radioText: {
    fontSize: 16,
  },
});

export default RadioCard;
