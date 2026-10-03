import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Street Bite</Text>
      <Text style={styles.subtitle}>FAST FOOD • BIG FLAVOR</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11100F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF4E6',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#F77F00',
    fontSize: 14,
    marginTop: 8,
    letterSpacing: 2,
  },
});
