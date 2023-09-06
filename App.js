import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import RegularMargin from './components/RegularMargin';
import BerryMargin from './components/BerryMargin';
import SaleMargin from './components/SaleMargin';
import FortyFiveMargin from './components/FortyFiveMargin';
import FiftyMargin from './components/FiftyMargin';



export default App = () => {
  return (
    <ScrollView>
    <View>
    <Header/>
    <FortyFiveMargin/>
    <RegularMargin/>
    <BerryMargin/>
    <SaleMargin/>
    <FiftyMargin/>
    </View>
    </ScrollView>
  )
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'left',
    width: "100%",
  height:'100%',
  alignItems: "center",
  },
  row: {
    marginVertical: 8,
  },
  scrollView: {
    backgroundColor: '7eaba2',
    marginHorizontal: 20,
    flexGrow: 1,
    alignItems: "center",
  },
  text: {
    fontStyles: 'italic' ,
    fontSize: 28,
    fontWeight: 'bold',
  }
});
