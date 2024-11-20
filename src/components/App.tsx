import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import styles from './../styles/globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Travel Assistant</Text>
        <Text style={styles.subtitle}>Your Journey Starts Here</Text>
      </View>
    </View>
  );
}





