import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SettingsPage = () => {
  // State variables for profile settings
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle updating profile settings
  const handleSaveProfile = () => {
    // Perform logic to save profile settings
    console.log('Saving profile:', { name, email, password });
  };

  // Placeholder function for other settings
  const handleSaveSettings = () => {
    // Perform logic to save other settings
    console.log('Other settings saved');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Profile Settings */}
      <Text style={styles.sectionTitle}>Profile Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />

      {/* Other Settings */}
      <Text style={styles.sectionTitle}>Other Settings</Text>
      {/* Add other settings components here */}
      <Button title="Save Settings" onPress={handleSaveSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SettingsPage;
