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


export default RegularMargin = () => {
  const [quantity, setQuantity] = useState('');
  const [casePrice, setCasePrice] = useState('');
  const [costPerUnit, setCostPerUnit] = useState('');
  const [price, setPrice] = useState('');

  //Helper function to check if a value is numeric
  const isNumeric = (value) => {
    return /^[+]?\d+(\.\d+)?$/.test(value);
  };

  // Calculate the cost per unit and price
  const calculateValues = () => {
    if (isNumeric(quantity) && isNumeric(casePrice)) {
      const costPerUnit = casePrice / quantity;
      const price = costPerUnit / 0.60;
      setCostPerUnit(costPerUnit.toFixed(2));
      setPrice(price.toFixed(2));
    } else {
      setCostPerUnit('0.00');
      setPrice('0.00');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Regular Price, 40% Margin</Text>
        <TextInput
          label="Quantity"
          value={quantity.toString()}
          onChangeText={(text) => {
            setQuantity(text);
            calculateValues(); // Call the function whenever the quantity changes
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          label="Case Price"
          value={casePrice.toString()}
          onChangeText={(text) => {
            setCasePrice(text);
            calculateValues(); // Call the function whenever the casePrice changes
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
