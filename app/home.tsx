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
      <TouchableOpacity onPress={() => router.push('/travelList' as any)}>
  <Text style={{ color: 'red' }}>View Travel List</Text>
      </TouchableOpacity>
    </View>
  );
}