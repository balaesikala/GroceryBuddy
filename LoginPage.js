import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => navigation.navigate('Dashboard')} />
      <Text style={styles.signupMessage}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F3F3', // Light blue-green background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#096F6F', // Dark green color
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#096F6F', // Dark green border color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF', // White background
  },
  signupMessage: {
    marginTop: 20,
    color: '#096F6F', // Dark green color
  },
  signupLink: {
    color: '#0A98A9', // Dark blue-green color
  },
});

export default LoginPage;
