import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewListPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make New List</Text>
      {/* Add form components to create a new grocery list */}
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

export default NewListPage;
