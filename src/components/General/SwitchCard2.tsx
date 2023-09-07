import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

const SwitchCard = ({ card }: any) => {
  return (
    <View>
      <View style={styles.switchContainer}>
        <Text style={styles.radioText}>{card.content}</Text>
        <Switch />
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
    fontSize: 10,
    top: 8,
  },
});

export default SwitchCard;
