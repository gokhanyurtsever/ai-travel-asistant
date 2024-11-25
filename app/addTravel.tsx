import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useTravelContext } from '../src/context/TravelContext';
import styles from '../src/styles/globalStyles';

export default function AddTravel() {
  const [destination, setDestination] = useState('');
  const { addTravel } = useTravelContext();

  const handleAddTravel = () => {
    addTravel({ destination });
    setDestination('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Add Travel" onPress={handleAddTravel} />
    </View>
  );
}