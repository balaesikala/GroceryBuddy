import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BudgetStatusPage = ({ navigation }) => {
  // Dummy data for budget status
  const budgetStatus = {
    totalBudget: 1000,
    spent: 750,
    remaining: 250,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Status</Text>
      <Text>Total Budget: ${budgetStatus.totalBudget}</Text>
      <Text>Spent: ${budgetStatus.spent}</Text>
      <Text>Remaining: ${budgetStatus.remaining}</Text>
      {/* Add button to navigate to settings page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#0A98A9', // Dark blue-green color
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BudgetStatusPage;
