import { StyleSheet, Platform } from 'react-native';

export const Cores = {
  background: '#11100F',
  surface: '#1A1816',
  surfaceSoft: '#211E1A',
  surfaceElevated: '#282420',
  red: '#E63946',
  orange: '#F77F00',
  mustard: '#F4B942',
  cream: '#FFF4E6',
  white: '#FFFFFF',
  textSecondary: '#D1CAC2',
  muted: '#9A9289',
  border: 'rgba(255, 255, 255, 0.08)',
  borderLight: 'rgba(255, 255, 255, 0.14)',
  borderWarm: 'rgba(247, 127, 0, 0.35)',
};

export const Estilo = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Cores.background,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 48,
  },

  // Cabeçalho da Marca
  brandHeader: {
    paddingTop: 6,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Cores.border,
    marginBottom: 16,
  },
  brandTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: Cores.cream,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  brandTagline: {
    fontSize: 11,
    fontWeight: '700',
    color: Cores.orange,
    letterSpacing: 2,
    marginTop: 2,
    textTransform: 'uppercase',
  },
  brandSubtitle: {
    fontSize: 13,
    color: Cores.muted,
    marginTop: 6,
  },

  // Cabeçalho da Seção / Categoria
  categoryHeader: {
    marginBottom: 16,
    marginTop: 4,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Cores.cream,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  categorySubtitle: {
    fontSize: 14,
    color: Cores.textSecondary,
    marginTop: 2,
    lineHeight: 20,
  },

  // Cards de Produto
  card: {
    backgroundColor: Cores.surface,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Cores.border,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
      default: {},
    }),
  },
  cardImageContainer: {
    width: '100%',
    height: 185,
    backgroundColor: Cores.surfaceSoft,
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardBody: {
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Cores.cream,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    flexShrink: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: Cores.textSecondary,
    lineHeight: 20,
    marginBottom: 14,
  },
  cardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Cores.border,
  },
  cardPriceLabel: {
    fontSize: 11,
    color: Cores.muted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardPriceValue: {
    fontSize: 19,
    fontWeight: '800',
    color: Cores.mustard,
    letterSpacing: 0.5,
  },

  // Badges
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  badgeMaisPedida: {
    backgroundColor: Cores.red,
  },
  badgeMaisPedidaText: {
    color: Cores.white,
  },
  badgeFavorito: {
    backgroundColor: Cores.orange,
  },
  badgeFavoritoText: {
    color: Cores.white,
  },
  badgeDestaque: {
    backgroundColor: Cores.mustard,
  },
  badgeDestaqueText: {
    color: Cores.background,
  },
});
