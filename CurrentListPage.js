import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentListPage = () => {
  // Dummy data for current grocery list
  const groceryItems = [
    { name: 'Apples', quantity: 5 },
    { name: 'Bananas', quantity: 10 },
    { name: 'Milk', quantity: 2 },
    { name: 'Bread', quantity: 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Grocery List</Text>
      {groceryItems.map((item, index) => (
        <Text key={index}>{item.name} - Quantity: {item.quantity}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3E3E3', // Light green background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0A98A9', // Dark blue-green color
  },
});

export default CurrentListPage;
