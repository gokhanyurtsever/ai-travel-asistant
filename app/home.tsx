import React from 'react';
import { View, Text } from 'react-native';
import styles from '../src/styles/globalStyles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Assistant</Text>
      <Text style={styles.subtitle}>Your Journey Starts Here</Text>
    </View>
  );
}

