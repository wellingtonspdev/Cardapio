import React from 'react';
import { View, Text, Image } from 'react-native';
import { Estilo } from '../Estilo';

export default function ProductCard({
  image,
  title,
  description,
  price,
  badge,
  badgeType,
  accessibilityLabel,
}) {
  const getBadgeStyle = () => {
    switch (badgeType) {
      case 'maisPedida':
        return {
          container: Estilo.badgeMaisPedida,
          text: Estilo.badgeMaisPedidaText,
        };
      case 'favorito':
        return {
          container: Estilo.badgeFavorito,
          text: Estilo.badgeFavoritoText,
        };
      case 'destaque':
        return {
          container: Estilo.badgeDestaque,
          text: Estilo.badgeDestaqueText,
        };
      default:
        return {
          container: Estilo.badgeFavorito,
          text: Estilo.badgeFavoritoText,
        };
    }
  };

  const badgeStyle = badge ? getBadgeStyle() : null;

  return (
    <View style={Estilo.card}>
      <View style={Estilo.cardImageContainer}>
        <Image
          source={image}
          style={Estilo.cardImage}
          resizeMode="cover"
          accessibilityLabel={accessibilityLabel || title}
        />
      </View>
      <View style={Estilo.cardBody}>
        <View style={Estilo.cardHeaderRow}>
          <Text style={Estilo.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          {badge ? (
            <View style={[Estilo.badge, badgeStyle.container]}>
              <Text style={[Estilo.badgeText, badgeStyle.text]}>{badge}</Text>
            </View>
          ) : null}
        </View>
        <Text style={Estilo.cardDescription}>{description}</Text>
        <View style={Estilo.cardFooterRow}>
          <Text style={Estilo.cardPriceLabel}>Preço individual</Text>
          <Text style={Estilo.cardPriceValue}>{price}</Text>
        </View>
      </View>
    </View>
  );
}
