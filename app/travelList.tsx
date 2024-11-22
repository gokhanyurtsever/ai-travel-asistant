import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../src/styles/globalStyles';

const dummyTravels = [
  { id: '1', destination: 'Paris' },
  { id: '2', destination: 'Tokyo' },
  { id: '3', destination: 'New York' },
];

export default function TravelList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Travels</Text>
      <FlatList
        data={dummyTravels}
        renderItem={({ item }) => <Text>{item.destination}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
