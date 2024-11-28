import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../src/styles/globalStyles';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Assistant</Text>
      <Text style={styles.subtitle}>Your Journey Starts Here</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/travelList')}>
        <Text style={styles.buttonText}>View Travel List</Text>
      </TouchableOpacity>
    </View>
  );
}
