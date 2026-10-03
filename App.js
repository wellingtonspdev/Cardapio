import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Tela1 from './src/tela1';
import Tela2 from './src/tela2';
import Tela3 from './src/tela3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#F77F00',
            tabBarInactiveTintColor: '#9A9289',
            tabBarStyle: {
              backgroundColor: '#1A1816',
              borderTopColor: 'rgba(255, 255, 255, 0.08)',
              borderTopWidth: 1,
              height: 60,
              paddingBottom: 8,
              paddingTop: 6,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Pizzas') {
                iconName = focused ? 'pizza' : 'pizza-outline';
              } else if (route.name === 'Hamburgueres') {
                iconName = focused ? 'fast-food' : 'fast-food-outline';
              } else if (route.name === 'Bebidas') {
                iconName = focused ? 'cafe' : 'cafe-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Pizzas" component={Tela1} />
          <Tab.Screen name="Hamburgueres" component={Tela2} />
          <Tab.Screen name="Bebidas" component={Tela3} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
