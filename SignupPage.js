import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('Dashboard')} />
      <Text style={styles.loginMessage}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login here
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
  loginMessage: {
    marginTop: 20,
    color: '#096F6F', // Dark green color
  },
  loginLink: {
    color: '#0A98A9', // Dark blue-green color
  },
});

export default SignupPage;
