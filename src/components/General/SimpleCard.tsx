import React from 'react';
import { Divider } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const SimpleCard = ({ title, content1, content2, content3 }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Shortcuts</Text>
      <Text style={styles.cardContent}>{content1}</Text>
      <Divider />
      <Text style={styles.cardContent}>{content2}</Text>
      <Divider />
      <Text style={styles.cardContent}>{content3}</Text>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    // marginBottom: 5,
    top: -10,
  },
  cardContent: {
    fontSize: 17,
    marginTop: 12,
  },
});

export default SimpleCard;
