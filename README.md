# Street Bite

[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2054-000020.svg?style=flat-square&logo=expo)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB.svg?style=flat-square&logo=react)](https://reactnative.dev/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-v7-6b52ae.svg?style=flat-square)](https://reactnavigation.org/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-LIVE-000000.svg?style=flat-square&logo=vercel)](https://streetbite.wellingtonsp.uk)
[![Status](https://img.shields.io/badge/Snack%20Status-READY%20FOR%20HUMAN%20VALIDATION-F77F00.svg?style=flat-square)](#expo-snack)
[![Disciplina](https://img.shields.io/badge/PDM%20II-Atividade%20Prática%207-E63946.svg?style=flat-square)](#sobre)

> Fast-food menu mobile desenvolvido em React Native com React Navigation Bottom Tabs para a **Atividade Prática 7** de Programação para Dispositivos Móveis II (5º semestre — DSM / Prof. Jeferson de Souza Dias).

---

## Sobre

O **Street Bite** é um aplicativo de cardápio de restaurante fast-food focado em experiência visual imersiva e navegação ergonômica. Inspirado na direção visual **Street Food Premium** (Dark Fast Food, Warm Neon e Editorial Food Photography), organiza os produtos em abas de categorias com renderização nativa, tipografia contrastante e carregamento 100% local de imagens.

---

## Cardápio

### Pizzas (`src/tela1.js`)
* **Margherita**: Molho de tomate, muçarela e manjericão fresco — `R$ 34,90`
* **Pepperoni** `[MAIS PEDIDA]`: Muçarela, molho de tomate e pepperoni fatiado — `R$ 39,90`
* **Funghi**: Muçarela, cogumelos salteados e ervas finas — `R$ 42,90`

### Burgers (`src/tela2.js`)
* **Classic Burger**: Carne artesanal, cheddar, alface, tomate e molho da casa — `R$ 28,90`
* **Bacon Melt** `[FAVORITO]`: Carne, cheddar cremoso, bacon crocante e molho especial — `R$ 32,90`
* **Double Smash**: Duas carnes smash, duplo cheddar e molho especial — `R$ 35,90`

### Bebidas (`src/tela3.js`)
* **Orange Soda**: Refrigerante cítrico gelado com gás — `R$ 8,90`
* **Choco Shake** `[DESTAQUE]`: Chocolate artesanal, chantilly cremoso e calda de caramelo — `R$ 16,90`
* **Orange Fresh**: Suco 100% natural de laranja gelado — `R$ 10,90`

---

## Navegação

A navegação principal é implementada utilizando **React Navigation Bottom Tabs** (`@react-navigation/bottom-tabs`), atendendo estritamente aos requisitos avaliativos da atividade:

* **Pizzas** → `src/tela1.js` (Ícone: `pizza` / `pizza-outline`)
* **Hamburgueres** → `src/tela2.js` (Ícone: `fast-food` / `fast-food-outline`)
* **Bebidas** → `src/tela3.js` (Ícone: `cafe` / `cafe-outline`)

A barra de navegação inferior adota estilização escura integrada à paleta da marca, com distinção clara de estado ativo (`#F77F00` com preenchimento sólido) e inativo (`#9A9289` em traço outline), além de tratamento de áreas seguras (`SafeAreaProvider` e `SafeAreaView`).

---

## Tecnologias

* **Expo SDK 54** (54.0.37)
* **React 19.1.0**
* **React Native 0.81.5**
* **@react-navigation/native 7.0.14**
* **@react-navigation/bottom-tabs 7.2.0**
* **react-native-safe-area-context ~5.6.0**
* **react-native-screens ~4.16.0**
* **@expo/vector-icons ^15.0.3** (Ionicons)
* **expo-status-bar ~3.0.9**

---

## Estrutura do Projeto

```text
/
├── App.js                         # Entrypoint com NavigationContainer e Tab.Navigator
├── app.json                       # Configuração limpa do Expo SDK 54
├── babel.config.js                # Preset babel-preset-expo
├── package.json                   # Dependências mínimas e scripts
├── .gitignore                     # Filtro estrito de build e dependências
├── README.md                      # Documentação técnica e acadêmica
├── FASTFOOD_ASSETS_MANIFEST.md    # Manifesto descritivo dos assets locais
├── assets/
│   ├── pizzas/
│   │   ├── pizza-margherita.jpg
│   │   ├── pizza-pepperoni.jpg
│   │   └── pizza-funghi.jpg
│   ├── burgers/
│   │   ├── burger-classic.jpg
│   │   ├── burger-bacon.jpg
│   │   └── burger-double.jpg
│   └── drinks/
│       ├── orange-soda.jpg
│       ├── milkshake-chocolate.jpg
│       └── orange-fresh.jpg
└── src/
    ├── tela1.js                   # Tela real de Pizzas
    ├── tela2.js                   # Tela real de Hambúrgueres
    ├── tela3.js                   # Tela real de Bebidas
    ├── Estilo.js                  # Tokens de cores, tipografia e estilos globais
    └── components/
        ├── Header.js              # Cabeçalho unificado de marca e categoria
        └── ProductCard.js         # Card reutilizável com acessibilidade e badges
```

---

## Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/wellingtonspdev/Cardapio.git
cd Cardapio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor Metro:
```bash
npx expo start --clear
```

4. Pressione `a` para abrir no emulador Android, `i` para simulador iOS, ou escaneie o QR Code com o aplicativo Expo Go no seu smartphone.

## Deploy Web (Vercel)

* **URL de Produção:** [https://streetbite.wellingtonsp.uk](https://streetbite.wellingtonsp.uk)
* **Build Command:** `expo export -p web`
* **Output Directory:** `dist`
* **Plataforma:** React Native Web via Metro Bundler

---

## Expo Snack

* **Link Direto do Snack:** [https://snack.expo.dev/yvwSKIIgkT14y8BPMp47g](https://snack.expo.dev/yvwSKIIgkT14y8BPMp47g)
* **Status:** `SNACK VALIDATED & LIVE`
* **Entrypoint:** Padrão `"main": "expo/AppEntry"` compatível com o bundler do Snack.
* **Assets:** 9 imagens locais vinculadas via cloud storage oficial da Expo e referenciadas via `require()`.
* **Auditoria de Conformidade:**
  * `expo install --check`: **PASS** (Dependencies up to date)
  * `expo-doctor`: **PASS** (18/18 checks passed)
  * `React Navigation Tab`: **PASS** (3 telas reais registradas)
  * `Snack Cloud Runtime`: **PASS** (Carregado com sucesso no Expo SDK 54, 0 erros no editor)

---

## Créditos das Imagens

As fotografias utilizadas no cardápio foram obtidas no [Pexels](https://www.pexels.com/) e são utilizadas conforme a licença da plataforma para fins educacionais e demonstrativos. Para mais detalhes sobre as dimensões e parâmetros de cada imagem, consulte o [FASTFOOD_ASSETS_MANIFEST.md](FASTFOOD_ASSETS_MANIFEST.md).

---

## Autor

Desenvolvido para a **Atividade Prática 7** — Curso de Desenvolvimento de Software Multiplataforma (FATEC).
Professor Responsável: **Jeferson de Souza Dias**.
