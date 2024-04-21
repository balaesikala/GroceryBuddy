import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {/* Buttons for grocery list, new list, and budget status */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CurrentList')}
      >
        <Text style={styles.buttonText}>Current Grocery List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewList')}
      >
        <Text style={styles.buttonText}>Make New List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BudgetStatus')}
      >
        <Text style={styles.buttonText}>Budget Status</Text>
      </TouchableOpacity>
      <Text style={styles.settingsLink} onPress={() => navigation.navigate('Settings')}>
        Settings
      </Text>
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
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
  settingsLink: {
    marginTop: 20,
    color: '#0A98A9', // Dark blue-green color
  },
});

export default Dashboard;
