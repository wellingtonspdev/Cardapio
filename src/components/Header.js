import React from 'react';
import { View, Text } from 'react-native';
import { Estilo } from '../Estilo';

export default function Header({ categoryTitle, categorySubtitle }) {
  return (
    <View>
      <View style={Estilo.brandHeader}>
        <View style={Estilo.brandTopRow}>
          <Text style={Estilo.brandTitle}>STREET BITE</Text>
        </View>
        <Text style={Estilo.brandTagline}>FAST FOOD • BIG FLAVOR</Text>
        <Text style={Estilo.brandSubtitle}>Escolha seu favorito.</Text>
      </View>

      <View style={Estilo.categoryHeader}>
        <Text style={Estilo.categoryTitle}>{categoryTitle}</Text>
        <Text style={Estilo.categorySubtitle}>{categorySubtitle}</Text>
      </View>
    </View>
  );
}
