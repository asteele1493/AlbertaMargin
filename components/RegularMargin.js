import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#CCF1FF",
  },
  row: {
    marginBottom: 16,
  },
});

export default RegularMargin = () => {
  const [quantity, setQuantity] = useState("");
  const [casePrice, setCasePrice] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [price, setPrice] = useState("");

  // Helper function to check if a value is numeric
  // const isNumeric = (value) => {
  //   return /^\d+$/.test(value);
  // };

  const calculateValues = () => {
    if (quantity && casePrice) {
      const costPerUnit = (
        parseFloat(casePrice) / parseFloat(quantity)
      ).toFixed(2);
      const price = (costPerUnit / 0.6).toFixed(2);

      setCostPerUnit(costPerUnit);
      setPrice(price);
    } else {
      setCostPerUnit("0.00");
      setPrice("0.00");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Regular Price, 40% Margin</Text>
        <TextInput
          label="Quantity"
          value={quantity}
          onChangeText={(input) => {
            // Only update the quantity state if the input is numeric or empty
            if (/^[+]?\d*(\.\d*)?$/.test(input)) {
              setQuantity(input);
            } else {
              setQuantity(""); // Set to empty string if the input is invalid
            }
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          label="Case Price"
          value={casePrice}
          onChangeText={(input) => {
            // Only update the casePrice state if the input is numeric or empty
            if (/^[+]?\d*(\.\d*)?$/.test(input)) {
              setCasePrice(input);
            } else {
              setCasePrice(""); // Set to empty string if the input is invalid
            }
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput label="Cost Per Unit" value={costPerUnit} disabled />
      </View>
      <View style={styles.row}>
        <TextInput label="Price" value={price} disabled />
      </View>
    </View>
  );
};
