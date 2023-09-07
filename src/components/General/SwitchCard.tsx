import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

const SwitchCard = ({ switchValue, handleSwitchChange, card }: any) => {
  return (
    <View>
      <View style={styles.switchContainer}>
        <Text style={styles.radioText}>{card.content}</Text>
        <Switch value={switchValue} onValueChange={handleSwitchChange} />
      </View>
      {card.subtitle && <Text style={styles.subtitle}>{card.subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  radioText: {
    fontSize: 16,
  },

  subtitle: {
    fontSize: 12,
    top: 8,
  },
});

export default SwitchCard;
