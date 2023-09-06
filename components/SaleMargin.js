import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'; // Import StyleSheet from react-native
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#7eaba2',
  },
  row: {
    marginBottom: 16,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center', // You can adjust this to 'flex-start' or 'flex-end' as needed
    alignItems: 'center', // You can adjust this to 'flex-start' or 'flex-end' as needed
  },
});


export default SaleMargin = () => {
  const [quantity, setQuantity] = useState('');
  const [casePrice, setCasePrice] = useState('');

  // Helper function to check if a value is numeric
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  // Calculate the cost per unit and price
  const calculateValues = () => {
    if (isNumeric(quantity) && isNumeric(casePrice)) {
      const costPerUnit = casePrice / quantity;
      const price = costPerUnit / 0.70;
      return { costPerUnit, price };
    } else {
      return { costPerUnit: 0, price: 0 };
    }
  };

  const { costPerUnit, price } = calculateValues();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null} // Adjust behavior for Android if needed
      contentContainerStyle={styles.keyboardAvoidingContainer}
    >
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>30% Margin</Text>
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
    </KeyboardAvoidingView>
  );
};
