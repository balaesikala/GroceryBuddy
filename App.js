import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import pages
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Dashboard from './Dashboard';
import CurrentListPage from './CurrentListPage';
import NewListPage from './NewListPage';
import BudgetStatusPage from './BudgetStatusPage';
import SettingsPage from './SettingsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CurrentList" component={CurrentListPage} />
        <Stack.Screen name="NewList" component={NewListPage} />
        <Stack.Screen name="BudgetStatus" component={BudgetStatusPage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
