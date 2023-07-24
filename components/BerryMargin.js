import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'; // Import StyleSheet from react-native
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    marginBottom: 16,
  },
});

export default BerryMargin = () => {
  const [quantity, setQuantity] = useState('');
  const [casePrice, setCasePrice] = useState('');
  // const [costPerUnit, setCostPerUnit] = useState(0);

  // Helper function to check if a value is numeric
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  // Calculate the cost per unit and price
  const calculateValues = () => {
    if (isNumeric(quantity) && isNumeric(casePrice)) {
      const costPerUnit = casePrice / quantity;
      const price = costPerUnit / 0.65;
      return { costPerUnit, price };
    } else {
      return { costPerUnit: 0, price: 0 };
    }
  };

  const { costPerUnit, price } = calculateValues();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Berries Price, 35% Margin</Text>
        <TextInput
          label="Quantity"
          value={quantity.toString()}
          onChangeText={(text) => {
            if (isNumeric(text)) {
              setQuantity(parseFloat(text));
            } else {
              setQuantity(0);
            }
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          label="Case Price"
          value={casePrice.toString()}
          onChangeText={(text) => {
            if (isNumeric(text)) {
              setCasePrice(parseFloat(text));
            } else {
              setCasePrice(0);
            }
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          label="Cost Per Unit"
          value={costPerUnit.toFixed(2)}
          disabled
        />
      </View>
      <View style={styles.row}>
        <TextInput label="Price" value={price.toFixed(2)} disabled />
      </View>
    </View>
  );
};