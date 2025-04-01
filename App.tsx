import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tenisList = [
  {
    id: 1,
    nome: "Nike KD 16",
    numero: 42,
    cor: "Rosa",
    image: require('./assets/KD16.jpg'),
  },
  {
    id: 2,
    nome: "Nike JA 1",
    numero: 41,
    cor: "Vermelho",
    image: require('./assets/JA1.jpg'),
  },
  {
    id: 3,
    nome: "Nike Jordan 4",
    numero: 43,
    cor: "Azul",
    image: require('./assets/JORDAN4.jpg'),
  },
];

export default function App() {
  const [carrinho, setCarrinho] = useState<any[]>([]);
  const [exibirCarrinho, setExibirCarrinho] = useState(false);

  const adicionarAoCarrinho = (item: any) => {
    setCarrinho((prev) => [...prev, item]);
    console.log(`Adicionado ao carrinho: ${item.nome}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Cabeçalho com logo e título */}
      <View style={styles.header}>
        <Image
          source={require('./assets/nikesimbol.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>NIKE</Text>
      </View>

      <Text style={styles.subtitle}>seu estilo aqui</Text>

      <FlatList
        data={tenisList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productInfo}>Número: {item.numero}</Text>
            <Text style={styles.productInfo}>Cor: {item.cor}</Text>

            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <AntDesign name="shoppingcart" size={20} color="#000" />
              <Text style={styles.cartButtonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.placeholder}>
          Carrinho: {carrinho.length} item{carrinho.length === 1 ? '' : 's'}
        </Text>
        <TouchableOpacity onPress={() => setExibirCarrinho(!exibirCarrinho)}>
          <Text style={styles.verCarrinho}>Ver meu carrinho</Text>
        </TouchableOpacity>
      </View>

      {exibirCarrinho && (
        <View style={styles.carrinhoContainer}>
          <Text style={styles.carrinhoTitulo}>Itens no carrinho:</Text>
          {carrinho.length === 0 ? (
            <Text style={styles.productInfo}>Nenhum item no carrinho.</Text>
          ) : (
            carrinho.map((item, index) => (
              <View key={index} style={styles.productCard}>
                <Text style={styles.productName}>{item.nome}</Text>
                <Text style={styles.productInfo}>Número: {item.numero}</Text>
                <Text style={styles.productInfo}>Cor: {item.cor}</Text>
              </View>
            ))
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 4,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productInfo: {
    fontSize: 14,
    color: '#666',
  },
  cartButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 6,
    justifyContent: 'center',
  },
  cartButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  placeholder: {
    color: '#aaa',
    fontStyle: 'italic',
    marginVertical: 10,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  verCarrinho: {
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  carrinhoContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  carrinhoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
