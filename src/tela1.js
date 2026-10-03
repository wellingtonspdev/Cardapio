import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Estilo } from './Estilo';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function Tela1() {
  return (
    <SafeAreaView style={Estilo.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={Estilo.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header
          categoryTitle="PIZZAS"
          categorySubtitle="Clássicas, quentes e irresistíveis."
        />

        <ProductCard
          image={require('../assets/pizzas/pizza-margherita.jpg')}
          title="MARGHERITA"
          description="Molho de tomate, muçarela e manjericão"
          price="R$ 34,90"
          accessibilityLabel="Pizza Margherita com molho de tomate, muçarela e manjericão fresco"
        />

        <ProductCard
          image={require('../assets/pizzas/pizza-pepperoni.jpg')}
          title="PEPPERONI"
          description="Muçarela, molho de tomate e pepperoni"
          price="R$ 39,90"
          badge="MAIS PEDIDA"
          badgeType="maisPedida"
          accessibilityLabel="Pizza Pepperoni com muçarela, molho de tomate e fatias de pepperoni"
        />

        <ProductCard
          image={require('../assets/pizzas/pizza-funghi.jpg')}
          title="FUNGHI"
          description="Muçarela, cogumelos e ervas"
          price="R$ 42,90"
          accessibilityLabel="Pizza Funghi com muçarela, cogumelos salteados e ervas finas"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
