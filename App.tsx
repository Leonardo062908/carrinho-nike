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

  const adicionarAoCarrinho = (item: any) => {
    setCarrinho((prev) => [...prev, item]);
    console.log(`Adicionado ao carrinho: ${item.nome}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Título da loja */}
      <Text style={styles.title}>NIKE</Text>

      {/* Simbolo da NIKE */}
      <Image
        source={require('./assets/nikesimbol.jpg')}
        style={styles.logo}
      />

      {/* Subtítulo */}
      <Text style={styles.subtitle}>seu estilo aqui</Text>

      {/* Lista de produtos */}
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

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>
          Carrinho: {carrinho.length} item{carrinho.length === 1 ? '' : 's'}
        </Text>
      </View>
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
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
});
