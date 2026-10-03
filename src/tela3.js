import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Estilo } from './Estilo';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function Tela3() {
  return (
    <SafeAreaView style={Estilo.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={Estilo.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header
          categoryTitle="BEBIDAS"
          categorySubtitle="Geladas para completar o pedido."
        />

        <ProductCard
          image={require('../assets/drinks/orange-soda.jpg')}
          title="ORANGE SODA"
          description="Refrigerante cítrico gelado"
          price="R$ 8,90"
          accessibilityLabel="Lata de refrigerante cítrico gelado Orange Soda"
        />

        <ProductCard
          image={require('../assets/drinks/milkshake-chocolate.jpg')}
          title="CHOCO SHAKE"
          description="Chocolate, chantilly e calda de caramelo"
          price="R$ 16,90"
          badge="DESTAQUE"
          badgeType="destaque"
          accessibilityLabel="Milkshake Choco Shake de chocolate cremoso com cobertura de chantilly e calda"
        />

        <ProductCard
          image={require('../assets/drinks/orange-fresh.jpg')}
          title="ORANGE FRESH"
          description="Suco natural de laranja"
          price="R$ 10,90"
          accessibilityLabel="Copo de suco de laranja natural e refrescante Orange Fresh"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
