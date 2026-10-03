import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Estilo } from './Estilo';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function Tela2() {
  return (
    <SafeAreaView style={Estilo.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={Estilo.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header
          categoryTitle="BURGERS"
          categorySubtitle="Smash, cheddar e muito sabor."
        />

        <ProductCard
          image={require('../assets/burgers/burger-classic.jpg')}
          title="CLASSIC BURGER"
          description="Carne, cheddar, alface, tomate e molho da casa"
          price="R$ 28,90"
          accessibilityLabel="Hambúrguer Classic Burger com carne artesanal, cheddar derretido, alface, tomate e molho especial"
        />

        <ProductCard
          image={require('../assets/burgers/burger-bacon.jpg')}
          title="BACON MELT"
          description="Carne, cheddar, bacon crocante e molho especial"
          price="R$ 32,90"
          badge="FAVORITO"
          badgeType="favorito"
          accessibilityLabel="Hambúrguer Bacon Melt com carne, cheddar cremoso, fatias crocantes de bacon e molho da casa"
        />

        <ProductCard
          image={require('../assets/burgers/burger-double.jpg')}
          title="DOUBLE SMASH"
          description="Duas carnes, cheddar e molho especial"
          price="R$ 35,90"
          accessibilityLabel="Hambúrguer Double Smash com dois discos de smash burger crocantes, duplo cheddar e molho especial"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
