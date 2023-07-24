import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RegularMargin from './components/RegularMargin';
import BerryMargin from './components/BerryMargin';
import SaleMargin from './components/SaleMargin';


export default App = () => {
  return (
    <ScrollView>
    <View>
    <Text>Margin Calculator</Text>
    <RegularMargin/>
    <BerryMargin/>
    <SaleMargin/>
    </View>
    </ScrollView>
  )
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'left',
  },
  row: {
    marginVertical: 8,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontStyles: 'italic' ,
    fontSize: 28,
    fontWeight: 'bold',
  }
});