import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela1() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PIZZAS</Text>
      <Text style={styles.subtitle}>Clássicas, quentes e irresistíveis.</Text>
    </SafeAreaView>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D1CAC2',
    fontSize: 14,
    marginTop: 8,
  },
});
