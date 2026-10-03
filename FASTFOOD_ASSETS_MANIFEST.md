# Fast Food Menu — Assets Manifest

Pacote visual definido para a **Atividade Prática 7 — Cardápio**.

## Estrutura final

```text
assets/
├── pizzas/
│   ├── pizza-margherita.jpg
│   ├── pizza-pepperoni.jpg
│   └── pizza-funghi.jpg
├── burgers/
│   ├── burger-classic.jpg
│   ├── burger-bacon.jpg
│   └── burger-double.jpg
└── drinks/
    ├── orange-soda.jpg
    ├── milkshake-chocolate.jpg
    └── orange-fresh.jpg
```

## Produtos

| Arquivo | Produto | Descrição sugerida | Preço sugerido |
|---|---|---|---:|
| `pizza-margherita.jpg` | Margherita | Molho de tomate, muçarela e manjericão | R$ 34,90 |
| `pizza-pepperoni.jpg` | Pepperoni | Muçarela, molho de tomate e pepperoni | R$ 39,90 |
| `pizza-funghi.jpg` | Funghi | Muçarela, cogumelos e ervas | R$ 42,90 |
| `burger-classic.jpg` | Classic Burger | Carne, cheddar, alface, tomate e molho da casa | R$ 28,90 |
| `burger-bacon.jpg` | Bacon Melt | Carne, cheddar, bacon crocante e molho especial | R$ 32,90 |
| `burger-double.jpg` | Double Smash | Duas carnes, queijo e molho especial | R$ 35,90 |
| `orange-soda.jpg` | Orange Soda | Refrigerante cítrico gelado | R$ 8,90 |
| `milkshake-chocolate.jpg` | Choco Shake | Chocolate, chantilly e calda | R$ 16,90 |
| `orange-fresh.jpg` | Orange Fresh | Suco natural de laranja | R$ 10,90 |

## Uso no app

- As imagens são carregadas **localmente** via `require()`.
- Utilize `resizeMode="cover"` nos cards.
- Altura visual recomendada do hero de cada card: **160–190 px**.
- Use `borderRadius` no card e `overflow: 'hidden'` no container da imagem.
- Os arquivos baixados pelo script usam largura máxima servida pelo CDN de **1200 px**, adequada ao app e mais leve que os originais.

## Origem

Imagens selecionadas no Pexels para este projeto acadêmico. Consulte a licença do Pexels para os termos vigentes de utilização.
