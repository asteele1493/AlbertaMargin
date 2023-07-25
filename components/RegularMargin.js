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

    if (quantity && casePrice) {
      const costPerUnit = (parseFloat(casePrice) / parseFloat(quantity)).toFixed(2);
      const price = (costPerUnit / (1 - 0.40)).toFixed(2);

      setCostPerUnit(costPerUnit);
      setPrice(price);
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
            if (isNumeric(text)) {
              setQuantity(parseFloat(text));
            } else {
              setQuantity(0);
            }

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

            if (isNumeric(text)) {
              setCasePrice(parseFloat(text));
            } else {
              setCasePrice(0);
            }
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
