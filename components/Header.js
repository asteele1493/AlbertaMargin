import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'; // Import StyleSheet from react-native

export default Header = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.headerText}>Devon's Margin Calculator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDD4C8', // You can customize the background color
    paddingTop: 65,
    alignItems: 'center',
    padding:20,
  },
  headerText: {
    fontFamily: 'serif', // Use a monospace font, you can customize this
    fontSize: 20, // You can customize the font size
    fontWeight: 'bold',
    color: 'grey', // You can customize the text color
  },
});
